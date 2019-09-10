import React, {useEffect} from 'react'
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components'

const Member = (props) =>{
    useEffect(()=>{

    },[props.member])
    return(
        <>
            {props.member.map((person, i) =>{
                return <MemberStyles 
                            key={i} className='team-card' 
                            onClick= {(e)=>{
                            e.preventDefault();
                            props.history.push(`/team/${person.id}`)
                            props.setSingle(person)
                }}>
                    <h2 key={person.name} >Name: {person.name}</h2>
                    <h3 key={person.email} >Email: {person.email}</h3>
                    <h4 key = {person.role}>Role: {person.role}</h4>
                 </MemberStyles>
            })}
       </>
    );
};

export default Member;


const MemberStyles = styled.div`
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
`;
