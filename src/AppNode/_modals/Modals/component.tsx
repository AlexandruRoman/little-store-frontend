import React, { Component } from 'react';
import './styles.scss';
import { Props, State } from './types';
import LoginModal from '../../_nodes/StoreNode/_modals/LoginModal';
import SignupModal from '../../_nodes/StoreNode/_modals/SignupModal';

export default class Element extends Component<Props, State> {
    render() {
        if (this.props.stateId !== '')
            return (
                <div>
                    <LoginModal />
                    <SignupModal />
                </div>
            );
        return null
    }
}