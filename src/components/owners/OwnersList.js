import React, { Component } from 'react'

class OwnersList extends Component {
    render() {
        return(
            <div className="owners">
                {
                this.props.owners.map( owner => {
                    return <div key={owner.id}>
                                <h3>{owner.name}</h3>
                                <p>{owner.phoneNumber}</p>
                                <button onClick={() => this.props.deleteOwner(owner.id)}>Delete</button>
                            </div>
                })}
            </div>

        )
    }
}

export default OwnersList;