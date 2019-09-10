import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Form from './Form';

const SingleMember = (props) =>{
    const user = props.memberToEdit;
    //  Onchange
    function handleChange(e){
        e.preventDefault()
        console.log(e.target.name)
        console.log(e.target.value)
        props.setMemberToEdit({...props.memberToEdit, [e.target.name] : e.target.value, id : props.match.params.id})
    }
    // onSubmit
    function handleSubmit(e){
        e.preventDefault();
        console.log(props.memberToEdit)
        props.setMemberToEdit({email: "", name: "", role: ""})
    }
    // Useeffecxt to display single card
    useEffect(()=>{
    axios.get(`http://localhost:5000/api/team/${props.match.params.id}`)
      .then(res=>{
          props.setSingle(res.data)
      })
      .catch(err=>{
        console.log("Axios Error: ", err)
      })

    },[props.match.params.id])
    
    //Function to rout us to /team/:id/edit
    const handleEdit = (e) =>{  
        e.preventDefault()
        props.history.push(`${props.location.pathname}/edit`)
    }
    return(
        <>
        <SingleMemberStyles>
            <span className='edit' onClick={handleEdit}> Edit </span>
            <h2 key={props.single.name} >Name: {props.single.name}</h2>
            <h3 key={props.single.email} >Email: {props.single.email}</h3>
            <h4 key = {props.single.role}>Role: {props.single.role}</h4>
       </SingleMemberStyles>
       <Route 
            path = '/team/:id/edit'
            render ={()=>{
                return (
                    <>
                        <Form 
                            user={user}
                            handleChange = {handleChange}
                            handleSubmit = {handleSubmit}
                        />
                    </>
                )
            }}
        />
       </>
    );
};

export default SingleMember;


const SingleMemberStyles = styled.div`
        background-color: #fff;
        border: 0;
        box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
            0 2px 4px rgba(0, 0, 0, 0.24);
        padding: 1rem;
        cursor: pointer; 
        margin: 1rem auto;
        text-decoration: none;
        color: grey;
        text-align: left;
        margin: 50px auto 0 auto;
        width: 980px;
        .edit{
            float: right;
            padding: 3px 6px;
        }
        .edit:hover{
            color: whitesmoke;
            padding: 3px 6px;
            background: gray;
            transition-duration: 0.5s;
        }
`;
