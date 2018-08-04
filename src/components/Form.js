import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
	render() {

		return (
			<form  className="main__form" action="javascript:void(0);">
				<Design titleD = {this.props.titleD} fontTypes={this.props.fontTypes} palette={this.props.palette} changePalette={this.props.changePalette} tipography={this.props.tipography} changeTipography={this.props.changeTipography}/>
				<Fill changeName={this.props.changeName} name={this.props.name} changeJob={this.props.changeJob} job={this.props.job} tituloRellena={this.props.tituloRellena} skills={this.props.skills}/>
				<Share />
			</form>
		);
	}
}

export default Form;
