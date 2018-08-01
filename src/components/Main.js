import React from 'react';
import Form from './Form';
import Visor from './Visor';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visor: {
				name: "Nombre Apellidos",
				job: "Front end dev"
			}
		}
		this.lol = this.lol.bind(this);
	}

	lol() {
		this.setState(
			{ visor: {
						name: "LOOOL"
				}
		})
	}

	render() {

		return (
			<main className="main__2">

					<Form funcionCambiarNombre={this.lol} tituloRellena={this.props.tituloRellena} titleD = {this.props.titleD} fontTypes={this.props.fontTypes} skills={this.props.skills}/>
				 <Visor name={this.state.visor.name} job={this.state.visor.job}/>

			</main>
			);
	}
}

export default Main;
