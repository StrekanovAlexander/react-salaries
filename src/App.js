import React, { useEffect, useState } from 'react'
import Table from './components/ui/table/Table'
import employeesData from './data'

function App() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    setEmployees(employeesData)
  }, [])

  return (
    <div>{
      employees.length ? 
        <Table 
          heading={Object.keys(employees[0])}
          data={employees}  
        /> :
        <h2>No data employees</h2>
      }
    </div>
  )

}

export default App
