import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Loader from './components/Loader';
import AddTodo from './components/AddTodo';
import BarkYouDidIt from './components/BarkYouDidIt';
import Todo from './components/Todo';
import ButtonFactory from './components/ButtonFactory';

import LocalState from './state/LocalState';

const TodoWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: ${props => props.isDesktop ? '1vw' : '0px'};
  margin-right: ${props => props.isDesktop ? '1vw' : '0px'};
  overflow-y: scroll !important;
  max-height: calc(var(--view-height) - 30vh);
`;

const BodyWrapper = styled.div`
  background: #C5D5D6;
  min-height: calc(var(--view-height) - 15vh);
  display: flex;
  flex-direction: column;
  padding-top: .5em;
  overflow-x: hidden;
`;

const AppContainer = styled.div`
  text-align: center;
  min-height: inherit;
`;

const AppHeader = styled.div`
    background-color: var(--dark-pink);
    height: 15vh;
    width: inherit;
`;

const HeaderWrapper = styled.header`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AppTitle = styled.h1`
    padding: .20em;
    color: #FFDFCE;
`;

const ButtonWrapper = styled.footer`
    flex-shrink: 0;
    margin-bottom: 1em;
    margin-top: .5em;
`;

const FlexButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.updatePage = this.updatePage.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.state = {
            page: this.props.page,
            todos: [],
            currentTodo: this.props.currentTodo,
            isDesktop: window.outerWidth > 1000,
        };
    }

    componentDidMount() {
        this.setState({todos: LocalState.getInitialState('Add your first todo!')});
    }

    updateTodo(currentTodo) {
        this.setState({currentTodo});
    }

    addTodo() {
        const {currentTodo} = this.state;
        LocalState.addTodoToState(currentTodo);
        this.setState({
            todos: LocalState.getTodosFromState(),
            currentTodo: ''
        });
    }

    removeTodo(todoToRemove) {
        LocalState.removeTodoFromState(todoToRemove);
        this.setState({
            todos: LocalState.getTodosFromState(),
            page: 'puppy'
        });
    }

    updatePage(page) {
        this.setState({page});
    }

    getButton = () => {
        const {page} = this.state;
        if (page === 'add') {
            return (
                <FlexButtonWrapper>
                    <br />
                    <ButtonFactory
                        name={'goBackButton'}
                        onChange={() => this.updatePage('list')}
                        type={'back-square'}
                    />
                    <ButtonFactory
                        name={'submitTodoButton'}
                        onChange={() => {
                            console.log('add event');
                            this.addTodo();
                            this.updatePage('list');
                        }}
                        type={'checkbox-square'}
                    />
                    <br />
                </FlexButtonWrapper>);
        } else if (page === 'list') {
            return (
                <ButtonFactory
                    name={'addButton'}
                    onChange={() => this.updatePage('add')}
                    type="add" />
                );
        } else if (page === 'puppy')  {
            return (
                <ButtonFactory
                    name={'goBackButton'}
                    onChange={() => this.updatePage('list')}
                    type={'back-square'} 
                />);
        } else {
            // eh...
        }
    }

    getPage = () => {
        const {isDesktop, todos, page, currentTodo} = this.state;
        if (page === 'add') {
            return <AddTodo text={currentTodo} handleChange={event => this.updateTodo(event.target.value)} updatePage={this.updatePage} />;
        } else if (page === 'puppy') {
            return <BarkYouDidIt />
        } else if (page === 'list') {
            return todos.map((todo, index) => <Todo key={index} isDesktop={isDesktop} value={todo} onChange={this.removeTodo} />);
        } else {
            console.error("wtf", page);
        }
    }

    render() {
        const {isDesktop} = this.state;

        return (
            <AppContainer>
                <AppHeader>
                    <HeaderWrapper>
                        <AppTitle>To</AppTitle>
                        <Loader />
                        <AppTitle>Do</AppTitle>
                    </HeaderWrapper>
                </AppHeader>
                <BodyWrapper id={'bodyWrapper'}>
                    <TodoWrapper id={'todoWrapper'} isDesktop={isDesktop}>
                        {this.getPage()}
                    </TodoWrapper>
                    <ButtonWrapper id={'buttonWrapper'}>
                        {this.getButton()}
                    </ButtonWrapper>
                </BodyWrapper>
            </AppContainer>
        );
    }
}

App.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string),
    page: PropTypes.oneOf(['list', 'add', 'puppy']),
}

App.defaultProps = {
    // todos: ['this is a first todo', 'heres another', 'heres anothe really long one to test whether this motha fucka is working at all', 'heres another', 'heres another', 'heres another', 'heres another'],
    page: 'list',
}

export default App;
