import React from 'react';
import logo from './logo.svg';
import './App.css';

import BagelList from "./components/BagelList"
import NewBagelForm from "./components/NewBagelForm"

class App extends React.Component {
    state = {
        bagels: [],
    }
    componentDidMount(){
        fetch("https://bagel-api-fis.herokuapp.com/bagels")
            .then(response => response.json())
            .then(bagels => {
                this.setState({ bagels })
            })
    }
    addBagel = newBagel => {
        fetch("https://bagel-api-fis.herokuapp.com/bagels", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBagel)
        })

        this.setState({
            bagels: [...this.state.bagels, newBagel],
        })
    }
    render(){
        return (
            <div className="App">
                <h1>Bagel Shop</h1>
                <BagelList bagels={this.state.bagels} />
                <NewBagelForm addBagel={this.addBagel} />
            </div>
        );
    }
}

export default App;
