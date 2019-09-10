import React from 'react'
import styled from 'styled-components'

import Member from './Member';

const AllTeam = (props) =>{
    return(
        <StyledAllEmployee>
            <Member 
                {...props}
                member = { props.member }
                setSingle = { props.setSingle } 
            />
        </StyledAllEmployee>
    );
};

export default AllTeam;


const StyledAllEmployee = styled.div`
    width : 48%;
    height: 100%;
    background : grey;
    color: white; 
`;
