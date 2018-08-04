import React from 'react';
import Card from './Card';

class Visor extends React.Component {
  render(){
    return (
      <Card skillsSelected={this.props.skillsSelected} />
    );
  }
}

export default Visor ;
