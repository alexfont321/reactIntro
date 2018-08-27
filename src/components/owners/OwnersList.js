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
                            </div>
                })}
            </div>

        )
    }
}

export default OwnersList;