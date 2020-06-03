import React from "react";
import './UserPost.scss';

export function UserPost (props) {
    const {usr} = props;

    const user = {
        username: usr.username,
        name: usr.name,
        email: usr.email
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
                console.log (user);
                console.log ('+1');
                props.updateData(1, user);
            }}>+</button>
        </div>
    )

}