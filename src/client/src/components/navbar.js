import React from 'react';
import {
	Nav,  
	NavMenu, 
	NavLink
} from './navbarcomps/navbar';

export default class Navbar extends React.Component {
	
	render() { 
		return (
			<div>
				<Nav>
					<NavMenu>
						<NavLink to="/">
							Inicio
						</NavLink>
						<NavLink to="/bots">
							Bots
						</NavLink>
						<NavLink to="/dxes/page/0">
							Dxes
						</NavLink>
						<NavLink to="/post">
							Publicar
						</NavLink>
					</NavMenu>			
				</Nav>
			</div>		
		)
	}

}