import React, { Component } from 'react';
import './styles.scss';
import { Props, State } from './types';
import { Modal } from 'semantic-ui-react'

export default class Element extends Component<Props, State> {
    render() {
        const open = this.props.stateId === this.props.id
        return (
            <Modal
                open={open}
                onClose={this.props.closeModal}
            >
                <Modal.Content>
                    {this.props.children}
                </Modal.Content>
            </Modal>
        );
    }
}