import React, { Component } from 'react'
import './styles.scss'
import { Props, State } from './types'
import { MODALS_IDS } from '../../../../_brain/modals/types'
import { ROLES } from '../../../../_brain/auth/types'
import * as io from 'socket.io-client'
export default class Element extends Component<Props, State> {
    state: State = {
        connections: 0
    }
    socket: SocketIOClient.Socket
    constructor(props: any) {
        super(props)
        this.socket = io.connect('http://api:3000')
        this.socket.on('update-connections', (connections: number) => {
            this.setState({ connections })
        })
    }

    render() {
        return (
            <header>
                <div className='header-top'>
                    <div className='content-margins'>
                        <div className='row'>
                            <div className='col-md-5 hidden-xs hidden-sm'>
                                <div className='entry'>
                                    <b>Esti logat ca:</b> <i>{this.props.role}</i>
                                </div>
                                <div className='entry'>
                                    <b>Numar utilizatori logati:</b> <i>{this.state.connections}</i>
                                </div>
                            </div>
                            <div className='col-md-7 col-md-text-right'>
                                <div className='entry'>
                                    <a
                                        className='open-popup'
                                        onClick={() => {
                                            this.props.setModal(MODALS_IDS.LOGIN)
                                            this.props.pressButton('LOGIN')
                                        }}
                                        data-rel='1'
                                    >
                                        <b>login</b>
                                    </a>
                                    &nbsp; or &nbsp;
                                    <a
                                        className='open-popup'
                                        onClick={() => {
                                            this.props.setModal(MODALS_IDS.SIGNUP)
                                            this.props.pressButton('REGISTER')
                                        }}
                                        data-rel='2'
                                    >
                                        <b>register</b>
                                    </a>
                                </div>
                                <div
                                    className='entry hidden-xs hidden-sm cart'
                                    onClick={e => {
                                        this.props.onShoppingCartButton(e)
                                        this.props.pressButton('COSUL_TAU')
                                    }}
                                >
                                    <a>
                                        <b className='hidden-xs'>cosul tau</b>
                                        <span className='cart-icon'>
                                            <i className='fa fa-shopping-bag' aria-hidden='true' />
                                            <span className='cart-label'>{this.props.shoppingCartItems.length}</span>
                                        </span>
                                        <span className='cart-title hidden-xs'>
                                            {Math.floor(this.props.prices.total) + ' RON'}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header-bottom'>
                    <div className='content-margins'>
                        <div className='row'>
                            <div className='col-xs-3 col-sm-1'>
                                <a id='logo' href='index1.html'>
                                    <img src='img/logo-2.png' alt='' />
                                </a>
                            </div>
                            <div className='col-xs-9 col-sm-11 text-right'>
                                <div className='nav-wrapper'>
                                    <div className='nav-close-layer' />
                                    <nav>
                                        <ul>
                                            {this.props.items.map(x => (
                                                <li key={'id_' + x.text} className={x.isActive ? 'active' : ''}>
                                                    <a onClick={x.action}>{x.text}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
