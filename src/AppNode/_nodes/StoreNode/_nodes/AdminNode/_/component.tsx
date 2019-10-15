import React, { Component } from 'react';
import './styles.scss';
import { Props, State } from './types';
import SideMenuLayout from '../../../_components/SideMenuLayout';

export default class Element extends Component<Props, State> {
    items = [
        { id: '0', text: 'authorization', action: this.props.gotoAdminAuthorization, active: false },
        { id: '1', text: 'create staff account', action: this.props.gotoAdminCreateStaffAccount, active: false },
        { id: '2', text: 'graphs', action: this.props.gotoAdminGraphs, active: false },
        { id: '3', text: 'probabilities', action: this.props.gotoAdminProbability, active: false },
    ]

    render() {
        return (
            <div>
                <SideMenuLayout categoryTitle='admin dashboard' categories={this.items}>
                    {this.props.children}
                </SideMenuLayout>
            </div>
        );
    }
}