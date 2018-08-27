import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        <h3>{employee.name}</h3>
                        <button onClick={() => this.props.deleteEmployee(employee.id)}>Delete</button>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList

