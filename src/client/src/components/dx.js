import React from 'react';
import axios from 'axios';
import Error404 from './error';
import DoxComponent from './dxcomponent';

const url = "http://localhost:3001";

export default class Dx extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			render: []
		}
	}

	async componentDidMount() {
		let res = await axios.get(`${url}/api/dxes/${this.props.match.params.id}`);
		console.log(res.status)
		if (res.data.title == null) {
			this.setState({render: <Error404/>});
		} else {
			this.setState({
				render: <DoxComponent 
					uri={this.props.match.params.id} 
					content={res.data.content} 
					author={res.data.author}
					id={res.data._id}
					title={res.data.title}
				/>});
		}
	}

	render() {
		return (
			this.state.render
		)
	}
}

	
