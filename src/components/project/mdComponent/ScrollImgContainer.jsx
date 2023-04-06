import styled from 'styled-components';
import PropTypes from 'prop-types';
import BaseElement from './BaseElement';
import palette from '../../../lib/styles/palette';

const ScrollImgContainer = styled.div`
    ${BaseElement};
    width: ${({ width = '60vw' }) => isNaN(width) ? width : width + 'px'};
    height: ${({ height = '70vh' }) => isNaN(height) ? height : height + 'px'};
    overflow-x: hidden; overflow-y: scroll;
    padding-right: 10px;
    margin: auto; 
    img { margin-right: 20px; border-radius: 10px;}
    &::-webkit-scrollbar {width: 6px;}
    &::-webkit-scrollbar-track {border-radius: 6px;background-color:${palette.grey0};}
    &::-webkit-scrollbar-thumb {border-radius: 10px; background-color:${palette.primary};}
`;

ScrollImgContainer.propTypes = {
    width: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    height: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
};

export default ScrollImgContainer;