import React, { Component } from 'react'
// import EmployeeList from "../employee/EmployeeList"

class LocationList extends Component {
    render() {
        return (
            <div className="locations">
                {
                    this.props.locations.map(location => 
                        <div key={location.id}>
                            <h3>{location.name}</h3>
                            <p>{location.address}</p>
                            {/* {
                                this.props.employees.filter(employee => employee.locationId === location.id)
                                .map( employee => 
                                    <EmployeeList key={employee.id} employee={employee} {...this.props}/>
                                )
                            } */}
                        </div>
                    )}
            
            </div>


        )

    }

}

export default LocationList;