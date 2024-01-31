import React from 'react';
import styled from 'styled-components';

import palette from '../../../lib/styles/palette';
import { device } from '../../../lib/styles/sizes';
import ContactBar from '../ContactBar';

const contact = () => {
    return (
        <>
            <Title> contact. </Title>
            <ContactBar />
        </>
    )
}

const Title = styled.h2`
    margin: 0;
    background-color: rgb(21, 21, 21);
    border-top: 1px solid rgb(249, 247, 243);
    border-bottom: 1px solid rgb(249, 247, 243);
    font-size: 3rem;
    text-align: center;
    padding: 40px 20px;
    color: ${palette.ivory0}; 
    ${device.tablet} {
        font-size: 2.5rem;
    }
`;

export default contact;