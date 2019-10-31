import React, { Component } from "react"

export default class NewBagelForm extends Component {
    state = {
        newBagel: {
            type: "",
            rating: 1,
        },
    }
    handleChange = type => event => {
        const newBagel =  this.state.newBagel
        newBagel[type] = event.target.value
        this.setState({ newBagel })
    }
    addBagel = event => {
        event.preventDefault()
        const { type, rating } = this.state.newBagel
        this.props.addBagel({ type, rating })
        this.setState({
            newBagel: {
                type: "",
                rating: 1,
            },
        })
    }
    render(){
        return (
            <form onSubmit={this.addBagel}>
                <input
                    type="text"
                    placeholder="Type"
                    value={this.state.newBagel.type}
                    onChange={this.handleChange("type")}
                />
                <input
                    type="number"
                    placeholder="Rating"
                    value={this.state.newBagel.rating}
                    onChange={this.handleChange("rating")}
                />

                <input type="Submit" value="Add Bagel" />
            </form>
        )
    }
}
