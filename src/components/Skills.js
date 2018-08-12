import React from 'react'

class Skills extends React.Component {

handleSelect = event => {
  this.props.handleSelectSkills(event.currentTarget.value,event.currentTarget.getAttribute('data-selectnumber'));
}

addOrRemoveSelect = event => {
  this.props.handleNumberOfSelects(event.currentTarget.firstChild);
}

  render () {

    return (
      <div className="fill__ability fill__ability--js">
          <select className="abilitiesdropdown abilitiesdropdown--js" name="abilities" id="habilidades" onChange={this.handleSelect} data-selectnumber={this.props.dataSelectNumber} value={this.props.skillsSelected[this.props.dataSelectNumber]}>
          <option hidden>Seleccionar habilidad</option>
                {this.props.skillsList.map(function(item,index) {
                  return (
                    <option value={item} className="options--skils" key={index}>{item}</option>
                  );
                })}
          </select>

          <button className="abilitiesbutton abilitiesbutton--plusjs" type="button" name="button" onClick={this.addOrRemoveSelect} data-buttonnumber={this.props.dataSelectNumber}>
                <i className={this.props.PlusOrMinus}></i>
          </button>
      </div>
    );
  }
}

export default Skills;
