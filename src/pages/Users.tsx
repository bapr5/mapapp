import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'

import { useForm, SubmitHandler} from 'react-hook-form'

interface UsersForm {
    name: string;
    email: number;
    id: number;
    phone: string;
}

export default function Users() {

    const { register, handleSubmit } = useForm < UsersForm > ({
        defaultValues: {
            
        },
    })

    // const onSubmit:SubmitHandler<IUserFields> = ({data}) => {}

    const submit: SubmitHandler<UsersForm> = data => {
        console.log(data)
    }




    return (
        <>
            <h3>Users overview</h3>
            <form onSubmit={handleSubmit(submit)}>
            <Container>
                <Row>
                    <Col> <Form.Control type="email" {...register('email', {})} placeholder="Enter email" /></Col>
                    <Col>  <Form.Control type="phone" {...register('phone', {})} placeholder="Enter phone" /></Col>
                </Row>
                <Row>
                    <Col> <Form.Control type="name" {...register('name', {})} placeholder="Enter full name" /></Col>
                    <Col>  <Form.Control type="id" {...register('id', {})} placeholder="Enter user ID" /></Col>
                </Row>
                <Row>
                    <button>Search</button>
                </Row>
            </Container>
            </form>
        </>
    )
}
