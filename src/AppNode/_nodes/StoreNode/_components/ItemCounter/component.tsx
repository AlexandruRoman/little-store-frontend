import React, { SFC } from 'react';
import './styles.scss';
import { Props } from './types';

const Element: SFC<Props> = (props) => {
    return (
        <div className="quantity-select">
            <span className="minus" onClick={() => props.onChange(props.count > 1 ? props.count - 1 : props.count)}></span>
            <span className="number">{props.count}</span>
            <span className="plus" onClick={() => props.onChange(props.count + 1)}></span>
        </div>
    );
}
export default Element