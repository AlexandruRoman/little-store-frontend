import React, { Component } from 'react';
import './styles.scss';
import { Props, State } from './types';

export default class Element extends Component<Props, State> {
    render() {
        return (
            <div className="row">
                <div className="col-sm-3 hidden-xs">
                    <a className="button size-1 style-5" onClick={() => this.props.onPageChange(this.props.page - 1)}>
                        <span className="button-wrapper">
                            <span className="icon"><i className="fa fa-angle-left" aria-hidden="true"></i></span>
                            <span className="text">prev page</span>
                        </span>
                    </a>
                </div>
                <div className="col-sm-6 text-center">
                    <div className="pagination-wrapper">
                        {Array.apply(null, Array(this.props.total)).map((x, i) => i + 1).map(i =>
                            <a
                                key={"id_" + i}
                                className={i === this.props.page ? "pagination active" : "pagination"}
                                onClick={() => this.props.onPageChange(i)}
                            >
                                {i}
                            </a>
                        )}

                    </div>
                </div>
                <div className="col-sm-3 hidden-xs text-right">
                    <a className="button size-1 style-5" onClick={() => this.props.onPageChange(this.props.page + 1)}>
                        <span className="button-wrapper">
                            <span className="icon"><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                            <span className="text">prev page</span>
                        </span>
                    </a>
                </div>
            </div>
        );
    }
}