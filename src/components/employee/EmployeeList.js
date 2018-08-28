import React, { Component } from 'react'
import { Link } from "react-router-dom"


class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="employeeButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>
                        Admit Employee
                    </button>
                </div>
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        <h3>{employee.name}</h3>
                        <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>

                        <button onClick={() => this.props.deleteEmployee(employee.id)}>Delete</button>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}

export default EmployeeList

