import React from "react";
import './Header.scss';

export function Header (props) {
    const {} = props;

    return (
        <div className='container-fluid header-site'>
            <div className='children logo'>
                <div>
                    <h2>mini-homework</h2>
                </div>
            </div>
            <div className='children counter'>
                <div>
                    {/*<Counter/>*/}
                </div>
            </div>
        </div>
    )

}