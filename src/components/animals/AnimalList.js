import React, { Component } from 'react'
import dog from "./DogIcon.png";
import "./Animals.css"
import { Link } from "react-router-dom"



class AnimalList extends Component {
    render() {
        return (
            <div className="animals">
                {
                    this.props.animals.map(animal => {
                        return <div key={animal.id} className="card">
                                    <div className="card-body">
                                        <div className="card-title">
                                        <img src={dog} className="icon--dog" alt={animal.name} />

                                        <h3>{animal.name}</h3>
                                        {/* <p>{this.props.owners[`${animal.id - 1}`].name}</p> */}
                                        <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>

                                        <button href="#"
                                            onClick={() => this.props.deleteAnimal(animal.id)}
                                            className="card-link">Delete</button>
                                        </div>
                                    </div>
                                </div>

                    })

                }

            </div>
        )
    }

}

export default AnimalList;