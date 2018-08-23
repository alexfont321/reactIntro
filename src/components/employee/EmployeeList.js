import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        <h3>{employee.name}</h3>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList

