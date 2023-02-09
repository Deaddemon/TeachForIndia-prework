import React from 'react'
import Button from 'react-bootstrap/Button';
import { Container, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Volunteer = () => {
    return (
        <>
            <Container  >
                <Stack gap={2} className="col-md-6 mx-auto mt-5 rol-sm-6">
                    <Button variant="primary" size="lg">
                        <Link to= '/create' style={{ textDecoration: 'none', color: 'inherit' }}> Create Volunteer opportunity</Link>
                    </Button>
                    <Button variant="secondary" size="lg">
                        <Link to = '/view' style={{ textDecoration: 'none' ,color: 'inherit'}}>  View Volunteer opportunity </Link>
                    </Button>
                </Stack>
            </Container>
        </>
    )
}
