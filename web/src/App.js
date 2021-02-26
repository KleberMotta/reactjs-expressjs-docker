import React, { useState, useEffect } from 'react';

import './App.css';

import Header from './components/Header';
import api from './services/api';

function App() {

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		setProjects([...projects, `Novo Projeto ${Date.now()}`]); api.get('projects').then(response => {
			setProjects(response.data);
		})
	}, []);

	async function handleAddProject() {
		// setProjects([...projects, `Novo Projeto ${Date.now()}`]);

		const response = await api.post('projects', {
			title: `Novo Projeto ${Date.now()}`,
			owner: 'Kleber Motta'
		});

		const project = response.data;

		setProjects([...projects, project]);
	}

	return (
		<>
			<Header title="Projects" />

			<ul>
				{projects.map(project => <li key={project.id}>{project.title}</li>)}
			</ul>
			<button type="button" onClick={handleAddProject}> Adicionar projeto </button>
		</>
	);
}

export default App;