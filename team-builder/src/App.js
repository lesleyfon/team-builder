import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';

import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import AllTeam from './components/AllTeam';
import SingleMember from './components/SingleMember';

function App() {
  const [user, setUser] = useState({id:'' ,email: "", name: "", role: ""})
  const [member, setMember] = useState([]);
  const [single, setSingle] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/team')
      .then(res=>{
        setMember(res.data)
      })
      .catch(err=>{
        console.log("Axios Error: ", err)
      })
  }, [])


	function handleChange(e){
    e.preventDefault()
    setUser({ ...user, [e.target.name] : e.target.value, id : member.length})
  }

	function handleSubmit(e){
    e.preventDefault();
    setMember([user, ...member]);
    axios.post('http://localhost:5000/api/team',{ id:member.length , ...user})
      .then(res=>{
            console.log(res)
      })
      .catch(err=>{
        console.log('Axios Err: ', err)
      })
    //resetForm() look into it 
    //type = 'reset'
    setUser({email: "", name: "", role: ""})
	}
  return (
    <div className="App">
      <Header />
      <h1>Welcome to TeamBuilder</h1>
      <Route 
          path ='/'
          exact
          render = {(props)=>{
            return(
              <WrapperDiv>
                <Form
                  handleChange = { handleChange }
                  handleSubmit = { handleSubmit }
                  user = {user}
                />
                <AllTeam 
                  {...props}          
                  member = {member}
                  setSingle = {setSingle}
                />
              </WrapperDiv>
            )
          }}
        />

      <Route 
        path='/team/:id'
        exact
        render = { (props) => {
          return(
            <SingleMember 
              {...props}
              single = {single}
              setSingle = {setSingle}
            />
          )
        }}
      />
    </div>
  );
}

export default App;

const WrapperDiv = styled.div`
  width: 1025px;
  margin: 50px auto 0 auto;
  display: flex;
  justify-content: space-between;
`;