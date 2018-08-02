import React from 'react';
import Form from './Form';
import Visor from './Visor';

class Main extends React.Component {
	render() {

		return (
			<main className="main__2">

					<Form changeJob={this.props.changeJob} job={this.props.job} tituloRellena={this.props.tituloRellena} titleD = {this.props.titleD} fontTypes={this.props.fontTypes} skills={this.props.skills}/>
				 <Visor job={this.props.job} />

			</main>
			);
	}
}

export default Main;
