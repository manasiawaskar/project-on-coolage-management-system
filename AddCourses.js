import React, { Fragment, useState, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import { toast } from "react-toastify";

const AddCourses = () => {
  useEffect(() => {
    document.title = "Add Teacher";
  }, []);

  const [teacher, setTeacher] = useState({});

  // Form submit handler function
  const handleForm = (e) => {
    e.preventDefault();
    console.log(teacher);
    postDataServer(teacher);
    e.target.reset();
  };

  // Function to post data to the server
  const postDataServer = (data) => {
    // Simulate API call delay
    setTimeout(() => {
      toast.success("Teacher added successfully");
    }, 1000);
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Add Teacher</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="teacherId">Teacher ID</label>
          <Input
            type="text"
            placeholder="Enter Teacher ID here"
            name="teacherId"
            id="teacherId"
            onChange={(e) => {
              setTeacher({ ...teacher, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="name">Teacher Name</label>
          <Input
            type="text"
            placeholder="Enter Teacher name here"
            name="name"
            id="name"
            onChange={(e) => {
              setTeacher({ ...teacher, name: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="department">Department</label>
          <Input
            type="text"
            placeholder="Enter Department here"
            id="department"
            onChange={(e) => {
              setTeacher({ ...teacher, department: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Add Teacher
          </Button>{" "}
          <Button type="reset" color="warning ml-2">
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourses;
