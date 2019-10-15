import React, { Component } from 'react';
import './styles.scss';
import { Props, State } from './types';
import { scenesMapping } from '../../_brain/router/types';

export default class Element extends Component<Props, State> {
    getComponentByRoute = () => {
        return scenesMapping[this.props.route.type]
    }

    render() {
        return (
            <div className="router">
                {this.getComponentByRoute()}
            </div>
        );
    }
}