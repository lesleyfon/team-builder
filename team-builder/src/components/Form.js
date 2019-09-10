import React from "react";
import styled from 'styled-components'
function Form(props) {

  return (
    <FormStyles className="Form">
      <form onSubmit={props.handleSubmit} >
        <input 
            type = "text"
            name = 'name'
            value = {props.user.name}
            placeholder= 'Name' 
            onChange ={props.handleChange}
            required
        />
        <input 
            type="email"
            name = 'email'
            data-lesley = {props.user.email}
            value = {props.user.email}
            placeholder= 'Email' 
            onChange ={props.handleChange}
            required
        />
        <input 
            type="text"
            name = 'role'
            value = {props.user.role}
            placeholder= 'Role' 
            onChange ={props.handleChange}
            required
        />
		 <input type="submit"/>		
      </form>
    </FormStyles>
  );
}
export default Form;

const FormStyles = styled.div`
    width : 560px;
    margin: 0 auto; 
    form{
        display: flex;
        flex-direction: column;
    }
    input{
        margin: 5px;
    }
    input:focus{
        outline: none;
    }
    input[type="submit"]:hover  {
        background: grey;
        color: whitesmoke;
    }
`;