import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import { toast } from "react-toastify";

const AddStudent = () => {
  const [student, setStudent] = useState({
    studentId: "",
    name: "",
    course: "",
    grade: "",
    mobile: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(student);
    postDataServer(student);
    resetForm();
  };

  const postDataServer = (data) => {
    // Simulate API call delay
    setTimeout(() => {
      toast.success("Student added successfully");
    }, 1000);
  };

  const resetForm = () => {
    setStudent({
      studentId: "",
      name: "",
      course: "",
      grade: "",
      mobile: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1 className="text-center my-3">Add Student</h1>
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <label htmlFor="studentId">Student ID</label>
          <Input
            type="text"
            id="studentId"
            name="studentId"
            placeholder="Enter Student ID"
            value={student.studentId}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            value={student.name}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="course">Course</label>
          <Input
            type="text"
            id="course"
            name="course"
            placeholder="Enter Course"
            value={student.course}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="grade">Grade</label>
          <Input
            type="text"
            id="grade"
            name="grade"
            placeholder="Enter Grade"
            value={student.grade}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="mobile">Mobile Number</label>
          <Input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={student.mobile}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Add Student
          </Button>{" "}
          <Button type="reset" color="warning ml-2" onClick={resetForm}>
            Clear
          </Button>
        </Container>
      </Form>
    </div>
  );
};

export default AddStudent;
