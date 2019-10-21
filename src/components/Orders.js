/* eslint-disable no-script-url */

import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from './Title'

const data = require('../data/fitbit_export.json')

const activities = data.result.Activities

export default function Orders() {
    return (
        <>
            <Title>Activity Data</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Calories Burned</TableCell>
                        <TableCell>Steps</TableCell>
                        <TableCell>Distance</TableCell>
                        <TableCell>Floors</TableCell>
                        <TableCell>Minutes Sedentary</TableCell>
                        <TableCell>Minutes Lightly Active</TableCell>
                        <TableCell>Minutes Fairly Active</TableCell>
                        <TableCell>Minutes Very Active</TableCell>
                        <TableCell>Activity Calories</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {activities.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell>{row['Date']}</TableCell>
                            <TableCell>{row['Calories Burned']}</TableCell>
                            <TableCell>{row['Steps']}</TableCell>
                            <TableCell>{row['Distance']}</TableCell>
                            <TableCell>{row['Floors']}</TableCell>
                            <TableCell>{row['Minutes Sedentary']}</TableCell>
                            <TableCell>
                                {row['Minutes Lightly Active']}
                            </TableCell>
                            <TableCell>
                                {row['Minutes Fairly Active']}
                            </TableCell>
                            <TableCell>{row['Minutes Very Active']}</TableCell>
                            <TableCell>{row['Activity Calories']}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
