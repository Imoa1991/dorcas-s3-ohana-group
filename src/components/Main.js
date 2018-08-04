import React from 'react';
import Form from './Form';
import Visor from './Visor';

class Main extends React.Component {
	render() {

		return (
			<main className="main__2">
					<Form changeName={this.props.changeName}  name={this.props.name} changeJob={this.props.changeJob} job={this.props.job} tituloRellena={this.props.tituloRellena} titleD = {this.props.titleD} fontTypes={this.props.fontTypes} skills={this.props.skills} palette={this.props.palette} changePalette={this.props.changePalette} tipography={this.props.tipography} changeTipography={this.props.changeTipography} fileImageRef={this.props.fileImageRef}  handleImage={this.props.handleImage} imageUrl={this.props.imageUrl} />
				 <Visor name={this.props.name} job={this.props.job} palette={this.props.palette} tipography={this.props.tipography} imageUrl={this.props.imageUrl}/>
			</main>
			);
	}
}

export default Main;
