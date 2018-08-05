import React from 'react';
import Form from './Form';
import Visor from './Visor';

class Main extends React.Component {
	render() {

		return (
			<main className="main__2">
					<Form changeName={this.props.changeName}  name={this.props.name} changeJob={this.props.changeJob} job={this.props.job} tituloRellena={this.props.tituloRellena} titleD = {this.props.titleD} fontTypes={this.props.fontTypes} skills={this.props.skills} palette={this.props.palette} changePalette={this.props.changePalette} tipography={this.props.tipography} changeTipography={this.props.changeTipography} email={this.props.email} changeEmail={this.props.changeEmail} phone={this.props.phone} changePhone={this.props.changePhone} linkedin={this.props.linkedin} changeLinkedin={this.props.changeLinkedin} github={this.props.github} changeGithub={this.props.changeGithub}/>
				 <Visor name={this.props.name} job={this.props.job} palette={this.props.palette} tipography={this.props.tipography} email={this.props.email} phone={this.props.phone} linkedin={this.props.linkedin} github={this.props.github}/>
			</main>
			);
	}
}

export default Main;
