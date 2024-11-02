import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, attendance: [] }]);
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  const editEmployee = (index) => {
    setEditIndex(index);
  };

  const saveEdit = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee, i) => 
      i === editIndex ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
    setEditIndex(null);
  };

  const markAttendance = (index, status) => {
    const updatedEmployees = employees.map((employee, i) => {
      if (i === index) {
        const today = new Date().toLocaleDateString();
        if (!employee.attendance.some(entry => entry.date === today)) {
          return {
            ...employee,
            attendance: [...employee.attendance, { date: today, status }]
          };
        }
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <EmployeeForm
        addEmployee={addEmployee}
        editMode={editIndex !== null}
        existingEmployee={editIndex !== null ? employees[editIndex] : null}
        saveEdit={saveEdit}
      />
      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
        editEmployee={editEmployee}
        markAttendance={markAttendance}
      />
    </div>
  );
}

export default App;
