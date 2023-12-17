import React from 'react';

class LoginInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            value: '',
        };
    }

    focusField() {
        const { focused } = this.state;
        this.setState({
            focused: !focused,
        });
    }

    handleChange(event) {
        const { target } = event;
        const { value } = target;
        this.setState({
            value: value,
        });
    }

    render() {
        const { type, label, style, id } = this.props;
        const { focused, value } = this.state;

        let inputClass = 'login-input';
        if (focused) {
            inputClass += ' login-input-focus';
        } else if (value !== '') {
            inputClass += ' login-input-open';
        }

        return (
            <div className={inputClass} style={style}>
                <div className="login-input-holder">
                    <input
                        className="login-input-input"
                        type={type}
                        id={id}
                        onFocus={this.focusField.bind(this)}
                        onBlur={this.focusField.bind(this)}
                        onChange={this.handleChange.bind(this)}
                        autoComplete="off"
                    />
                    <label className="login-input-label" htmlFor={id}>
                        {label}
                    </label>
                </div>
            </div>
        );
    }
}

class Login extends React.Component {
    render() {
        return (
            <div className="uk-container uk-margin-xlarge-top uk-margin-xlarge-bottom">
                <div data-uk-grid className='uk-flex uk-flex-center'>
                    <div className='uk-width-1-2 uk-box-shadow-medium uk-border-rounded uk-background-default uk-padding'>
                        <div data-uk-grid className='uk-flex uk-flex-middle'>
                            <div className="uk-width-1-2">
                                <div className="title"><h1>Login</h1></div>
                                <LoginInput type="text" label="name" id="name" />
                                <LoginInput type="password" label="password" id="password" />
                                <a className="uk-button uk-button-primary" href='#'>Login</a>
                            </div>
                            <div className="uk-width-1-2 ">
                                <img src="/assets/img/logo/nohatenet-blacklogologo-transparent.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
