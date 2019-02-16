import React, { Component } from 'react';
import puppy from '../resources/puppy.svg';
import styled, {keyframes} from 'styled-components';

const Keyframes = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`;

const StyledImg = styled.img`
    animation: ${props => props.speed ? `${Keyframes} infinite ${props.speed} linear` : `${Keyframes} infinite 20s linear`};
`;

class Loader extends Component {
    render() {
        const {height, speed} = this.props;

        return (
            <StyledImg src={puppy} speed={speed} height={height} alt="logo" />
        );
    }
}

Loader.defaultProps = {
    height: '45vh',
    speed: '5s'
}

export default Loader;
