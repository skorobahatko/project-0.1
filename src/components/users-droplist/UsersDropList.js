import React, {Component} from "react";
import './UserDropList.scss';
import {UserPost} from '../userPost/UserPost';

export class UsersDropList extends Component {
    constructor(props) {
        super (props);

        this.state = {
            count: 1
        }
    }

    // Count = (value) => {
    //     let valueOfCount = this.state.count;
    //     valueOfCount += value;
    //     this.setState({
    //         count: valueOfCount
    //   })
    // };

    render() {
        const {users, updateData} = this.props;

        return (
            <div className='d-flex w-100 h-100 flex-wrap users-droplist'>
                {/*<UserForm/>*/}
            {
                users.map((user) => {
                    return(
                    <UserPost usr={user} key={user.id}/>
                    )
                })
            }
            <button onClick={() => {
                console.log (this.state.count);
                this.props.updateData(this.state.count);
            }}>+</button>
            </div>
        );
    }
}