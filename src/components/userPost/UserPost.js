import React from "react";
import './UserPost.scss';

export function UserPost (props) {
    const {usr, updateData, onEdit, afterEdit} = props;

    const user = {
        lastName: usr.last_name,
        name: usr.first_name,
        email: usr.email,
        id: usr.id
    };

    return (
        <div className='user-post d-flex align-items-center' id={user.key}>
            <label htmlFor="post">
                <h3>{user.name} {user.lastName}</h3>
                <br/>
                <p>{user.email}</p>
            </label>
            <button onClick={() => {
                console.log ('+1');
                updateData(1, user);
            }}>choose</button>
            <button onClick={() => {
                console.log (user);
                onEdit(user);
            }}>edit</button>
        </div>
    )

}