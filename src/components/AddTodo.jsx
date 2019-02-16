import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    background: #FFDFCE;
    padding: 2em 1em;
    margin: .5em 1em;
    max-height: 3em;
    border-radius: 5%;
    align-items: center;
    align-content: space-between;
`;

const Text = styled.textarea`
    color: #FF9286;
    font-size: 1em;
    overflow: auto;
    min-width: 75vw;
    text-align: left;
    max-height: 3em;
    background: inherit;
    border: none transparent;
    resize: none;
    outline: none;
`;

const Header = styled.h3`
    color: #FF9286;
`

class AddTodo extends Component {
    render() {
        return (
            <div>
                <Header>Bark! Bark! What do you have to do today?</Header>
                <Wrapper>
                    <Text onChange={this.props.handleChange}>
                        {this.props.text}
                    </Text>
                </Wrapper>
            </div>
        )
    };
}

AddTodo.propTypes = {
    text: PropTypes.string,
    handleChange: PropTypes.func,
    updatePage: PropTypes.func,
}

AddTodo.defaultProps = {
    text: '',
    handleChange: () => {},
    updatePage: () => {},
}

export default AddTodo;