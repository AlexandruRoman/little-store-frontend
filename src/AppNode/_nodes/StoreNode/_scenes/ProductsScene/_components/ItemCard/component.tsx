import React, { Component } from 'react';
import './styles.scss';
import { Props, State } from './types';

export default class Element extends Component<Props, State> {
    render() {
        return (
            <div className="product-shortcode style-1">
                <div className="title">
                    <div className="simple-article size-1 color col-xs-b5"><a onClick={() => this.props.onView()}>{this.props.title}</a></div>
                    <div className="h6 animate-to-green"><a onClick={() => this.props.onView()}>{this.props.subtitle}</a></div>
                </div>
                <div className="preview">
                    <img src={this.props.img} alt="" />
                    <div className="preview-buttons valign-middle">
                        <div className="valign-middle-content">
                            <a className="button size-2 style-2" onClick={() => this.props.onView()}>
                                <span className="button-wrapper">
                                    <span className="icon"><i className="fa fa-check" aria-hidden="true"></i></span>
                                    <span className="text">{this.props.firstButton}</span>
                                </span>
                            </a>
                            <a className="button size-2 style-3" onClick={() => this.props.onAdd()}>
                                <span className="button-wrapper">
                                    <span className="icon"><i className="fa fa-check" aria-hidden="true"></i></span>
                                    <span className="text">{this.props.secondButton}</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="price">
                    <div className="simple-article size-4 dark">{this.props.price}</div>
                </div>
                <div className="description">
                    <div className="simple-article text size-2">{this.props.details}</div>
                    <div className="icons">
                        <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true" onClick={() => this.props.onView()}></i></a>
                        <a className="entry"><i className="fa fa-check" aria-hidden="true" onClick={() => this.props.onAdd()}></i></a>
                    </div>
                </div>
            </div>
        );
    }
}