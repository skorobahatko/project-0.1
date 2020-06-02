import React, {Component} from "react";
import './UserDropList.scss';
import {UserPost} from '../userPost/UserPost';

export class UsersDropList extends Component {
    constructor(props) {
        super (props);

    }


    render() {
        const {users} = this.props;

        return (
            <div className='d-flex w-100 h-100 flex-wrap users-droplist'>
            {
                users.map((user) => {
                    return(
                    <UserPost username={user.username} street={user.address.street} key={user.id}/>)
                })
            }
            </div>
        );
    }
}