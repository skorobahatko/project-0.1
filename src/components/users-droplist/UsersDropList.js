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
                {/*<UserForm/>*/}
            {
                users.map((user) => {
                    return(
                    <UserPost usr={user} key={user.id}/>)
                })
            }
            </div>
        );
    }
}