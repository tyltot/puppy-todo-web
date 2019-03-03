import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/** Buttons */
import addSquare from '../resources/buttons/addSquare.png';
import circleCheck from '../resources/buttons/circleCheck.png';
import squareCheck from '../resources/buttons/squareCheck.png';
import leftArrow from '../resources/buttons/leftArrow.png';

const StyledImage = styled.img`
    width: ${props => props['data-size']};
    height: ${props => props['data-size']};
    &:hover {
        opacity: .75;
    }
`

const StyledContainer = styled.label`
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    align-items: center;
`;

const StyledInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;

const getMeasurement = (size) => {
    switch (size) {
        case 'small':
            return '1rem';
        case 'medium':
            return '1.5rem';
        case 'large':
            return '3rem';
        case 'x-large':
            return '4rem';            
        default: 
            return '3rem';
    }
}

const getImage = (type, size) => {
    if (type === 'checkbox-circle') {
        return <StyledImage 
                    id="icon"
                    src={circleCheck}
                    alt={'Complete Todo'}
                    title={'Complete Todo'}
                    data-size={getMeasurement(size)} 
                />;
    } else if (type === 'checkbox-square') {
        return <StyledImage 
                    id="icon"
                    src={squareCheck}
                    alt={'Complete Todo'}
                    title={'Complete Todo'}
                    data-size={getMeasurement(size)}
                />;
    } else if (type === 'back-square') {
        return <StyledImage
                    id="back-icon"
                    src={leftArrow}
                    alt={'Go back'}
                    title={'Go back'}
                    data-size={getMeasurement(size)}
                />;
    } else if (type === 'add') {
        return <StyledImage
                    id="add"
                    src={addSquare}
                    alt={'Add Todo'}
                    title={'Add Todo'}
                    data-size={getMeasurement(size)}
                />;
    } else {
        console.error('wtf icon', type);
    }
}

const ButtonFactory = ({ type = 'button', name, onChange, size = 'large' }) => (
    <StyledContainer type={type}>
        <StyledInput type={'button'} name={name} onClick={onChange} />
        {getImage(type, size)}
    </StyledContainer>
);

ButtonFactory.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large']),
}

export default ButtonFactory;