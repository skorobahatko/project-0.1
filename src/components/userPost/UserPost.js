import React from "react";
import './UserPost.scss';

export function UserPost (props) {
    const {username, street, id} = props;

    return (
        <div className='user-post d-flex align-items-center' id={id}>
            <label htmlFor="post">
                <h3>{username}</h3>
                <br/>
                <p>{street}</p>
            </label>
        </div>
    )

}