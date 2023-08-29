import React from "react"

export default function JokesComponent(props) {
    return (
        <div>
            {props.nam && <h3>Name: {props.nam}</h3>}
            <p>Email: {props.email}</p>
        </div>
    )
}