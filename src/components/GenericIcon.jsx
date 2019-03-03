import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.label`
    display: block;
    position: relative;
    /* margin-bottom: 12px; */
    /* margin-left: 12px; */
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    align-items: center;
    font-size: ${props => props.type !== 'checkbox-circle' ? '-webkit-xxx-large' : 'x-large'};
`;

const StyledInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;

const getIcon = (type) => {
    if (type === 'checkbox-circle') {
        return <i id="icon" className="fas fa-check-circle"></i>;
    } else if (type === 'checkbox-square') {
        return <i id="icon" className="fas fa-check-square"></i>;
    } else if (type === 'back-square') {
        return <i id="back-icon" className="fas fa-arrow-left"></i>;
    } else {
        console.error('wtf icon', type);
    }
}

const GenericIcon = ({ type = 'button', name, checked, onChange }) => (
    <StyledContainer type={type}>
        <StyledInput type={'button'} name={name} onClick={onChange} />
        {getIcon(type)}
    </StyledContainer>
);

GenericIcon.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}

export default GenericIcon;