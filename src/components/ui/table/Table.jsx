import React from 'react' 
import TableHead from './TableHead'
import TableBody from './TableBody'
import './Table.css'

function Table(props) {
    return (
        <table>
            <TableHead heading={props.heading} />
            <TableBody 
                data={props.data} 
                handleInputField={props.handleInputField} 
            />
        </table>
    )
}

export default Table