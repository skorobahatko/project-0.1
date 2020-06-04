import React, {Component} from 'react';
import './App.css';
import {Header} from "../header/Header";
import uniqueId from 'uniqid';
import {UserForm} from "../user-form/UserForm";
import {UserPost} from "../userPost/UserPost";
import {accessToken} from "../../json-placeholder/UsersConstants";


class App extends Component {
    constructor(props) {
        super(props);


        this.state = {
            count: 0,
            userList: [],
            editedUser: null,
            isLoading: false,
            users: []
        };
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = async () => {
        if (accessToken) {
            this.setState({
                isLoading: true
            });
            let response = await fetch(`https://gorest.co.in/public-api/users?_format=json&access-token=${accessToken}`);

            if (response.ok) {
                let json = await response.json();
                const { result } = json;
                this.setState({
                    users: result,
                    isLoading: false
                })
            }
        }
    };

    updateCounter = (value, user) => {
        let valueOfCount = this.state.count;
        valueOfCount += value;
        let addNewUser = {
            first_name: user.name,
            last_name: user.lastName,
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

    createNewUser = (name, lastName, email) => {
        const newUsers  = {
            first_name: name,
            last_name: lastName,
            email: email,
        };
        this.setState((prevState) => {
            return {
                users: [{ ...newUsers, id: uniqueId()}, ...prevState.users]
            }})
    };
    editUser = (user) => {
        user.status = true;
        this.setState({
            editedUser: user
        })
        console.log (this.state.editedUser);
    };

    render() {
    const {isLoading, editedUser} = this.state;
        return (<div className="App">
                <Header count={this.state.count}/>
                    <div className='d-flex w-100 h-100 flex-wrap users-droplist'>
                        <UserForm newUser={this.createNewUser} editUser={editedUser} />
                        { !isLoading ?
                            this.state.users.map((user) => {
                                return(
                                     <UserPost usr={user} key={user.id} updateData={this.updateCounter} onEdit={this.editUser}/>
                               )
                            }) : <h1>LOADING PLEASE WAIT</h1>
                        }
                    </div>
                </div>);
    }
}

export default App;
