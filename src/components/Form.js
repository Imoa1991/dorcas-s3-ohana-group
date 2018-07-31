import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
	render() {

		return (
			<form className="main__form" action="javascript:void(0);">
			<Design titleD = {this.props.titleD} fontTypes={this.props.fontTypes}/>
			<Fill tituloRellena={this.props.tituloRellena} />
			<Share />
			</form>
		);
	}
}

export default Form;
