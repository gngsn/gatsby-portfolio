import React from 'react';
import styled from 'styled-components';

import Inner from './Inner';
import Outter from './outter';

const index = () => {
    return (
        <Block>
            <Inner />
            <Outter />
        </Block>
    );
}

const Block = styled.div`
    & > div {
        border-left: 2px solid #000;
        border-right: 2px solid #000;
    }
`;


export default index;