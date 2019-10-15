import React, { Component } from 'react';
import './styles.scss';
import { Props, State } from './types';
import SideMenuLayout from '../../../_components/SideMenuLayout';

export default class Element extends Component<Props, State> {
    items = [
        { id: '0', text: 'export', action: this.props.gotoStaffExport, active: false },
        { id: '1', text: 'import', action: this.props.gotoStaffImport, active: false },
    ]

    render() {
        return (
            <div>
                <SideMenuLayout categoryTitle='staff dashboard' categories={this.items}>
                    {this.props.children}
                </SideMenuLayout>
            </div>
        );
    }
}