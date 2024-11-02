import React from 'react';
import { FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

function EmployeeList({ employees, deleteEmployee, editEmployee, markAttendance }) {
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
              <div className="attendance-actions">
                <button onClick={() => markAttendance(index, 'Present')}>
                  <FaCheck /> Mark Present
                </button>
                <button onClick={() => markAttendance(index, 'Absent')}>
                  <FaTimes /> Mark Absent
                </button>
              </div>
              <div className="employee-actions">
                <button onClick={() => editEmployee(index)}>
                  <FaEdit /> Edit
                </button>
                <button onClick={() => deleteEmployee(index)}>
                  <FaTrash /> Delete
                </button>
              </div>
              <div className="attendance-log">
                <h4>Attendance Log</h4>
                {employee.attendance.length === 0 ? (
                  <p>No attendance records yet.</p>
                ) : (
                  <ul>
                    {employee.attendance.map((entry, i) => (
                      <li key={i}>
                        {entry.date}: {entry.status}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmployeeList;
