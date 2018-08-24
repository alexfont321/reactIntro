import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locationList/LocationList'
import EmployeeList from './employee/EmployeeList'
import "./ApplicationViews.css"


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Angus" },
        { id: 4, name: "Henley" },
        { id: 5, name: "Derkins" },
        { id: 6, name: "Checkers" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay", phoneNumber: 5552713},
        { id: 2, name: "Emma Beaton", phoneNumber: 8994523 },
        { id: 3, name: "Dani Adkins", phoneNumber: 9093546 },
        { id: 4, name: "Adam Oswalt", phoneNumber: 2123721 },
        { id: 5, name: "Fletcher Bangs", phoneNumber: 7008908 },
        { id: 6, name: "Angela Lee", phoneNumber: 5675247 }
    ]


    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI

    }

    render() {
        return (
            <React.Fragment>
                <div class="main">
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners}/>
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <EmployeeList employees={this.state.owners} />
                }} />
                </div>
            </React.Fragment>
        )
    }
}

export default ApplicationViews
