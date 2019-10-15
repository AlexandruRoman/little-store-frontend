import React, { Component } from 'react'
import './styles.scss'
import { Props, State } from './types'
import Navbar from '../_components/Navbar'
import { ROLES } from '../../../_brain/auth/types'

export default class Element extends Component<Props, State> {
    render() {
        const items = [
            {
                text: 'produse',
                action: () => {
                    this.props.gotoProducts()
                    this.props.pressButton('PRODUCTS')
                },
                isActive: false
            }
        ]
        if (this.props.role == ROLES.ADMIN)
            items.push({ text: 'admin dashboard', action: this.props.gotoAdminAuthorization, isActive: false })
        if (this.props.role == ROLES.STAFF)
            items.push({ text: 'staff dashboard', action: this.props.gotoStaffExport, isActive: false })
        return (
            <div id='store-layout'>
                <Navbar items={items} onShoppingCartButton={this.props.gotoShoppingCart} />
                <div className='content'>{this.props.children}</div>
            </div>
        )
    }
}
