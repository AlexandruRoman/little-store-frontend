import React, { Component } from 'react';
import './styles.scss';
import { Props, State } from './types';
import BasicModal from '../../../../_modals/BasicModal';
import { MODALS_IDS } from '../../../../_brain/modals/types';

export default class Element extends Component<Props, State> {
    state: State = {
        email: '',
        password: ''
    }

    submit = () => {
        this.props.closeModalAction()
        this.props.loginAction(this.state.email, this.state.password)
        this.props.pressButton('SEND_LOGIN')
    }
    render() {
        return (
            <BasicModal id={MODALS_IDS.LOGIN}>
                <div className="popup-align">
                    <h3 className="h3 text-center">Log in</h3>
                    <div className="empty-space col-xs-b30"></div>
                    <input className="simple-input" type="text" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} placeholder="Your email" />
                    <div className="empty-space col-xs-b10 col-sm-b20"></div>
                    <input className="simple-input" type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} placeholder="Enter password" />
                    <div className="empty-space col-xs-b10 col-sm-b20"></div>
                    <div className="row">
                        <div className="col-sm-6 col-xs-b10 col-sm-b0">
                        </div>
                        <div className="col-sm-6 text-right">
                            <a className="button size-2 style-3" onClick={() => this.submit()}>
                                <span className="button-wrapper">
                                    <span className="icon"><img src="img/icon-4.png" alt="" /></span>
                                    <span className="text">submit</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </BasicModal>
        );
    }
}