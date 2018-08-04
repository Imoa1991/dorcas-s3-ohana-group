import React from 'react'

class Skills extends React.Component {

handleSelect = event => {
  this.props.handleSelectSkills(event.currentTarget.value);
}

addOrRemoveSelect = event => {
  this.props.handleNumberOfSelects(event.currentTarget.firstChild);
}

  render () {

    return (
      <div className="fill__ability fill__ability--js">
          <select className="abilitiesdropdown abilitiesdropdown--js" name="abilities" id="habilidades" onChange={this.handleSelect}>
                {this.props.skillsList.map(function(item) {
                  return (
                    <option value={item} className="options--skils">{item}</option>
                  );
                })}
          </select>

          <button className="abilitiesbutton abilitiesbutton--plusjs" type="button" name="button" onClick={this.addOrRemoveSelect}>
                <i className={this.props.PlusOrMinus}></i>
          </button>
      </div>
    );
  }
}

export default Skills;
