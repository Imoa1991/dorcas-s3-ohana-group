import React from 'react';
import Card from './Card';

class Visor extends React.Component {
constructor(props){
  super(props)
  this.colorVisor=this.colorVisor.bind(this);
}
colorVisor(){
  let color = 'viewfinder--grey';
  if (this.props.palette == 1) {
    color = 'viewfinder--blue';
  }else if (this.props.palette == 2){
    color = 'viewfinder--red';
  }
  return color;
}
  render(){
    return (
      <Card name={this.props.name} job={this.props.job} palette={this.props.palette} sectionClass={this.colorVisor()}/>
    );
  }
}

export default Visor ;
