import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

import { useForm, SubmitHandler } from 'react-hook-form'
import UsersTable from '../components/UsersTable';

import axios from 'axios';

interface UsersForm {
    name: string;
    email: number;
    id: number;
    phone: string;
}



export default function Users() {

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetchResults();
    };
    const fetchResults = async () => {
        try {
            const response = await axios.get('127.0.0.1:3333', {
                params: { q: query },
            });
            setResults(response.data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    // const { register, handleSubmit } = useForm<UsersForm>({
    //     defaultValues: {

    //     },
    // })

    // const onSubmit:SubmitHandler<IUserFields> = ({data}) => {}


    // const submit: SubmitHandler<UsersForm> = data => {
    //     console.log(data)
    // }





    return (
        <>
            <h3>Users overview</h3>{query}
            <form onSubmit={handleFormSubmit}>

                <Container>
                    {/* <Row>
                    <Col> <Form.Control type="email" {...register('email', {})} placeholder="Enter email" /></Col>
                    <Col>  <Form.Control type="phone" {...register('phone', {})} placeholder="Enter phone" /></Col>
                </Row>
                <Row>
                    <Col> <Form.Control type="name" {...register('name', {})} placeholder="Enter full name" /></Col>
                    <Col>  <Form.Control type="id" {...register('id', {})} placeholder="Enter user ID" /></Col>
                </Row>
                <Row>
                    <button>Search</button>
                </Row> */}
                    <Row>
                        <Col>
                        <Form.Control type="text" value={query} onChange={handleInputChange} placeholder="Enter query" />
                        </Col>
                        <Col>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button></Col>
                    </Row>
                    <Row>
                        {/* <button>Search</button> */}
                    </Row>
                </Container>

                <UsersTable items={[1, 2, 3]} ></UsersTable>
            </form>
        </>
    )
}
