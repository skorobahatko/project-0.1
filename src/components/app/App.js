import React, {Component} from 'react';
import './App.css';
import {UsersDropList} from '../users-droplist/UsersDropList';
import {users} from "../../json-placeholder/UsersConstants";
import {Header} from "../header/Header";


class App extends Component {
    constructor(props) {
        super(props);


        this.state = {
            count: 0,
            userList: []
        };
    }

    updateCounter = (value, user) => {
        let valueOfCount = this.state.count;
        valueOfCount += value;
        let addNewUser = {
            name: user.name,
            username: user.username,
            email: user.email
        };
        this.setState( (prevState) => {
            return {
                count: valueOfCount,
                userList: [ { ...addNewUser }, ...prevState.userList ]
            }
        });
        console.log (this.state.userList);
    };


    render() {


        return (<div className="App">
                <Header count={this.state.count}/>
                <UsersDropList users={users} updateData={this.updateCounter}/>
            </div>);
    }
}

export default App;
