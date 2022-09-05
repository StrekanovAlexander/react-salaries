import React from 'react' 
import TableHead from './TableHead'
import TableBody from './TableBody'
import './Table.css'

function Table({ data, heading }) {
    return (
        <table>
            <TableHead heading={heading} />
            <TableBody data={data} />
        </table>
    )
}

export default Table