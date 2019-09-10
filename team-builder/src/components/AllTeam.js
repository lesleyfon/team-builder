import React from 'react'
import styled from 'styled-components'
import Member from './Member';

const AllTeam = (props) =>{
    return(
        <StyledAllEmployee>
            <Member 
                member = { props.member }
            />
        </StyledAllEmployee>
    );
};

export default AllTeam;


const StyledAllEmployee = styled.div`
    width : 48%;
    height: 500px;
    background : grey;
    color: white; 
`;
