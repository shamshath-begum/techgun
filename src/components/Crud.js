import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// import {useNavigate} from 'react-router-dom'
function Crud({users,setUsers}) {

    
    let[name,setName]=useState('')
    let[age,setAge]=useState('')
    let[address,setAddress]=useState('')
    let[quali,setQuali]=useState('')

    let handleDelete=(i)=>{
     let newArray =[...users]
      newArray.splice(i,1)
        setUsers(newArray)
                          } 
    let handleSubmit=()=>{
        let newData={name,age,address,quali}
        let newArray=[...users]
        newArray.push(newData)
        setUsers(newArray)
        

    }
   

  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Quali</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
        users.map((e,i)=>{
            return <tr key={i}>
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.address}</td>
            <td>{e.quali}</td>
            <td>
            
           <Button variant="secondary" onClick={handleDelete}>Delete</Button>
            </td>
          </tr>
          
        })
    }
      </tbody>
    </Table>
    <form>
        <input type="text" placeholder="Name"value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <input type="number" placeholder="Age" value={age}onChange={(e)=>setAge(e.target.value)}/><br/><br/>
        <input type="text" placeholder='Address'value={address} onChange={(e)=>setAddress(e.target.value)}/><br/><br/>
        <input type="text" placeholder="Qualification"value={quali}  onChange={(e)=>setQuali(e.target.value)}/><br/><br/>
        <button onClick={handleSubmit}> Submit</button>
    </form>
    </div>
  )
}

export default Crud