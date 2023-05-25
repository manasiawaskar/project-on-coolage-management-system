import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";
import axios from "axios";
import React from "react";
import { Toast } from "bootstrap";


const course=({course,update})=>{

    return(
        <Card className="text-center">
         <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
        
                    }}>Delete</Button>{' '}

                    <Button color="warning ml-5" type="submit" href="/update-course">Update</Button>
                </Container>
            </CardBody>   
        </Card>
    );
};

export default course;