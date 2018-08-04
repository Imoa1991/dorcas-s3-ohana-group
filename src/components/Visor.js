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
tipographyVisor(){
  let style = 'montserrat';
  if (this.props.tipography == 1) {
    style = 'ubuntu';
  }else if (this.props.tipography == 2){
    style = 'comic';
  }
  return style;
}
  render(){
    return (
      <Card
            name={this.props.name}
            job={this.props.job}
            tipography={this.props.tipography}
            styleClass={this.tipographyVisor()}
            palette={this.props.palette}
            colorClass={this.colorVisor()}
            skillsSelected={this.props.skillsSelected}
      />
    );
  }
}

export default Visor ;
