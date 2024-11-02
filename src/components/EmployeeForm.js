import React, { useState, useEffect } from 'react';

function EmployeeForm({ addEmployee, editMode, existingEmployee, saveEdit }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    if (editMode && existingEmployee) {
      setName(existingEmployee.name);
      setPosition(existingEmployee.position);
    }
  }, [editMode, existingEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && position.trim()) {
      if (editMode) {
        saveEdit({ name, position, attendance: existingEmployee.attendance });
      } else {
        addEmployee({ name, position });
      }
      setName('');
      setPosition('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h3>{editMode ? 'Edit Employee' : 'Add New Employee'}</h3>
      <input
        type="text"
        placeholder="Enter employee name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
      <button type="submit">{editMode ? 'Save Changes' : 'Add Employee'}</button>
    </form>
  );
}

export default EmployeeForm;
