
import React from "react";
import {ListGroup,ListGroupItem} from "reactstrap";

const Menu=()=>{
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/home">Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-student">Add Student</ListGroupItem>
             <ListGroupItem tag="a" href="/add-teacher">Add Teacher</ListGroupItem>
            <ListGroupItem tag="a" href="/fee-submission">Fee Submission form</ListGroupItem> 
            <ListGroupItem tag="a" href="/course-list">CourseList</ListGroupItem> 
            
            <ListGroupItem tag="a" href="/about-us">About Us</ListGroupItem> 
            
        </ListGroup>
    );
}
export default Menu;