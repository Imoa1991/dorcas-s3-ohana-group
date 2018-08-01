import React from 'react'

class Skills extends React.Component {

  render () {

    return (
      <div className="fill__ability fill__ability--js">
          <select className="abilitiesdropdown abilitiesdropdown--js" name="abilities" id="habilidades">
                {this.props.skills.map(function(item) {
                  return (
                    <option value={item} className="options--skils">{item}</option>
                  );
                })}
          </select>

          <button className="abilitiesbutton abilitiesbutton--plusjs" type="button" name="button">
                <i className="fas fa-plus"></i>
          </button>
      </div>
    );
  }

}

export default Skills;
