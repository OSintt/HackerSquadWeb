import React from 'react';
import './post/post.css';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import { Redirect } from "react-router-dom";

const url = "http://localhost:3001"

const recaptchaRef = React.createRef();

export default class Post extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			content: "",
			author: "",
			title: "",
			error: "",
			isVerified: "",
			redirect: null
		}
	}
	
	onChange = e => {
  		console.log("Captcha passed");
  		const recaptchaValue = recaptchaRef.current.getValue();
	  	this.setState({isVerified: recaptchaValue})
	}
	onChangeContent = e => {
		this.setState({
			content: e.target.value
		})
	}
	onChangeAuthor = e => {
		this.setState({
			author: e.target.value
		})
	}
	onChangeTitle = e => {
		this.setState({
			title: e.target.value
		})
	}
	handlePromise(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	onSubmit = async (e) => {
		e.preventDefault();

		let res = await axios.post(`${url}/api/dxes`, { 
			content: this.state.content,
			author: this.state.author,
			title: this.state.title,
			captcha: this.state.isVerified
			
		})
		if (res.status === 200){	
			this.setState({error: res.data.message});
		} else {
			this.setState({
				content: ''
			});
			this.setState({
				author: ''
			});
			this.setState({
				title: ''
			});
			this.setState({error: "Gracias por postear! Espere a que su dox sea verificado"});
			await this.handlePromise(5000);
			this.setState({redirect: "/"});
		}
	}
	render() {
		if (this.state.redirect) {
    		return <Redirect to={this.state.redirect} />
  		}
		return(
	      	<div>
	        	<div className="title-dxcomponent">Postea un døx</div>
					<div className="cuerpo">
						<div className="cont">
							<h6 className="error">{this.state.error}</h6>
							<form onSubmit={this.validateForm}>
								<input 
									type="text"
									name="title"
									placeholder="Título"
									className="input"
									autoComplete="off"
									onChange={this.onChangeTitle}
									value={this.state.title}
									spellCheck="false"/>
								<input 
									type="text"
									name="autor"
									placeholder="Autor"
									className="input"
									autoComplete="off"
									value={this.state.author}
									onChange={this.onChangeAuthor}
									spellCheck="false"/>
								<br/>
								<br/>
								<textarea 
									type="text" 
									name="content"
									placeholder="Contenido del dx" 
									className="textarea"
									spellCheck="false"
									onChange={this.onChangeContent}
									value={this.state.content}/>
								<button type="submit" className="boton" onClick={this.onSubmit}>Enviar</button>
							</form>
								  <ReCAPTCHA
								  	ref={recaptchaRef}
								  	theme="dark"
								    sitekey="6LeXkdAaAAAAANIACQo-utFdBQwnT6IiuXWoPwUp"
								    onChange={this.onChange}
								  />
						</div>
					</div>
			</div>
		)
	}
}
