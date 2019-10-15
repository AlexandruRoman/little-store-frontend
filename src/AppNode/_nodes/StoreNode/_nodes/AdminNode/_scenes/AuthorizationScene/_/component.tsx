import React, { Component } from 'react';
import './styles.scss';
import { Props, State } from './types';
import { Button, Select, Dropdown } from 'semantic-ui-react';
import { api } from '../../../../../../../_brain/api';

export default class Element extends Component<Props, State> {
    state: State = {
        staffPermissions: [],
        allPermissions: []
    }

    componentDidMount() {
        api.get('permission/get-all')
            .then(res => {
                this.setState({ allPermissions: res.data })
                console.log(res.data)
            })
        api.get('role/get-staff-permissions')
            .then(res => {
                this.setState({ staffPermissions: res.data })
                console.log(res.data)
            })
    }

    updatePermissions = () => {
        api.put('role/update-staff-permissions', { permissions: this.state.staffPermissions })
            .then(res => {
                console.log(res)
            })
    }

    onPermissionSelect = (index: number, value: any) => {
        let sp = this.state.staffPermissions
        sp[index] = value
        this.setState({ staffPermissions: sp })
    }

    addPermission = () => {
        let sp = this.state.staffPermissions
        sp.push('')
        this.setState({ staffPermissions: sp })
    }

    removePermission = (index: number) => {
        let sp = this.state.staffPermissions
        sp = sp.filter((x, i) => i !== index)
        this.setState({ staffPermissions: sp })
    }

    render() {
        return (
            <div>
                <div className="auth-title">Staff permissions</div>
                <Button onClick={this.addPermission}>Add permission</Button>
                {this.state.staffPermissions.map((x, i) => <div key={'id_' + i}>
                    <Dropdown
                        placeholder='Select permission'
                        options={this.state.allPermissions.map(p => { return { key: p._id, value: p._id, text: p.name } })}
                        onChange={(e, { value }) => this.onPermissionSelect(i, value)}
                        value={this.state.staffPermissions[i]}
                        selection
                    />
                    <Button color='red' onClick={() => this.removePermission(i)}>Remove</Button>
                </div>)}
                <Button onClick={this.updatePermissions}>Update permissions</Button>
            </div>
        );
    }
}