import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locationList/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from "./owners/OwnersList"
import DbCalls from "../modules/DbCalls"
import AnimalDetail from './animals/AnimalDetail'
import EmployeeDetail from "./employee/EmployeeDetail"


import "./ApplicationViews.css"


class ApplicationViews extends Component {



    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }


    componentDidMount() {
        // const newState = {}


        DbCalls.getAllAnimals().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })
            .then(() => DbCalls.getAllEmployees()
                .then(allEmployees => {
                    this.setState({
                        employees: allEmployees
                    })
                }))
            .then(() => DbCalls.getAllLocations()
                .then(allLocations => {
                    this.setState({
                        locations: allLocations
                    })
                }))
            .then(() => DbCalls.getAllOwners()
                .then(allOwners => {
                    this.setState({
                        owners: allOwners
                    })
                }))

        // .then(animals => newState.animals = animals)
        // .then(() => fetch("http://localhost:5002/employees")
        // .then(r => r.json()))
        // .then(employees => newState.employees = employees)
        // .then(() => fetch("http://localhost:5002/locations"))
        // .then(r => r.json())
        // .then(locations => newState.locations = locations)
        // .then(() => fetch("http://localhost:5002/owners"))
        // .then(r=> r.json())
        // .then(owners => newState.owners = owners)
        // .then(() => this.setState(newState))

    }

    deleteAnimal = id => {
        DbCalls.deleteAnimal(id)
            .then(() => fetch(`http://localhost:5002/animals`))
            .then(e => e.json())
            .then(animals => this.setState({
                animals: animals
            }))
    }

    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
            .then(owners => this.setState({
                owners: owners
            }))
    }
    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
            .then(employees => this.setState({
                employees: employees
            }))
    }

    render() {
        return (
            <React.Fragment>
                <div className="main">
                    <Route exact path="/" render={(props) => {
                        return <LocationList locations={this.state.locations} />
                    }} />
                    <Route exact path="/animals" render={(props) => {
                        return <AnimalList animals={this.state.animals} deleteAnimal={this.deleteAnimal}
                        // owners={this.state.owners}
                        />
                    }} />
                    <Route path="/animals/:animalId(\d+)" render={(props) => {
                        return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />
                    <Route exact path="/employees" render={(props) => {
                        return <EmployeeList employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
                    }} />
                    <Route path="/employees/:employeeId(\d+)" render={(props) => {
                        return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                    }}/>
                    <Route exact path="/owners" render={(props) => {
                        return <OwnersList owners={this.state.owners} deleteOwner={this.deleteOwner} />
                    }} />
                </div>
            </React.Fragment>
        )
    }
}

export default ApplicationViews
