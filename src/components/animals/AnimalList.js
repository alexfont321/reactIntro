import React, { Component } from 'react'

class AnimalList extends Component {
    render() {
        return (
            <div className="animals">
                {
                    this.props.animals.map(animal => {
                        return <div key={animal.id}>
                                    <h3>{animal.name}</h3>
                                    <p>{this.props.owners[`${animal.id - 1}`].name}</p>
                                </div>

                    })

                }

            </div>
        )
    }

}

export default AnimalList;