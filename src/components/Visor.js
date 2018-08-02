import React from 'react';
import Card from './Card';

class Visor extends React.Component {
  render(){
    return (
      <Card name={this.props.name} />
    );
  }
}

export default Visor ;
