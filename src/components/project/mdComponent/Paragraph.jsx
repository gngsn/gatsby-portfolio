import styled from 'styled-components';
import PropTypes from 'prop-types';
import BaseElement from './BaseElement';

const Paragraph = styled.p`
    ${BaseElement};
    font-size: 1.2rem; line-height: 1.3;
    text-align: ${({ align = 'left' }) => align};
`;

Paragraph.propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Paragraph;