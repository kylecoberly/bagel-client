import React from "react"

export default function BagelListing(props){
    return (
        <div>
            <p>{props.type}: {props.rating}</p>
        </div>
    )
}
