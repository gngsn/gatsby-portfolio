import styled from 'styled-components';
import BaseElement from './BaseElement';

const QuotationMarksTitle = styled.h5`
    ${BaseElement};
    display:block; 
    font-size: 2rem; 
    text-align: center; 
    margin: 50px auto;
    font-family: 'Noto R';
    
    &:before, &:after {
        content:"“";
        font-size: 4rem; 
        line-height: .3; 
        display: block;
    }
    &:after {
         margin-top: 3rem;
    }
`;

QuotationMarksTitle.propTypes = {
};

export default QuotationMarksTitle;