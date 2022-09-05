import React, { useEffect, useState } from 'react'
import Table from './components/ui/table/Table'
import employeesData from './data'

function App() {
  const [ employees, setEmployees ] = useState([])
  const [ inputFields, setInputFields ] = useState({ daysWorked: 0, salaryRate: 0 })

  useEffect(() => {
    setEmployees(employeesData)
  }, [])

  const updateEmployee = (id, name, value) => {
    const updatedEmployees = employees.map(employee => {
      if (employee.id === id) {
        return {...employee, [name]: value}
      }
      return employee
    })
    setEmployees(updatedEmployees)
  }

  const handleInputField = (ev, id) => {
    const { name, value } = ev.target
    setInputFields({...inputFields, [name]: value})
    updateEmployee(id, name, value)
  }

  return (
    <div>
      {employees.length ? 
        <Table 
          heading={Object.keys(employees[0])}
          data={employees} 
          handleInputField={handleInputField}
        /> :
        <h2>No data employees</h2>
      }
    </div>
  )

}

export default App
