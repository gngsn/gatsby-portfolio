import React from 'react';
import styled from 'styled-components';

import ContactForm from './ContactForm';
import ContactBar from '../ContactBar';
import palette from '../../../lib/styles/palette';
import { device } from '../../../lib/styles/sizes';

const contact = () => {
    return (
        <>
        <Block>
            <h1> contact. </h1>
            <ContactForm />
        </Block>
        <ContactBar />
        </>
    )
}

const Block = styled.div`
    h1 {
        font-size: 3.5rem;
        color: ${palette.black0}; 
        ${device.tablet} {
            font-size: 2.5rem;
        }
    }

    form { 
        display: flex; flex-direction: column; 
        padding: 50px 10px; 
        max-width: 600px; margin: auto; 
        div { position: relative; display: flex; justify-content: center; align-items: center;}
    }

    label {
        display: none;
    }

    textarea, input, button { 
        cursor: none;
        background-color: transparent; 
        width: 90%; min-height: 72px;
        border: 1px solid ${palette.grey2};
        font-size: 1.2rem; 
        margin: 20px auto 10px;
        padding: 20px;
    }

    input {
        padding: 0 20px;
    }
    
    button { 
        font-weight: bold;
        font-size: 1.5rem;
        position: relative; padding: 20px 0px;
        color: ${palette.primary};
        &:disabled {
            color: #424242; 
        }
    }

    .errorMsg{
        color: ${palette.primary};
    }

    textarea:focus, input:focus { 
        outline: none;
    }

    textarea:focus, textarea:focus, input:focus { 
        font-size: 1.4rem;
    }
`;

export default contact;