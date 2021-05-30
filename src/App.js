import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
// import logo from './logo.svg'
import './App.css'
import Searchbox from './components/Search-box/serach-box.component'

class App extends Component {
    constructor() {
        super()
        this.state = {
            monsters: [],
            searchField: '',
        }

        // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                this.setState({ monsters: users })
            })
    }

    handleChange = (e) => {
        this.setState({
            searchField: e.target.value,
        })
    }

    render() {
        const { monsters, searchField } = this.state
        const filteredMonsters = monsters.filter((monsters) =>
            monsters.name
                .toLowerCase()
                .includes(searchField.toLocaleLowerCase())
        )
        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <Searchbox
                    placeholder="search monsters"
                    handleChange={this.handleChange}
                ></Searchbox>
                <div>
                    <CardList monsters={filteredMonsters}></CardList>\
                </div>
            </div>
        )
    }
}

export default App
