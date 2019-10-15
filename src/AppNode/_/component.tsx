import React, { Component } from 'react';
import './styles.scss';
import { Props, State } from './types';
import Router from '../_components/Router';
import Modals from '../_modals/Modals';

export default class App extends Component<Props, State> {
    render() {
        return (
            <div className="App">
                <Router />
                <Modals />
            </div>
        );
    }
}