import React, { Component } from 'react';
import './styles.scss';
import { Props, State } from './types';

export default class Element extends Component<Props, State> {

    componentDidMount() {
        this.props.getUserFlows()
    }
    render() {
        console.log(this.props.userFlows)
        return (
            <div className='tags light' >
                {
                    this.props.userFlows.map((x, i) => <div key={"user-flow_" + i}>
                        {x.buttons.map((button, buttonIndex) => <a key={"button_" + buttonIndex} className='tag' >{button}</a>)}
                        <a className="tag active">{x.probability + '%'}</a>
                    </div>)
                }
            </div>
        );
    }
} 