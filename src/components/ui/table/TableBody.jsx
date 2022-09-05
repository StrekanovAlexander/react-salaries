import React from 'react'

function TableBody({ data, handleInputField }) {
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
                            name="daysWorked" 
                            value={el.daysWorked}
                            onChange={(ev) => handleInputField(ev, el.id)}
                        />
                    </td>
                    <td className="number"> 
                        <input 
                            type="number" 
                            name="salaryRate"
                            value={el.salaryRate}
                            onChange={(ev) => handleInputField(ev, el.id)}
                        />
                    </td>
                    <td className="number">{el.totalSalary}</td>
                </tr>
            )}
        </tbody>
    )
}

export default TableBody