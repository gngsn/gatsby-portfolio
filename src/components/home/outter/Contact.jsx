import React from 'react';
import styled from 'styled-components';

import ContactForm from './ContactForm';
import ContactBar from '../ContactBar';
import palette from '../../../lib/styles/palette';

const contact = () => {
    return (
        <Block>
            <h1> CONTACT </h1>
            <ContactForm />
            <ContactBar />
        </Block>
    )
}

const Block = styled.div`
    h1 {
        font-size: 2.5rem;
        display: inline;
        font-weight: 900;
    }
    form { 
        display: flex; flex-direction: column; 
        padding: 50px 10px; 
        max-width: 600px; margin: auto; 
        div { position: relative; display: flex; justify-content: center; align-items: center;}
    }
    label { margin-top: 40px;}
    textarea, input, button { 
        background-color: transparent; 
        width: 90%;outline: none; 
        border: none; 
        font-size: 1.2rem; margin: 20px auto 10px; font-family: 'Noto L';}
    textarea, input { border-bottom: 1px solid #919191;}
    button { 
        width: 100%; 
        z-index:1; font-weight: bold;
        cursor: pointer;
        font-size: 1.5rem;
        position: relative; padding: 20px 0px;
        color: ${palette.red0};
        &:disabled{ color: #424242; cursor: auto;}
    }

    .errorMsg{color: ${palette.red0}; margin-bottom: 20px}
    textarea:focus, input:focus { outline: none; border: none; }
    textarea:focus, textarea:focus, input:focus { font-size: 1.4rem;border-bottom: 1px solid #919191; }
`;

export default contact;