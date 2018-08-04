import React from 'react';
import Form from './Form';
import Visor from './Visor';

class Main extends React.Component {
	render() {

		return (
			<main className="main__2">

					<Form
								tituloRellena={this.props.tituloRellena}
								titleD = {this.props.titleD}
								fontTypes={this.props.fontTypes}
								skillsList={this.props.skillsList}
		            skillsNumber={this.props.skillsNumber}
            		handleSelectSkills={this.props.handleSelectSkills}
								handleNumberOfSelects={this.props.handleNumberOfSelects}
					/>
				 <Visor skillsSelected={this.props.skillsSelected} />

			</main>
			);
	}
}

export default Main;
