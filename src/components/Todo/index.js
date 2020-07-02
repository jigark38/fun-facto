import React, { Suspense } from 'react';
//import Pending from '../modules/Pending';
import Complete from './Complete';
import NewToDo from './NewToDo';
import { v4 as uuidv4 } from 'uuid';
import './todo.scss';

const PendingLayout = React.lazy(() => import('./Pending'));
let allowPendingOperation = true;

class HomePage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            pendingTodo: [
                { id: 1, name: 'Todo 1', className: "item-list" },
                { id: 2, name: 'Todo 2', className: "item-list" },
                { id: 3, name: 'Todo 3', className: "item-list" },
                { id: 4, name: 'Todo 4', className: "item-list" },
                { id: 5, name: 'Todo 5', className: "item-list" }
            ],
            completedTodo: [
                /* {id: 1, name: 'Completed 1'},
                {id: 2, name: 'Completed 2'},
                {id: 3, name: 'Completed 3'},
                {id: 4, name: 'Completed 4'},
                {id: 5, name: 'Completed 5'},
                {id: 6, name: 'Completed 6'},
                {id: 7, name: 'Completed 7'}, */
            ],
            todoName: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    componentDidMount() {
        document.querySelector(`input[type='text']`).focus();
    }

    clickPendingItemHandler = (id) => {

        if(!allowPendingOperation) return;

        this.removeFromPendingAddInComplete(id);

    }
    fadeOutItemFromPending(id) {
        let newPendingTodo = [...this.state.pendingTodo];
        let clickedTodo = newPendingTodo.find(todo => todo.id === id);
        if(typeof clickedTodo === 'undefined') return;
        clickedTodo.className = "item-list fadeOut";

        this.setState({
            pendingTodo: [
                ...newPendingTodo
            ]
        });
    }

    removeFromPendingAddInComplete(id) {

        allowPendingOperation = false;
        this.fadeOutItemFromPending(id);

        setTimeout(() => {
            let completedTodoItem = this.state.pendingTodo.find(todo => todo.id === id);
            if(typeof completedTodoItem === 'undefined') {
                allowPendingOperation = true;
                return 0;
            }
            completedTodoItem.className = "item-list noOpacity";

            let newPendingTodo = [...this.state.pendingTodo];
            newPendingTodo = newPendingTodo.filter(todo => todo.id !== id);

            this.setState(prevState => ({
                pendingTodo: [
                    ...newPendingTodo
                ],
                completedTodo: [
                    ...prevState.completedTodo,
                    completedTodoItem
                ]
            }));
            allowPendingOperation = true;
            this.fadeInItemInComplete(id);
        }, 300);

    }

    fadeInItemInComplete(id) {
        setTimeout(() => {

            let newCompletedTodo = [...this.state.completedTodo];
            let completedTodoItem = newCompletedTodo.find(todo => todo.id === id);
            completedTodoItem.className = "item-list fadeIn";

            this.setState({
                completedTodo: [
                    ...newCompletedTodo
                ]
            });
        }, 100);
    }


    clickCompleteItemHandler = (id) => {
        let completeNewTodo = [...this.state.completedTodo];
        completeNewTodo = completeNewTodo.filter(todo => todo.id !== id);

        let pendingNewTodo = this.state.completedTodo.find(todo => todo.id === id);

        this.setState(prevState => ({
            completedTodo: [
                ...completeNewTodo
            ],
            pendingTodo: [
                ...prevState.pendingTodo,
                pendingNewTodo
            ]
        }));
    }

    handleInputChange = (event) => {
        this.setState({
            todoName: event.target.value
        });
    }

    handleSubmit = () => {
        this.addNewTodoInPending();
    }

    addNewTodoInPending() {
        let id = uuidv4();//this.state.pendingTodo.length + this.state.completedTodo.length + 1;

        if (this.state.todoName === '') return;
        console.log(id);

        this.setState(prevState => ({
            ...prevState,
            pendingTodo: [
                ...prevState.pendingTodo,
                { id: id, name: this.state.todoName, className: "item-list noOpacity" }
            ],
            todoName: ''
        }));

        document.querySelector(`input[type='text']`).focus();

        this.fadeInItemInPending(id);
    }

    fadeInItemInPending(id) {

        setTimeout(() => {
            let newPendingTodo = [...this.state.pendingTodo];
            let newPendingTodoItem = newPendingTodo.find(todo => todo.id === id);
            newPendingTodoItem.className = "item-list fadeIn";

            this.setState({
                pendingTodo: [
                    ...newPendingTodo
                ]
            });
        }, 100);
    }

    handleClear = () => {
        this.setState({
            todoName: ''
        });
    }

    handleKeyPress = (e) => {
        console.log('Presss');
        if (e.which === 13) {
            console.log('enter press');
            this.handleSubmit();
        }
    }

    render() {
        return (
            <div className="container">
                <div>
                    <center><h1> Learn React To Do App</h1></center>
                </div>
                <div className="row">
                    <Suspense fallback={<div> Loading.....</div>}>
                        <PendingLayout todos={this.state.pendingTodo} clickItem={this.clickPendingItemHandler} />
                    </Suspense>

                    <Complete todos={this.state.completedTodo} clickItem={this.clickCompleteItemHandler} />
                    <NewToDo
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit}
                        handleKeyPress={this.handleKeyPress}
                        handleClear={this.handleClear}
                        todoName={this.state.todoName}
                    />
                </div>
            </div>
        );
    }
};

export default HomePage;