import React, {useState} from 'react';
import styled from 'styled-components';

import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import AllTeam from './components/AllTeam';

function App() {
  const [user, setUser] = useState({email: "", name: "", role: ""})
  const [member, setMember] = useState([])
	function handleChange(e){
    e.preventDefault()
    console.log(e.target)

    setUser({...user, [e.target.name] : e.target.value  })
  }

	function handleSubmit(e){
    e.preventDefault();
    setMember([user, ...member]);
    //resetForm() look into it 
    //type = 'reset'
    setUser({email: "", name: "", role: ""})
	}
  return (
    <div className="App">
      <Header />
      <h1>Welcome to TeamBuilder</h1>
      <WrapperDiv>
        <Form
          handleChange = { handleChange }
          handleSubmit = { handleSubmit }
          user = {user}
        />
        <AllTeam 
          member = {member}
        />
      </WrapperDiv>
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