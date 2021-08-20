import styled from 'styled-components';
import PropTypes from 'prop-types';
import BaseElement from './BaseElement';
import palette from '../palette';

const Gallery = styled.div`
    ${BaseElement};
    display: flex; 
    flex-direction: row; 
    width: 100%; 
    overflow-x: scroll; 
    overflow-y: hidden; 
    height: ${({ height = 'auto' }) => isNaN(height) ? height : height + 'px'};
    img {
        height: 250px; 
        margin: 30px 20px;
        box-shadow: 0px 0px 12px 10px rgba(192, 192, 192, 0.192);
    }
    &::-webkit-scrollbar {height: 6px;}
    &::-webkit-scrollbar-thumb {opacity: .4; border-radius: 15px; background-color: ${palette.red0};}
    &::-webkit-scrollbar-track {opacity: .4; border-radius: 15px; background-color: ${palette.grey0};}
`;

Gallery.propTypes = {
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Gallery;