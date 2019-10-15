import React, { Component } from 'react'
import './styles.scss'
import { Props, State } from './types'
import { Bar } from 'react-chartjs-2'

export default class Element extends Component<Props, State> {
    componentDidMount() {
        this.props.getVisitsPerDay()
        this.props.getTimePerPage()
    }

    render() {
        console.log(this.props.visitsPerDay)
        console.log(this.props.timePerPage)
        return (
            <div>
                <h2>Vizitatori pe zi</h2>
                <Bar
                    data={{
                        labels: this.props.visitsPerDay.map(x => x.day),
                        datasets: [
                            {
                                label: '# vizitatori',
                                data: this.props.visitsPerDay.map(x => x.visits)
                            }
                        ]
                    }}
                    options={{
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        stepSize: 1,
                                        beginAtZero: true
                                    }
                                }
                            ]
                        }
                    }}
                />
                <h2>Timp petrecut pe fiecare pagina</h2>
                <Bar
                    data={{
                        labels: this.props.timePerPage.map(x => x.page),
                        datasets: [
                            {
                                label: '# timp petrecut',
                                data: this.props.timePerPage.map(x => x.time)
                            }
                        ]
                    }}
                    // options={{
                    //     scales: {
                    //         yAxes: [
                    //             {
                    //                 ticks: {
                    //                     stepSize: 1,
                    //                     beginAtZero: true
                    //                 }
                    //             }
                    //         ]
                    //     }
                    // }}
                />
            </div>
        )
    }
}
