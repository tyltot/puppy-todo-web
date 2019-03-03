import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    background: var(--light-pink);
    padding: 2rem 1em;
    margin: .5em 1em;
    margin-bottom: 2em;
    border-radius: 5%;
    align-items: center;
    align-content: space-between;
    height: auto;
`;

const Text = styled.p`
    color: var(--dark-pink);
    font-size: 1.5em;
    text-align: left;
    max-height: 3em;
    background: inherit;
    border: none;
    padding: 0 0;
`;

const StyledImg = styled.img`
    border-radius: 5%;
    width: 100%;
    max-width: 600px;
    height: 90%;
    max-height: 50vh;
`

class AddTodo extends Component {
    render() {
        const {height} = this.props;
        const getRandomInt = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
          }
        const getPup = () => require(`../resources/puppy-pics/pup${getRandomInt(1, 48)}.jpg`);

        return (
            <Wrapper>
                <StyledImg src={getPup()} height={height} alt="Couldnt load pup" />
                <Text>
                    You did it!
                </Text>
            </Wrapper>
        )
    };
}

AddTodo.propTypes = {
    text: PropTypes.string,
    handleChange: PropTypes.func,
    updatePage: PropTypes.func,
}

AddTodo.defaultProps = {
    height: '90%',
    handleChange: () => {},
    updatePage: () => {},
}

export default AddTodo;