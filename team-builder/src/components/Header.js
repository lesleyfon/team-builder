import React from 'react'
import styled from 'styled-components'

const Header = () =>{
    return(
        <StyledHeader />
    );
}

const StyledHeader = styled.div`
    width : 100%;
    height: 56px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    background : grey;
    color: white;  
`;

export default Header;