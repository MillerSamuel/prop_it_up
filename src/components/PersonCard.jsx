import React, {Component} from 'react'

class PersonCard extends Component {
    render(){
        let {fname, lname,age,hairColor}=this.props
        return <div>
            <h2>{lname}, {fname} </h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    }
}

export default PersonCard