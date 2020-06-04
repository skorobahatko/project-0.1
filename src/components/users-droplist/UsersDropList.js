import React, {Component} from "react";
import './UserDropList.scss';
import {UserPost} from '../userPost/UserPost';
import {UserForm} from "../user-form/UserForm";

export class UsersDropList extends Component {
    constructor(props) {
        super (props);


    }


    render() {
        const {users, updateData, newUser} = this.props;

        return (
            <div className='d-flex w-100 h-100 flex-wrap users-droplist'>
                <UserForm newUser={newUser}/>
            {
                users.map((user) => {
                    return(
                    <UserPost usr={user} key={user.id} updateData={updateData}/>
                    )
                })
            }
            </div>
        );
    }
}