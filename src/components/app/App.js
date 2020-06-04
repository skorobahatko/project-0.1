import React, {Component} from 'react';
import './App.css';
import {users} from "../../json-placeholder/UsersConstants";
import {Header} from "../header/Header";
import uniqueId from 'uniqid';
import {UserForm} from "../user-form/UserForm";
import {UserPost} from "../userPost/UserPost";


class App extends Component {
    constructor(props) {
        super(props);


        this.state = {
            count: 0,
            userList: [],
            users: [...users],
            editedUser:{}
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
    editUser = (user) => {
        this.setState({
            editedUser: user
        })
    };

    render() {

        return (<div className="App">
                <Header count={this.state.count}/>
                    <div className='d-flex w-100 h-100 flex-wrap users-droplist'>
                        <UserForm newUser={this.createNewUser} editUser={this.state.editedUser}/>
                        {
                            this.state.users.map((user) => {
                                return(
                                     <UserPost usr={user} key={user.id} updateData={this.updateCounter} onEdit={this.editUser}/>
                               )
                            })
                        }
                    </div>
                </div>);
    }
}

export default App;
