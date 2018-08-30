import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locationList/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from "./owners/OwnersList"
import DbCalls from "../modules/DbCalls"
import AnimalDetail from './animals/AnimalDetail'
import EmployeeDetail from "./employee/EmployeeDetail"
import AnimalForm from "./animals/AnimalForm"
import EmployeeForm from "./employee/EmployeeForm"
import AnimalEditForm from "./animals/AnimalEditForm"
import Login from './Login'



import "./ApplicationViews.css"


class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null
    isSessionAuthenticated = () => sessionStorage.getItem("credentials") !== null


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
        return DbCalls.deleteAnimal(id)
            .then(() => fetch(`http://localhost:5002/animals`))
            .then(e => e.json())
            .then(animals => this.setState({
                animals: animals
            }))
    }

    addAnimal = animal => DbCalls.postAnimal(animal)
    .then(() => DbCalls.getAllAnimals())
    .then(animals => this.setState({
        animals: animals
    }))

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

    addEmployee = employee => DbCalls.addEmployee(employee)
    .then(() => DbCalls.getAllEmployees())
    .then(employees => this.setState({
        employees: employees
    }))

    editAnimal = (id, newAnimal) => DbCalls.editAnimal(id, newAnimal)
    .then(() => DbCalls.getAllAnimals())
    .then(animals => this.setState({
        animals: animals
    }))

    render() {
        return (
            <React.Fragment>
                <div className="main">
                    <Route path="/login" component={Login} />

                    <Route exact path="/" render={(props) => {
                        if (this.isAuthenticated()  || this.isSessionAuthenticated()){
                            return <LocationList locations={this.state.locations} 
                                                employees={this.state.employees}
                            />

                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/animals" render={(props) => {
                        if (this.isAuthenticated() || this.isSessionAuthenticated()) {
                            return <AnimalList {...props} animals={this.state.animals} deleteAnimal={this.deleteAnimal}
                            // owners={this.state.owners}
                            />
                        } else {
                            return <Redirect to="/login" />

                        }
                    }} />
                    <Route path="/animals/:animalId(\d+)" render={(props) => {
                        return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />
                    <Route path="/animals/new" render={(props) => {
                        return <AnimalForm {...props}
                            addAnimal={this.addAnimal}
                            employees={this.state.employees} />
                    }} />
                    <Route path="/animals/edit/:animalId(\d+)" render={props => {
                        return <AnimalEditForm {...props} employees={this.state.employees} animals={this.state.animals}
                                                editAnimal={this.editAnimal}
                        />
                    }} />
                    <Route exact path="/employees" render={(props) => {
                        if (this.isAuthenticated() || this.isSessionAuthenticated()) {
                            return <EmployeeList deleteEmployee={this.deleteEmployee}
                                                 employees={this.state.employees} 
                                                 animals={this.state.animals}
                                                 deleteAnimal={this.deleteAnimal}
                                                 />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/employees/:employeeId(\d+)" render={(props) => {
                        return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                    }} />
                    <Route path="/employees/new" render={props => {
                        return <EmployeeForm {...props}  
                        addEmployee={this.addEmployee} />
                    }}
                    />
                    <Route exact path="/owners" render={(props) => {
                        if (this.isAuthenticated() || this.isSessionAuthenticated()) {
                            return <OwnersList owners={this.state.owners} deleteOwner={this.deleteOwner} />
                        } else {
                            return <Redirect to="/login" />

                        }
                    }} />
                </div>
            </React.Fragment>
        )
    }
}

export default ApplicationViews
