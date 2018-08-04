import React from 'react';
import Form from './Form';
import Visor from './Visor';

class Main extends React.Component {
	render() {

		return (
			<main className="main__2">

					<Form
								changeName={this.props.changeName}
								name={this.props.name}
								changeJob={this.props.changeJob}
								job={this.props.job}
								palette={this.props.palette}
								changePalette={this.props.changePalette}
								tipography={this.props.tipography}
								changeTipography={this.props.changeTipography}
								tituloRellena={this.props.tituloRellena}
								titleD = {this.props.titleD}
								fontTypes={this.props.fontTypes}
								skillsList={this.props.skillsList}
		            skillsNumber={this.props.skillsNumber}
            		handleSelectSkills={this.props.handleSelectSkills}
								handleNumberOfSelects={this.props.handleNumberOfSelects}
								skillsSelected={this.props.skillsSelected}
					/>
				 <Visor
								name={this.props.name}
							 	job={this.props.job}
							 	palette={this.props.palette}
							 	tipography={this.props.tipography}
							 	skillsSelected={this.props.skillsSelected}
				 />

			</main>
			);
	}
}

export default Main;
