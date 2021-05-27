import React from 'react';
import './bots/bots.css';
import Zoom from 'react-reveal/Fade';
export default class Bots extends React.Component {
	render() {
		return(
			<div>
			<h1 className="title-docs">Docs Bambi<br/>HαƈƙҽɾSϙυαԃ Bot</h1>			
				<div className="container-docs">
					<a href="https://discord.com/oauth2/authorize?client_id=778146971663335434&scope=bot&permissions=2146958847" target="__blank">Invite del cliente</a>
					<h2 className="subtitle-docs">Comandos públicos | prefix: <code>;</code></h2>	
					<ul className="ul-docs">
						<Zoom left>
							<li className="command">
								<strong>
									<code>;ping</code>
								</strong>
								- Muestra la latencia de Bambi
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;check</code>
								</strong>
								- Chequea si Bambi posee permisos de administrador
								<ul>
									<li>
										<br/>
										<strong>Info: </strong> 
										<code>Este comando puede incluir una id como argumento para funcionar</code>
									</li>
								</ul>
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;clear</code>
								</strong>
								- Borra todos los canales
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;adm</code>
								</strong>
								- Crea y te da un rol con permisos de administrador
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;dame</code>
								</strong>
								Te da un rol con administrador después del raid (cuando ya estén hechos los 250 roles)
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;serverinfo</code>
								</strong>
								- Da información de un servidor
								<ul>
									<li>
										<br/>
										<strong>Info: </strong> 
										<code>Este comando puede incluir una id como argumento para funcionar</code>
									</li>
								</ul>
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;bot</code>
								</strong>
								- Crea invitación de un bot por id
								<ul>
									<li>
										<br/>
										<strong>Info: </strong> 
										<code>Este comando puede incluir una id como argumento para funcionar</code> <br/><br/>
										<code>Si no se incluye ningún argumento, la invite de Bambi es retornada</code>
									</li>
								</ul>
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;banall</code>
								</strong>
								- Banea a todos los usuarios baneables
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;delroles</code>
								</strong>
								- Elimina todos los roles eliminables
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;auto</code>
								</strong>
								- Raid automático
							</li>
						</Zoom>
						<hr/>
					</ul>
					<h2 className="subtitle-docs">Comandos privados | prefix: <code>;</code></h2>
					<ul>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;unban</code>
								</strong>
								- Unbanea de un servidor
								<ul>
									<li>
										<br/>
										<strong>Info: </strong> 
										<code>Este comando debe incluir una id como argumento para funcionar</code>
									</li>
								</ul>
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;unbanguild</code>
								</strong>
								- Unbanea a todos los miembros que estén en el servidor en el que se ejecute el comando
								<ul>
									<li>
										<br/>
										<strong>Info: </strong> 
										<code>Este comando debe incluir una id como argumento para funcionar</code>
									</li>
								</ul>
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;unbanall</code>
								</strong>
								- Unbanea a todos los miembros de HackerSquad de un servidor
								<ul>
									<li>
										<br/>
										<strong>Info: </strong> 
										<code>Este comando debe incluir una id como argumento para funcionar</code>
									</li>
								</ul>
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;leave</code>
								</strong>
								- Abandona un servidor
								<ul>
									<li>
										<br/>
										<strong>Info: </strong> 
										<code>Este comando debe incluir una id como argumento para funcionar</code>
									</li>
								</ul>
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;svs</code>
								</strong>
								- Muestra todos los servidores en los que está presente Bambi
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;invite</code>
								</strong>
								- Crea y envía la invitación de un servidor
								<ul>
									<li>
										<br/>
										<strong>Info: </strong> 
										<code>Este comando debe incluir una id como argumento para funcionar</code>
									</li>
								</ul>
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;channel</code>
								</strong>
								- Crea un canal dentro de un servidor
								<ul>
									<li>
										<br/>
										<strong>Info: </strong> 
										<code>Este comando debe incluir una id como argumento para funcionar</code>
									</li>
								</ul>
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;spect</code>
								</strong>
								- Activa el modo espectador dentro de un servidor
								<ul>
									<li>
										<br/>
										<strong>Info: </strong> 
										<code>Este comando debe incluir una id como argumento para funcionar</code> <br/><br/>
										<strong>Uso: </strong>
										<code>;spect [guild a spectear] [channel en el que se specteará]</code>
									</li>
								</ul>
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;spectoff</code>
								</strong>
								- Desactiva el modo espectador dentro de un servidor
								<ul>
									<li>
										<br/>
										<strong>Info: </strong> 
										<code>Este comando debe incluir una id como argumento para funcionar</code>
									</li>
								</ul>
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;idauto</code>
								</strong>
								- Raid automático por id
								<ul>
									<li>
										<br/>
										<strong>Info: </strong> 
										<code>Este comando debe incluir una id como argumento para funcionar</code>
									</li>
								</ul>
							</li>
						</Zoom>
						<hr/>
						<Zoom left>
							<li className="command">
								<strong>
									<code>;customauto</code>
								</strong>
								- Raid customizado
								<ul>
									<li>
										<br/>
										<strong>Uso: </strong> 
										<code>;customauto [nombre de los canales] [mensaje a spamear]</code>
									</li>
								</ul>
							</li>
						</Zoom>
						<hr/>
					</ul>
				</div>
			</div>
		)
	}
}