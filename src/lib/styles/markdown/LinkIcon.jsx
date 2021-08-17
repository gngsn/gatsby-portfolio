import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkIcon = styled.a`
    display: inline-flex; 
    align-items: center;
    img {
        width: 30px; height: 30px;
        display: inline-block; 
        margin-right: 10px;
    }
`;

LinkIcon.propTypes = {
};

export default LinkIcon;