import React from "react";
import './UserPost.scss';

export function UserPost (props) {
    const {usr, updateDate} = props;

// let update = () => {
//     console.log ('ok');
//     updateDate(1);
// };

    return (
        <div className='user-post d-flex align-items-center' id={usr.key}>
            <label htmlFor="post">
                <h3>{usr.username}</h3>
                <br/>
                <p>{usr.name}</p>
                <br/>
                <p>{usr.email}</p>
            </label>
            <button className='btn btn-primary'>+</button>
            {/*<button></button>*/}
        </div>
    )

}