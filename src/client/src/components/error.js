import React from 'react';
import TypeIt from "typeit-react";

export default class Error404 extends React.Component {

	render() {
		return (
			<div>
					<h1 className="center-error">Error 404<br/>Page not found</h1>	
						<div className="logo center-error">
					        <img src="https://media.discordapp.net/attachments/820265289815031819/822883377652170838/logo.png" alt="Logo"/>
					    </div>
				<TypeIt
					options={{cursor: false}}
				>
					<h4 className="center-error"><a href="/">Regresar</a></h4>		
				</TypeIt>	
			</div>
		)
	}
} 