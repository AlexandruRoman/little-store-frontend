import React, { Component } from 'react'
import './styles.scss'
import { Props, State } from './types'
import Slider from '../_components/Slider'
import { api } from '../../../../../_brain/api'
import SimpleImageSlider from 'react-simple-image-slider'
import ItemCounter from '../../../_components/ItemCounter'

export default class Element extends Component<Props, State> {
    state: State = {
        item: {
            id: '',
            details: '',
            image: '',
            name: '',
            price: '',
            producer: '',
            deliveryTime: '',
            tva: 0
        },
        quantity: 1
    }
    seconds = 0
    interval: any = {}
    componentDidMount() {
        this.getItem()
        this.interval = setInterval(() => this.seconds++, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
        this.props.visitPage('PRODUCT', this.seconds)
    }

    getItem = () => {
        api.get('product/get/' + this.props.payload.id).then(res => {
            console.log(res)
            this.setState({
                item: {
                    id: res.data._id,
                    details: res.data.details,
                    image: res.data.images[0] ? res.data.images[0] : '',
                    name: res.data.name,
                    price: '' + res.data.price.price,
                    producer: res.data.producer,
                    deliveryTime: res.data.deliveryType,
                    tva: res.data.tva.tva
                }
            })
        })
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-sm-6 col-xs-b30 col-sm-b0'>
                        <img src={this.state.item.image} alt='' className='image-size' />
                    </div>
                    <div className='col-sm-6'>
                        <div className='simple-article size-3 grey col-xs-b5'>{this.state.item.producer}</div>
                        <div className='h3 col-xs-b25'>{this.state.item.name}</div>
                        <div className='row col-xs-b25'>
                            <div className='col-sm-12'>
                                <div className='simple-article size-5 grey'>
                                    PRICE:{' '}
                                    <span className='color'>
                                        {this.state.item.price +
                                            ' RON (' +
                                            (parseInt(this.state.item.price) +
                                                (parseInt(this.state.item.price) * this.state.item.tva) / 100) +
                                            ' RON cu TVA)'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div className='simple-article size-3 col-xs-b5'>
                                    TIMP DE LIVRARE: <span className='grey'>{this.state.item.deliveryTime}</span>
                                </div>
                            </div>
                            <div className='col-sm-6 col-sm-text-right'>
                                <div className='simple-article size-3 col-xs-b20'>
                                    TVA: <span className='grey'>{this.state.item.tva + '%'}</span>
                                </div>
                            </div>
                        </div>
                        <div className='simple-article size-3 col-xs-b30'>{this.state.item.details}</div>

                        <div className='row col-xs-b40'>
                            <div className='col-sm-3'>
                                <div className='h6 detail-data-title size-1'>quantity:</div>
                            </div>
                            <div className='col-sm-9'>
                                <ItemCounter
                                    count={this.state.quantity}
                                    onChange={quantity => this.setState({ quantity })}
                                />
                            </div>
                        </div>
                        <div className='row m5 col-xs-b40'>
                            <a
                                className='button size-2 style-2 block'
                                onClick={() => {
                                    this.props.addItem(this.state.item.id, this.state.quantity)
                                    this.props.pressButton('ADAUGA')
                                }}
                            >
                                <span className='button-wrapper'>
                                    <span className='icon'>
                                        <img src='img/icon-2.png' alt='' />
                                    </span>
                                    <span className='text'>adauga in cos</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
