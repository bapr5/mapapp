import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

import { useForm, SubmitHandler } from 'react-hook-form'
import UsersTable from '../components/UsersTable';

import axios from 'axios';

// import axios from 'axios';

import { query_items } from '../api'

const API_URL = "http://127.0.0.1:3333/users"
const SEARCH_URL = "http://127.0.0.1:3333/search_string" //переделать

export default function Users() {

    async function doQuery(myfrom = 0, mylimit = 10) {
        return axios.get( API_URL, {
            params:{
                from: myfrom,
                limit: mylimit
            }
        })
    }

    //и это г тоже переделать

    async function searchString(q) {
        return axios.get( API_URL, {
            
        })
    }
    
    

    window.onload = function(){
        (doQuery().then(data => {setItems(data['data'])}))
    }

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [items, setItems] = useState([{}])
    const [currentCount,setCount] = useState(0)

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };
    const handleFormSubmit = (event) => {
        doQuery().then(data => {setItems(data['data'])})
        event.preventDefault();
    };

    function switchPage(page){
        doQuery(page*10,10).then(data => {setItems(data['data'])})
        setCount(page)
    }

    return (
        <>
            <h3>Users overview</h3>{query}
            <form onSubmit={handleFormSubmit}>

                <Container>
                    <Row>
                        <Col>
                            <Form.Control type="text" value={query} onChange={handleInputChange} placeholder="Enter query" />
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                </Container>
                <UsersTable items={items} ></UsersTable>
                <button onClick={() => switchPage(currentCount-1)}>направо</button>
                {currentCount}
                <button onClick={() => switchPage(currentCount+1)}>направо</button>
            </form>
        </>
    )
}
