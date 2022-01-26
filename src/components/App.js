import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import "./App.css" 

const App = () => (
    <div className="main">
        <h2>Todo List</h2>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;