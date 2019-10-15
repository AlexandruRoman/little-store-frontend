import React, { Component } from 'react'
import './styles.scss'
import { Props, State } from './types'
import { Button } from 'semantic-ui-react'

export default class Element extends Component<Props, State> {
    render() {
        return (
            <div>
                <Button href='http://api:3000/product/export'>Export</Button>
            </div>
        )
    }
}
