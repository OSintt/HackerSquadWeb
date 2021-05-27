import React from 'react';
import axios from 'axios';
import Error404 from './error';
import Zoom from 'react-reveal/Fade';

import './dxes/dxes.css';

const url = "http://localhost:3001"
export default class Dxes extends React.Component {
	state = {
		dxes: [],
		dxLength: [],
		page: parseInt(this.props.match.params.id) * 10,
		dxes2: [],
		pagesLength: [],
		search: []
	}

	async componentDidMount() {
		let res = await axios.get(`${url}/api/dxes`)
		this.setState({dxes: res.data})
		let dxList = [];
		res.data.forEach(u => {
			if (u.verified === true) return dxList.push(u);
		});
		this.setState({dxLength: dxList});
		this.setState({dxes2: this.state.dxLength.slice(this.state.page, this.state.page + 10)});
		this.setState({pagesLength: parseInt(this.state.dxLength.length / 10)});
	}		
	filtrar() {
		const text = this.state.search.toLowerCase();
		let d = [];
		this.state.dxLength.forEach(u => {
			let title = u.title.toLowerCase();
			if (title.indexOf(text) !== -1) {
				d.push(u);
			} else {
				d.push({
					dxes2: this.state.dxLength.slice(this.state.page, this.state.page + 10)
				})
			}
		});
		this.setState({dxes2: d});
	}

	onChange = async e => {
		await this.setState({
			search: e.target.value
		})
		this.filtrar();
	}
	renderThis() {
		return (
		    <div>
		      	<br/>
		      	<div className="title-dox">Lista de dxes</div>
		      	<div className="subtitle-dox">
		      		<h2 className="subtitle-dox">
		      			Viendo {this.state.page + 1}-{this.state.page + this.state.dxes2.length} de {this.state.dxLength.length} dxes
		      		</h2>
			      	<br/>
				    <div>
						<form onSubmit={this.onSubmit}>
							{this.state.page === 0 ? <input 
								name="search"
								className="search"
								placeholder="Buscar dxes"
								autoComplete="off"
								onChange={this.onChange}
							/> : null}
						</form>
					</div>
		      	</div>	        
		          
		          <div className="box-dox">
		          	<br/>
		            {
		              this.state.dxes2.map(s => {
		              	if (s.verified === true)
		                return (
		                	<Zoom left key={s._id}>
			                  	<div className="carta-dox" >
				                    <a className="headerCarta-dox" href={`http://localhost:3000/dxes/${s.title}`}>{s.title}</a>
				                    <div className="bodyCarta-dox"><small>{s.creationDate}</small>
				                      	<p>Autor: {s.author}</p><small>ID: {s._id}</small>
				                      	<h6>Visitas: {s.views}</h6>
				                    </div>
			                  	</div>
			                </Zoom>
		                )
		              })
		            }
		            <div>
		            	Página {this.state.page === 0 ? this.state.page + 1 : this.state.page / 10 + 1}-{this.state.pagesLength + 1}
		            </div>
		            <br/>
		            <div className="box-arrow">
		            	{this.state.page !== 0 ? <a className="box-arrow-before" href={parseInt(this.props.match.params.id) - 1}>◄</a> : null}
		            	{(this.state.page === 0 ? this.state.page + 1 : this.state.page / 10 + 1) <= this.state.pagesLength ? <a className="box-arrow-next" href={parseInt(this.props.match.params.id) + 1}>►</a> : null}
		         	</div>
		         </div>
		     </div>
	  	)
	}

	render() {
		if (
			this.state.page + 1 === this.state.page + this.state.dxes2.length || 
			this.state.page + this.state.dxes2.length > this.state.dxLength.length ||
			isNaN(this.state.page)
		) {
			return (
				<Error404/>
			)
		} else {
			return (
				this.renderThis()
			)
		}
	}
}