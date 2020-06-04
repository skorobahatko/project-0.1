import React from "react";
import './UserPost.scss';

export function UserPost (props) {
    const {usr, updateData, onEdit, afterEdit} = props;

    const user = {
        username: usr.username,
        name: usr.name,
        email: usr.email,
        id: usr.id
    };

    return (
        <div className='user-post d-flex align-items-center' id={usr.key}>
            <label htmlFor="post">
                <h3>{usr.username}</h3>
                <br/>
                <p>{usr.name}</p>
                <br/>
                <p>{usr.email}</p>
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