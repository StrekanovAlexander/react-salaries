import React from 'react'

function TableHead({ heading }) {
    return (
        <thead>
            <tr>
                {heading.map((el, index) => 
                    <th key={index}>{el}</th>
                )}
            </tr>
        </thead>
    )
}

export default TableHead