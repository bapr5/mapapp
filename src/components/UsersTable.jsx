import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'

export default function UsersTable(props) {
  // useEffect(()=> {})

  // useEffect(() => {
  //     const fetchPosts = async () => { 

  //     }
  // })
  const { items } = props;

  return (
    <Table>
      {/* {items.forEach(element => {
        console.log(element)
      })} */}

      {console.log(items)}
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>phone</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {
          // items.forEach(element => {
          //   console.log(element)
          // })
          items.map((user,i)=>(
            <tr key = {i}>
            <td>{user['id']}</td>
            <td>{user['name']}</td>
            <td>{user['phone']}</td>
            <td>{user['email']}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}
