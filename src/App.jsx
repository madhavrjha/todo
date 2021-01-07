import React, { useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import ToDoList from './Components/ToDoList';

const LOCAL_STORAGE_KEY = 'madhavrjha@github.io/todo.todo-list';

const App = () => {
	const [taskName, setTaskName] = useState('');
	const [taskList, setTaskList] = useState([]);

	useEffect(() => {
		const savedTaskList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (savedTaskList) setTaskList(savedTaskList);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskList));
	}, [taskList]);

	const toggleCompleted = id => {
		let newTaskList = [...taskList];
		let task = newTaskList.find(task => task.id === id);
		task.completed = !task.completed;
		setTaskList(newTaskList);
	};

	const preventFormSubmission = e => {
		e.preventDefault();
	};

	const handleChange = e => {
		setTaskName(e.target.value);
	};

	const addTaskToList = e => {
		const copyTaskName = taskName.toLocaleLowerCase();

		const isEmpty = copyTaskName === '';
		const isExist = taskList.find(task => copyTaskName === task.name);

		if (!isEmpty && !isExist) {
			setTaskName('');
			setTaskList(prevTaskList => [
				...prevTaskList,
				{
					id: uuid(),
					name: copyTaskName,
					completed: false,
				},
			]);
		} else {
			if (isEmpty) console.log('Empty Task Could not be added');
			if (isExist) console.log('Existed Task Could not be added');
		}
	};

	const removeCompletedTask = e => {
		setTaskList(prevTaskList => {
			return prevTaskList.filter(task => !task.completed);
		});
	};

	const countIncompletedTask = () => {
		return taskList.filter(task => !task.completed).length;
	};

	return (
		<div className='App'>
			<h1>ToDo</h1>
			<form onSubmit={preventFormSubmission}>
				<input
					type='text'
					name='taskName'
					value={taskName}
					onChange={handleChange}
				/>
				<button type='submit' onClick={addTaskToList}>
					Add
				</button>
				<button onClick={removeCompletedTask}>Remove All Completed</button>
			</form>
			<p>{countIncompletedTask()} task remaining</p>
			<ToDoList taskList={taskList} toggleCompleted={toggleCompleted} />
		</div>
	);
};

export default App;