import React from 'react';
import Skills from './Skills';



class Fill extends React.Component {

  generateSelectTags = () => {
    let selectTags = [];
    const signals = ["fas fa-plus","fas fa-minus","fas fa-minus"];

    for (var num = 0; num < this.props.skillsNumber; num++) {
      selectTags.push(<Skills
            skillsList={this.props.skillsList}
            handleSelectSkills={this.props.handleSelectSkills}
            handleNumberOfSelects={this.props.handleNumberOfSelects}
            skillsSelected={this.props.skillsSelected}
            PlusOrMinus={signals[num]}
            dataSelectNumber={num}
        />);
      }
              return selectTags;
    }

  render() {

    return (

      <section className="dropdown__second collapsible">
          <div className="border">
              <div className="dropdown__fill collapsible__label">
                  <div className="dropdown__fill--name">
                      <div className="">
                          <i className="far fa-keyboard dropdown__fill--nameIcon"></i>
                      </div>
                      <h2 className="dropdown__fill--nameText">{this.props.tituloRellena}</h2>
                  </div>

                  <span className="arrow">
                      <i className="fas fa-angle-up"></i>
                  </span>
              </div>

              <div className="fill_form--container collapsible__content">
                  <div id="fill__form--itemscontainer" className="fill__form--itemscontainer" action="index.html" method="post">
                      <div className="fill__form--labelinput">
                          <label className="fill__label--items" htmlFor="nombrecompleto">Nombre completo</label>
                          <input className="fill__input--items fill__input-name" type="text" id="nombrecompleto" name="name" placeholder="Ej: Sally Jill" data-info="element-name" onChange={this.props.changeName}    />
                      </div>

                      <div className="fill__form--labelinput">
                          <label className="fill__label--items" htmlFor="puesto">Puesto</label>
                          <input className="fill__input--items fill__input-job" type="text" id="puesto" name="job" placeholder="Ej: Front-end unicorn" data-info="element-job" onChange={this.props.changeJob}/>
                      </div>

                      <div className="fill__form--labelinput">
                          <label className="fill__label--items" htmlFor="imagenperfil">Imagen de perfil</label>
                          <div className="fill__input--buttonandminiimg">
                              <button type="button" className="fill__input--addimgbutton">Añadir imagen</button>
                              <input type="file" name="photo" id="img-selector" className="action__hiddenField fill__input-photo"/>
                              <div className="fill__input--miniimg">
                              </div>
                          </div>
                      </div>

                      <div className="fill__form--labelinput">
                          <label className="fill__label--items" htmlFor="email">Email</label>
                          <input className="fill__input--items fill__input-mail" type="email" id="email" name="email" placeholder="Ej: sally-jill@gmail.com" data-donde="element-mail"/>
                      </div>

                      <div className="fill__form--labelinput">
                          <label className="fill__label--items" htmlFor="tlf">Teléfono</label>
                          <input className="fill__input--items fill__input-phone" type="tel" id="tlf" name="phone" placeholder="Ej: 555 55 55 55" data-donde="element-phone"/>
                      </div>

                      <div className="fill__form--labelinput">
                          <label className="fill__label--items" htmlFor="linkedin">Linkedin</label>
                          <input className="fill__input--items fill__input-linkedin" type="text" id="linkedin" name="linkedin" placeholder="Ej: sally.jill"
                          data-donde="element-linkedin"/>
                      </div>

                      <div className="fill__form--labelinput">
                          <label className="fill__label--items" htmlFor="github">Github</label>
                          <input className="fill__input--items fill__input-github" type="text" id="github" name="github" placeholder="Ej: sallyjill" data-donde="element-github"/>
                      </div>

                      <div className="fill__form--abilitieslabelinput">
                          <label className="fill__label--items" for="habilidades">Habilidades (máximo 3)</label>

                          {  this.generateSelectTags() }

                      </div>

                  </div>
              </div>
          </div>
      </section>
    );
  }

}

export default Fill;
