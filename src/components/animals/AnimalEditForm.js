import React, { Component } from "react"

export default class AnimalEditForm extends Component {
    state = {
        animalName: "",
        breed: "",
        employee: ""
        // animal: {}, 
        // employee: {}

    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewAnimal = evt => {
        evt.preventDefault()
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
                employeeId: this.props.employees.find(e => e.name === this.state.employee).id,
            }
            const animalEditId = parseInt(this.props.match.params.animalId)
            // Create the animal and redirect user to animal list
            this.props.editAnimal(animalEditId, animal).then(() => this.props.history.push("/animals"))
    
    }

    componentDidMount(){
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}
        this.setState(animal)


    }

    render() {



        return (
            <React.Fragment>
            <form className="animalForm">
                <div className="form-group">
                    <label htmlFor="animalName">Animal name</label>
                    <input type="text" required="true"
                           className="form-control"
                           onChange={this.handleFieldChange}
                           id="animalName"
                           placeholder="Animal name"
                           defaultValue={this.state.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="breed">Breed</label>
                    <input type="text" required="true"
                           className="form-control"
                           onChange={this.handleFieldChange}
                           id="breed" placeholder="Breed"
                           defaultValue={this.state.breed} />
                </div>
                <div className="form-group">
                    <label htmlFor="employee">Assign to caretaker</label>
                    <select defaultValue="" name="employee" id="employee"
                            onChange={this.handleFieldChange}>
                        <option value="">Select an employee</option>
                    {
                        this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                    }
                    </select>
                </div>
                <button type="submit" onClick={this.constructNewAnimal} className="btn btn-primary">Submit</button>
            </form>
        </React.Fragment>

        )
    }

}