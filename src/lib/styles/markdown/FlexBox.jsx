import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import BaseElement from './BaseElement';

export const Flex = css`
    ${BaseElement};
    max-width: 100%; width: 100%;
    display: flex;
    justify-content: ${({ justify = 'center' }) => justify};
    align-items: ${({ align = 'flex-start' }) => align};
`;

const FlexBox = styled.div`
    ${Flex};
`;

FlexBox.propTypes = {
    justify: PropTypes.string,
    align: PropTypes.string
};

export default FlexBox;