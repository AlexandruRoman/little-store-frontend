import React, { Component } from 'react'
import './styles.scss'
import { Props, State } from './types'
import Dropzone from 'react-dropzone'
import { Button } from 'semantic-ui-react'
import axios from 'axios'
import { api } from '../../../../../../../_brain/api'

export default class Element extends Component<Props, State> {
    onDrop = (acceptedFiles: File[]) => {
        this.setState({ file: acceptedFiles[0] })
    }

    send = () => {
        let formData = new FormData()
        formData.append('file', this.state.file)
        api.post('product/import', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(console.log)
    }
    render() {
        return (
            <div>
                <Dropzone onDrop={this.onDrop}>
                    {({ getRootProps, getInputProps, acceptedFiles }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <div className='box'>Adauga un fisier aici</div>
                                {acceptedFiles.map(x => (
                                    <div>{x.name}</div>
                                ))}
                            </div>
                        </section>
                    )}
                </Dropzone>
                <Button onClick={this.send}>Trimite</Button>
            </div>
        )
    }
}
