import React from 'react'

class Skills extends React.Component {

handleSelect = event => {
  this.props.handleSelectSkills(event.currentTarget.value,event.currentTarget.getAttribute('data-selectnumber'));
}

addOrRemoveSelect = event => {
  this.props.handleNumberOfSelects(event.currentTarget.firstChild);
}

determinePlusOrMinus = () => {
let PlusOrMinus;

// this.props.skillsNumber === 1 ?
// PlusOrMinus = "fas fa-plus" :
// this.props.skillsNumber === 2 ?
// this.props.dataSelectNumber === 0 ?
// PlusOrMinus = "fas fa-minus" :
// this.props.dataSelectNumber === 1 ?
// PlusOrMinus = "fas fa-plus" :
// PlusOrMinus = "fas fa-minus"

if (this.props.skillsNumber === 1) {
    PlusOrMinus = "fas fa-plus"
} else if (this.props.skillsNumber === 2) {
            if (this.props.dataSelectNumber === 0) {
                PlusOrMinus = "fas fa-minus"
            } else if (this.props.dataSelectNumber === 1) {
                PlusOrMinus = "fas fa-plus"
            }
} else if (this.props.skillsNumber === 3) {
                PlusOrMinus = "fas fa-minus"
}

return PlusOrMinus
}


  render () {

    return (
      <div className="fill__ability fill__ability--js" key={this.props.dataSelectNumber}>
          <select className="abilitiesdropdown abilitiesdropdown--js" name="abilities" id="habilidades" onChange={this.handleSelect} data-selectnumber={this.props.dataSelectNumber} value={this.props.skillsSelected[this.props.dataSelectNumber]}>
          <option hidden>Seleccionar habilidad</option>
                {this.props.skillsList
                  // .filter(item=> item !== this.props.skillsSelected[0])
                  // .filter(item=> item !== this.props.skillsSelected[1])
                  .map(function(item,index) {
                    return (
                      <option value={item} className="options--skils" key={index}>{item}</option>
                    );
                })}
          </select>

          <button className="abilitiesbutton abilitiesbutton--plusjs" type="button" name="button" onClick={this.addOrRemoveSelect} data-buttonnumber={this.props.dataSelectNumber}>
                <i className={this.determinePlusOrMinus()}></i>
          </button>
      </div>
    );
  }
}

export default Skills;
