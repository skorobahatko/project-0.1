import React, {Component} from 'react';
import './App.css';
import {UsersDropList} from '../users-droplist/UsersDropList';
import {users} from "../../json-placeholder/UsersConstants";
import {Header} from "../header/Header";


class App extends Component {
    constructor(props) {
        super(props);


        this.state = {
            count: 0
        }
        this.updateCounter = this.updateCounter.bind();
    }

    updateCounter = (value) => {
        let valueOfCount = this.state.count;
        valueOfCount += value;
        this.setState( {
            count: valueOfCount
        })
    };


    render() {


        return (<div className="App">
                <Header count={this.state.count}/>
                <UsersDropList users={users} updateData={this.updateCounter}/>
            </div>);
    }
}

export default App;
