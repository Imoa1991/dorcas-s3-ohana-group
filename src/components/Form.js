import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
	render() {

		return (
			<form className="main__form" action="javascript:void(0);">
			<Design
						palette={this.props.palette}
						changePalette={this.props.changePalette}
						tipography={this.props.tipography}
						changeTipography={this.props.changeTipography}
			/>
			<Fill
						changeName={this.props.changeName}
						name={this.props.name}
						changeJob={this.props.changeJob}
						job={this.props.job}
						skillsList={this.props.skillsList}
            skillsNumber={this.props.skillsNumber}
            handleSelectSkills={this.props.handleSelectSkills}
						handleNumberOfSelects={this.props.handleNumberOfSelects}
						skillsSelected={this.props.skillsSelected}
			/>
			<Share />
			</form>
		);
	}
}

export default Form;
