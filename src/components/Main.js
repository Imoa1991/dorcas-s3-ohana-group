import React from 'react';
import Form from './Form';
import Visor from './Visor';

class App extends React.Component {
	render() {

		return (
			<main className="main__2">
					<Form titledesingdos = {this.props.titledesinguno}  />
          <Visor />
			</main>
			);
	}
}

export default App;
