import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  let navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const { id } = useParams();
  const { firstName, lastName, email, department } = student;
  const handleInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const updateStudent = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/students/update/${id}`, student);
    navigate("/view-students");
  };
  useEffect(() => {
    loadStudent();
  }, []);
  const loadStudent = async () => {
    const result = await axios.get(
      `http://localhost:8080/students/student/${id}`
    );
    setStudent(result.data);
  };
  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5">Edit Student</h2>
      <form
        onSubmit={(e) => updateStudent(e)}
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

export default EditStudent;
