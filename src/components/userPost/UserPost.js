import React from "react";
import './UserPost.scss';

export function UserPost (props) {
    const {usr} = props;

    return (
        <div className='user-post d-flex align-items-center' id={usr.id}>
            <label htmlFor="post">
                <h3>{usr.username}</h3>
                <br/>
                <p>{usr.name}</p>
                <br/>
                <p>{usr.address.street}</p>
            </label>
        </div>
    )

}