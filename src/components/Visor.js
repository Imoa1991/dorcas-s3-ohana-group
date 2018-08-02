import React from 'react';
import Card from './Card';

class Visor extends React.Component {
  render(){
    return (
      <Card name={this.props.name} job={this.props.job} />
    );
  }
}

export default Visor ;
