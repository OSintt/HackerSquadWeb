import React from 'react';
import axios from 'axios';
import Error404 from './error';

const url = 'http://localhost:3001'

export default class Buscador extends React.Component {

	status = {
		search: [],
		dxes: [],
		dxesV: [],
		dxBuscado: []
	}
	
	filtrar() {
		const text = this.state.search.toLowerCase();
		for (let i of this.state.dxesV) {
			let title = i.title.toLowerCase();
			if (title.indexOf(text) !== 1) {
				this.setState({dxBuscado: i});
			} else {
				this.setState({dxBuscado: <Error404/>})
			}
		}
	}

	async componentDidMount() {
		let res = await axios.get(`${url}/api/dxes`)
		this.setState({dxes: res.data})
		let dxList = [];
		res.data.forEach(u => {
			if (u.verified === true) return dxList.push(u);
		});
		this.setState({dxesV: dxList});
	}

	onChange = async e => {
		await this.setState({
			search: e.target.value
		})
		this.filtrar();
	}
	onSubmit = e => {
		e.preventDefault();
	}
	render() {
		return(
			<div>
				<form onSubmit={this.onSubmit}>
					<input 
						name="search"
						className="search"
						placeholder="Buscar doxes"
						onChange={this.onChange}
					/>
				</form>
			</div>
		)
	}
}