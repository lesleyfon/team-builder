import React, {useEffect} from 'react'
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components'

const SingleMember = (props) =>{
    useEffect(()=>{

    },[props.single.id])
    console.log(props)
    return(
        <SingleMemberStyles>
            <h2 key={props.single.name} >Name: {props.single.name}</h2>
            <h3 key={props.single.email} >Email: {props.single.email}</h3>
            <h4 key = {props.single.role}>Role: {props.single.role}</h4>
       </SingleMemberStyles>
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
        width: 980px
`;
