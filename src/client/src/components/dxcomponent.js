import React from 'react';

export default class DoxComponent extends React.Component {
	render() {
		return( 
			<div>
				<h1 className="title-dxcomponent">{this.props.title}</h1>
				<h2 className="subtitle-dox">By {this.props.author}</h2>
				<h6 className="subtitle-dox">{this.props.id}</h6>
				<p className="content-dox">{this.props.content}</p>
			</div>
		)
	}
}