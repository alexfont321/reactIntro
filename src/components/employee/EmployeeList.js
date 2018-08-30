import React, { Component } from 'react'
import AnimalCard from "../animals/AnimalCard"

export default class EmployeeList extends Component {
    render () {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card card--employee">
                        <div className="card-body">
                            <h5 className="card-title">
                                {/* <img src={person} className="icon--employee" /> */}
                                {employee.name}
                            <a href="#"
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="card-link">Delete</a>
                            </h5>

                            <h6 class="card-subtitle mb-2 text-muted">Caretaker For</h6>
                            <div className="animals--caretaker">
                            {
                                this.props.animals
                                    .filter(anml => anml.employeeId === employee.id)
                                    .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                            }
                            </div>

                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}


// class EmployeeList extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <div className="employeeButton">
//                     <button type="button"
//                             className="btn btn-success"
//                             onClick={() => {
//                                 this.props.history.push("/employees/new")}
//                             }>
//                         Admit Employee
//                     </button>
//                 </div>
//             <section className="employees">
//             {
//                 this.props.employees.map(employee =>
//                     <div key={employee.id}>
//                         <h3>{employee.name}</h3>
//                         <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>

//                         <button onClick={() => this.props.deleteEmployee(employee.id)}>Delete</button>
//                     </div>
//                 )
//             }
//             </section>
//             </React.Fragment>
//         )
//     }
// }

// export default EmployeeList

