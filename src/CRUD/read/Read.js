import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Read() {
    const [apiData,setapiData]=useState([])
    useEffect(()=>{
axios.get('https://6450b58ce1f6f1bb229d09a9.mockapi.io/crud')
.then((getdata)=>{
    console.log(getdata.data)
    setapiData(getdata.data)
})
    },[])

    const setId =(id)=>{
      console.log(id)
      localStorage.setItem('Id',id)
    }
  return (
    <div>
        <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>FirstName</Table.HeaderCell>
        <Table.HeaderCell>LastName</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body >
        {apiData.map((data)=>{
            return(
    <Table.Row key={data.id}>
        <Table.Cell>{data.id}</Table.Cell>
        <Table.Cell>{data.FirstName}</Table.Cell>
        <Table.Cell>{data.LastName}</Table.Cell>
        <Table.Cell>
          <Link to ="/update">
            <Button onClick={()=> setId(data.id)} color='green'>Update</Button>
            </Link>
        </Table.Cell>
        <Table.Cell>
          <Link to="/delete">
            <Button color='red'>Delete</Button>
            </Link>
        </Table.Cell>
      </Table.Row>
            )
        })}
      
    </Table.Body>
  </Table>
    </div>
  )
}