import React, {Component} from 'react';
import './App.css';
import {UsersDropList} from '../users-droplist/UsersDropList';
import {users} from "../../json-placeholder/UsersConstants";
import {Header} from "../header/Header";
import uniqueId from 'uniqid';


class App extends Component {
    constructor(props) {
        super(props);


        this.state = {
            count: 0,
            userList: [],
            users: [...users]
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
    createNewUser = (username, name, email) => {
        const newUsers  = {
            username:username,
            name: name,
            email: email,
        };
        this.setState((prevState) => {
            return {
                users: [{ ...newUsers, id: uniqueId()}, ...prevState.users]
            }})

    };


    render() {


        return (<div className="App">
                <Header count={this.state.count}/>
                <UsersDropList users={this.state.users} updateData={this.updateCounter} newUser={this.createNewUser}/>
            </div>);
    }
}

export default App;
