import React from 'react';
import Form from './Form';
import Visor from './Visor';

class Main extends React.Component {
	render() {

		return (
			<main className="main__2">

					<Form changeName={this.props.changeName} name={this.props.name} tituloRellena={this.props.tituloRellena} titleD = {this.props.titleD} fontTypes={this.props.fontTypes} skills={this.props.skills}/>
				 <Visor name={this.props.name}/>

			</main>
			);
	}
}

export default Main;
