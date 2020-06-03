import React, {Component, createRef} from "react";
import './UserForm.scss';

export class UserForm extends Component {
    constructor(props) {
        super (props);

        this.state = {
            error: ''
        }
    }

    usernameRef = createRef();
    nameRef = createRef();
    emailRef = createRef();


    onSubmit = (e) => {
        const {newUser} = this.props;
        e.preventDefault();
        const username = this.usernameRef.current.value;
        const name = this.nameRef.current.value;
        const email = this.emailRef.current.value;
        console.log (username, name, email);
        if (!username.trim() || !name.trim() || !email.trim() ) {
            this.setState({
                error: 'u must fill all inputs!'
            })
            return;
        }
        newUser(username, name, email);

        this.onReset();
        this.setState({
            error: ''
        })
};
    onReset = () => {
        this.usernameRef.current.value = '';
        this.nameRef.current.value = '';
        this.emailRef.current.value = '';
    };


    render() {
        return(
            <form onSubmit={this.onSubmit}>
                {!!this.state.error && <div style={{color: 'red'}}>{this.state.error}</div>}
                <div className="form-group">
                    <label htmlFor="usernameInput">username:</label>
                    <input
                        ref={this.usernameRef}
                        type="text"
                        className="form-control"
                        id="firstNameInput"
                        placeholder="Example input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nameInput">name:</label>
                    <input
                        ref={this.nameRef}
                        type="text"
                        className="form-control"
                        id="firstNameInput"
                        placeholder="Example input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="emailInput">email:</label>
                    <input
                        ref={this.emailRef}
                        type="text"
                        className="form-control"
                        id="firstNameInput"
                        placeholder="Example input"
                    />
                </div>
                <button type='submit'> add </button>
            </form>
        );
    }
}