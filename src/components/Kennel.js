import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./locationList/LocationList"

class Kennel extends Component {
    render() {
        return (
            <div>
                <h3>Dog Kennels</h3>
                < LocationList />
                < EmployeeList />
            </div>
        );
    }
}

export default Kennel;