import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import EmployeeForm from './EmployeeForm';

function EmployeeList({ employees, deleteEmployee, editEmployee }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditMode(true);
  };

  const saveEdit = (updatedEmployee) => {
    editEmployee(editIndex, updatedEmployee);
    setEditIndex(null);
    setEditMode(false);
  };

  return (
    <div>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <div className="employee-list">
          {employees.map((employee, index) => (
            <div key={index} className="employee-card">
              <p><strong>Name:</strong> {employee.name}</p>
              <p><strong>Position:</strong> {employee.position}</p>
              <div className="employee-actions">
                <button onClick={() => handleEdit(index)}>
                  <FaEdit /> Edit
                </button>
                <button onClick={() => deleteEmployee(index)}>
                  <FaTrash /> Delete
                </button>
              </div>
              {editMode && editIndex === index && (
                <EmployeeForm
                  addEmployee={() => {}}
                  editMode={true}
                  existingEmployee={employee}
                  saveEdit={saveEdit}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmployeeList;
