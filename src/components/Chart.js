import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Label,
    ResponsiveContainer,
} from 'recharts'
import Title from './Title'

const data = require('../data/fitbit_export.json')

export default function Chart() {
    return (
        <React.Fragment>
            <Title>Distance Travelled (this month)</Title>
            <ResponsiveContainer>
                <LineChart
                    data={data.result.Activities}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis dataKey="Date" />
                    <YAxis>
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: 'middle' }}
                        >
                            Distance (mi)
                        </Label>
                    </YAxis>
                    <Line
                        type="monotone"
                        dataKey="Distance"
                        stroke="#556CD6"
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    )
}
