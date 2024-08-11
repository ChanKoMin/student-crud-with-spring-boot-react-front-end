import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddStudent = () => {
  let navigate = useNavigate();
  const [student, setStudents] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const { firstName, lastName, email, department } = student;
  const handleInputChange = (e) => {
    setStudents({ ...student, [e.target.name]: e.target.value });
  };
  const saveStudent = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/students", student);
    navigate("/view-students");
  };
  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5">Add Student</h2>
      <form
        onSubmit={(e) => saveStudent(e)}
        action=""
        method="post"
        className=""
      >
        <div className="input-group mb-5">
          <label htmlFor="firstName" className="input-group-text">
            First Name
          </label>
          <input
            type="text"
            className="form-control col-sm-6"
            id="firstName"
            name="firstName"
            value={firstName}
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label htmlFor="lastName" className="input-group-text">
            Last Name
          </label>
          <input
            type="text"
            className="form-control col-sm-6"
            id="lastName"
            name="lastName"
            value={lastName}
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label htmlFor="email" className="input-group-text">
            Email
          </label>
          <input
            type="email"
            className="form-control col-sm-6"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label htmlFor="department" className="input-group-text">
            Department
          </label>
          <input
            type="text"
            className="form-control col-sm-6"
            id="department"
            name="department"
            value={department}
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="row mb-5">
          <div className="col-sm-2 me-5">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>
          <div className="col-sm-2">
            <Link
              to={"/view-students"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
