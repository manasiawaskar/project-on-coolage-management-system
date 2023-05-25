import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import { toast } from "react-toastify";

const UpdateCourse = () => {
  useEffect(() => {
    document.title = "UPDATE Course || L";
  }, []);

  const [course, setCourse] = useState({});

  // Form submit handler function
  const handleForm = (e) => {
    e.preventDefault();
    console.log(course);
    updateCourseOnServer(course);
  };

  // Function to update course on the server
  const updateCourseOnServer = (data) => {
    // Simulate API call delay
    setTimeout(() => {
      toast.success("Course updated successfully");
    }, 1000);
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="CourseId">CourseId</label>
          <Input
            type="text"
            placeholder="Enter Course ID here"
            name="CourseId"
            id="CourseId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter Course Title here"
            name="title"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 150 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Update Course
          </Button>{" "}
          <Button type="reset" color="warning ml-2">
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default UpdateCourse;
