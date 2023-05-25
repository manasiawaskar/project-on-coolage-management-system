import { Container,Button, Card, CardTitle, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import React,{ useEffect} from "react";
const Home=()=>{
    useEffect(()=>{
        document.title="Home ";
    },[]);
    return(
        <div>
            <Card className="text-center" border="success" >
                <CardBody>
                    <CardTitle>Changu kana thakur collage</CardTitle>
                    <p>
                        This Course is developed by Manasi for basic understanding of frontend design
                    </p>
                    <Container className="text-center">
                    <Link to="/about-us">
                        <Button color="primary" outline>learn more</Button>
                        </Link>
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
};
export default Home;