import { css } from 'styled-components';
import PropTypes from 'prop-types';

const BaseElement = css`
    margin-top: ${({ mt = 0 }) => isNaN(mt) ? mt : mt + 'px'};
    margin-right: ${({ mr = 0 }) => isNaN(mr) ? mr : mr + 'px'};
    margin-bottom: ${({ mb = 0 }) => isNaN(mb) ? mb : mb + 'px'};
    margin-left: ${({ ml = 0 }) => isNaN(ml) ? ml : ml + 'px'};
`;

BaseElement.propTypes = {
    mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BaseElement;