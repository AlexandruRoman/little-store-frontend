import React, { Component } from 'react';
import './styles.scss';
import { Props, State } from './types';
import { Input, Button } from 'semantic-ui-react';
import { api } from '../../../../../../../_brain/api';

export default class Element extends Component<Props, State> {
    state: State = {
        name: '',
        email: '',
        password: ''
    }

    createAccount = () => {
        api.post('user/add-staff', { name: this.state.name, email: this.state.email, password: this.state.password })
        this.setState({ name: '', email: '', password: '' })
    }
    render() {
        return (
            <div>
                <div className="input-item">
                    <Input label='Name' value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                </div>
                <div className="input-item">
                    <Input label='Email' value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                </div>
                <div className="input-item">
                    <Input label='Password' value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                </div>
                <div className="input-item">
                    <Button onClick={this.createAccount}>Create staff account</Button>
                </div>
            </div>
        );
    }
}