import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GenericIcon from './GenericIcon';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background: var(--light-pink);
    padding: .5em 1em;
    margin: .5em 1em;
    margin-right: 8px;
    min-height: 3em;
    max-height: 5em;
    border-radius: 5%;
    align-items: center;
    align-content: space-between;
`;

const Text = styled.p`
    color: var(--dark-pink);
    font-size: 1em;
    overflow: auto;
    min-width: 75vw;
    text-align: left;
    max-height: 3em;
    flex: 1;
`;

class Todo extends Component {
    render() {
        const { value, onChange } = this.props;
        return (
            <Wrapper>
                <Text>{value}</Text>
                <GenericIcon
                    name={'checkers'}
                    onChange={() => onChange(value)}
                    type={'checkbox-circle'}
                />
            </Wrapper>
        );
    }
}

Todo.propTypes = {
    shouldShowCheckBox: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
}

Todo.defaultProps = {
    shouldShowCheckBox: true,
}

export default Todo;