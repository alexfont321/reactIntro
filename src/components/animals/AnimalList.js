import React, { Component } from "react"
import "./Animals.css"
import AnimalCard from "./AnimalCard"

class AnimalList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/animals/new")}
                            className="btn btn-success">
                        Admit Animal
                    </button>
                </div>
                <section className="animals">
                {
                    this.props.animals.map(animal =>
                        <AnimalCard key={animal.id} animal={animal} {...this.props} />
                    )
                }
                </section>
            </React.Fragment>
        )
    }
}

// class AnimalList extends Component {
//     render() {
//         return (

//             <React.Fragment>
//                 <div className="animalButton">
//                     <button type="button"
//                         className="btn btn-success"
//                         onClick={() => {
//                             this.props.history.push("/animals/new")
//                         }
//                         }>
//                         Admit Animal
//                     </button>
//                 </div>
//                 <div className="animals">
//                     {
//                         this.props.animals.map(animal => {
//                             return <div key={animal.id} className="card">
//                                 <div className="card-body">
//                                     <div className="card-title">
//                                         <img src={dog} className="icon--dog" alt={animal.name} />

//                                         <h3>{animal.name}</h3>
//                                         {/* <p>{this.props.owners[`${animal.id - 1}`].name}</p> */}
//                                         <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
//                                         <div>
//                                             <button href="#"
//                                                 onClick={() => { this.props.deleteAnimal(animal.id) }}
//                                                 className="card-link">Delete</button>
//                                             <button className="card-link" onClick={() => {this.props.history.push(`/animals/edit/${animal.id}`)}}>Edit Dog</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         })

//                     }

//                 </div>
//             </React.Fragment>
//         )
//     }

// }

export default AnimalList;