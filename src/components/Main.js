import React from 'react';
import Form from './Form';
import Visor from './Visor';

class App extends React.Component {
	render() {
		return (
			<main className="main__2">
					<Form />
          <Visor />
				{/* <section className="card">{this.props.cariDos}</section> */}
			</main>
			);
	}
}

export default App;
