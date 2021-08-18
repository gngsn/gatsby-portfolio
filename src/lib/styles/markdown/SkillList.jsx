import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from './FlexBox';

const SkillList = styled.div`
    ${Flex};
    padding: 40px 0px 20px;
    flex-wrap: wrap; 
    line-height: 1.5;
    img { 
        height: ${({ size = 60 }) => `${size}px`};
        width: ${({ size = 60 }) => `${size}px`};
        margin-right: 15px;
    }
    h4 {
        display: inline; 
        vertical-align: middle; 
        font-size: 1.5rem;
        line-height: 1; 
        margin: auto 25px auto 10px; 
        font-family: 'Noto L';
    }
`;

SkillList.propTypes = {
    justify: PropTypes.string,
    align: PropTypes.string,
    size: PropTypes.number
};

export default SkillList;