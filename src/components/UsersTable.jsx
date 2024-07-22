import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'

export default function UsersTable(props) {
// useEffect(()=> {})

// useEffect(() => {
//     const fetchPosts = async () => { 
        
//     }
// })
 const {items} = props;
  return (
    <Table>
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
          items.forEach(element => {
            console.log(element)
            
          })

        }
        </tbody>
    </Table>
  )
}
