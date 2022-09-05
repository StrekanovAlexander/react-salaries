import React from 'react'

function TableBody({ data }) {
    return (
        <tbody>
            {data.map((el, index) => 
                <tr key={index}>
                    <td>{el.id}</td>
                    <td>{el.firstName}</td>
                    <td>{el.lastName}</td>
                    <td className="number">
                        <input 
                            type="number" 
                            value={el.daysWorked}
                            onChange={() => console.log(el.id)}
                        />
                    </td>
                    <td className="number"> 
                        <input 
                            type="number" 
                            value={el.salaryRate}
                            onChange={() => console.log(el.id)}
                        />
                    </td>
                    <td className="number">{el.totalSalary}</td>
                </tr>
            )}
        </tbody>
    )
}

export default TableBody