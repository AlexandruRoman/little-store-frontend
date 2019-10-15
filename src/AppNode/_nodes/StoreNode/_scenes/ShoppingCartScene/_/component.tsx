import React, { Component } from 'react'
import './styles.scss'
import { Props, State } from './types'
import { Dropdown } from 'semantic-ui-react'
import { api } from '../../../../../_brain/api'
import ItemCounter from '../../../_components/ItemCounter'

export default class Element extends Component<Props, State> {
    state: State = {
        deliveryTypeOptions: []
    }
    seconds = 0
    interval: any = {}
    componentDidMount() {
        this.getDeliveryTypes()
        this.interval = setInterval(() => this.seconds++, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
        this.props.visitPage('SHOPPING_CART', this.seconds)
    }

    getDeliveryTypes = () => {
        api.get('/delivery-type/get-all').then(res => {
            console.log(res)
            this.setState({
                deliveryTypeOptions: res.data.map((x: any) => {
                    return {
                        key: x._id,
                        value: x._id,
                        text: x.name
                    }
                })
            })
            this.props.setDeliveryType(res.data[0]._id)
        })
    }

    getShoppingCart = () => {
        // TODO
        api.get('/client/get-cart')
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='empty-space col-xs-b15 col-sm-b50 col-md-b100' />
                    <div className='text-center'>
                        <div className='simple-article size-3 grey uppercase col-xs-b5'>cosul tau</div>
                        <div className='h2'>verifica-ti produsele</div>
                        <div className='title-underline center'>
                            <span />
                        </div>
                    </div>
                </div>

                <div className='empty-space col-xs-b35 col-md-b70' />

                <div className='container'>
                    <table className='cart-table'>
                        <thead>
                            <tr>
                                <th style={{ width: '95px' }} />
                                <th>nume</th>
                                <th style={{ width: '150px' }}>pret</th>
                                <th style={{ width: '260px' }}>cantitate</th>
                                <th style={{ width: '150px' }}>total</th>
                                <th style={{ width: '70px' }} />
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.items.map((item, itemIndex) => (
                                <tr key={item.id}>
                                    <td data-title=' '>
                                        <a className='cart-entry-thumbnail' href='#'>
                                            <img className='tiny-image' src={item.image} alt='' />
                                        </a>
                                    </td>
                                    <td data-title=' '>
                                        <h6 className='h6'>
                                            <a href='#'>{item.name}</a>
                                        </h6>
                                    </td>
                                    <td data-title='Price: '>{item.price + ' RON'}</td>
                                    <td data-title='Quantity: '>
                                        <ItemCounter
                                            count={item.quantity}
                                            onChange={quantity => this.props.changeItemQuantity(item.id, quantity)}
                                        />
                                    </td>
                                    <td data-title='Total:'>{item.price * item.quantity + ' RON'}</td>
                                    <td data-title=''>
                                        <div className='button-close' onClick={() => this.props.deleteItem(item.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='empty-space col-xs-b35' />
                    <div className='row'>
                        <div className='col-sm-6 col-md-5 col-xs-b10 col-sm-b0' />
                        <div className='col-sm-6 col-md-7 col-sm-text-right'>
                            <div className='buttons-wrapper'>
                                <a className='button size-2 style-3' onClick={() => this.props.pressButton('CHECKOUT')}>
                                    <span className='button-wrapper'>
                                        <span className='icon'>
                                            <img src='img/icon-4.png' alt='' />
                                        </span>
                                        <span className='text'>trimite comanda</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='empty-space col-xs-b35 col-md-b70' />
                    <div className='row'>
                        <div className='col-md-6 col-xs-b50 col-md-b0'>
                            <h4 className='h4 col-xs-b25'>Metoda de livrare</h4>
                            <Dropdown
                                onChange={(e, { value }) => this.props.setDeliveryType(value ? (value as string) : '')}
                                options={this.state.deliveryTypeOptions}
                                placeholder='Choose an option'
                                selection
                                value={this.props.deliveryType}
                            />
                        </div>
                        <div className='col-md-6'>
                            <h4 className='h4'>cart totals</h4>
                            <div className='order-details-entry simple-article size-3 grey uppercase'>
                                <div className='row'>
                                    <div className='col-xs-6'>Suma cos de cumparaturi</div>
                                    <div className='col-xs-6 col-xs-text-right'>
                                        <div className='color'>{this.props.prices.amount + ' RON'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='order-details-entry simple-article size-3 grey uppercase'>
                                <div className='row'>
                                    <div className='col-xs-6'>cost transport</div>
                                    <div className='col-xs-6 col-xs-text-right'>
                                        <div className='color'>{this.props.prices.deliveryPrice + ' RON'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='order-details-entry simple-article size-3 grey uppercase'>
                                <div className='row'>
                                    <div className='col-xs-6'>tva</div>
                                    <div className='col-xs-6 col-xs-text-right'>
                                        <div className='color'>{this.props.prices.tva + ' RON'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='order-details-entry simple-article size-3 grey uppercase'>
                                <div className='row'>
                                    <div className='col-xs-6'>discount</div>
                                    <div className='col-xs-6 col-xs-text-right'>
                                        <div className='color'>{this.props.prices.discount + '%'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='order-details-entry simple-article size-3 grey uppercase'>
                                <div className='row'>
                                    <div className='col-xs-6'>pret total</div>
                                    <div className='col-xs-6 col-xs-text-right'>
                                        <div className='color'>{this.props.prices.total + ' RON'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='empty-space col-xs-b35 col-md-b70' />
                    <div className='empty-space col-xs-b35 col-md-b70' />
                </div>
            </div>
        )
    }
}
