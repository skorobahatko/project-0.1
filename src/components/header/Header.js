import React from "react";
import './Header.scss';

export function Header (props) {
    return (
        <div className='container-fluid header-site'>
            <div className='children logo'>
                <div>
                    <h2>mini-homework</h2>
                </div>
            </div>
            <div className='children counter'>
                <div>
                    <h4>{props.count}</h4>
                </div>
            </div>
        </div>
    )

}