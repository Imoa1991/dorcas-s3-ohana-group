import React from 'react';

class App extends React.Component {
	render() {
		return (
      <form className="main__form" action="javascript:void(0);">
      <section className="dropdown__first collapsible collapsible--visible">
        <div className="border">
          <div className="dropdown__desing collapsible__label">
            <div className="dropdown__desing--name">
              <div className="">
                <i className="far fa-object-ungroup dropdown__desing--nameIcon"></i>
              </div>
              <h2 className="dropdown__desing--nameText">Diseña</h2>
            </div>
            <span className="arrow">
              <i className="fas fa-angle-up"></i>
            </span>
          </div>
          <div className="collapsible__content">
            <div className="dropdown__colors">
              <div className="dropdown__title">
                <h3>Colores</h3>
              </div>
              <div className="">
                <div className="dropdown__colors--selectors" action="index.html" method="post">
                  <div className="dropdown__colorsgroups radiosGroup">
                    <label className="colors-container" for="blue">
                      <div className="colors__darkCyan colors"></div>
                      <div className="colors__dirtyblue colors"></div>
                      <div className="colors__hospitalGreen colors"></div>
                    </label>
                    <input className="radio radio--blue" id="blue" type="radio" name="palette" value="1" checked/>
                  </div>
                  <div className="dropdown__colorsgroups radiosGroup">
                    <label className="colors-container" for="red">
                      <div className="colors__darkRed colors"></div>
                      <div className="colors__strongRed colors"></div>
                      <div className="colors__brightRed colors"></div>
                    </label>
                    <input className="radio radio--red" id="red" type="radio" name="palette" value="2"/>
                  </div>
                  <div className="dropdown__colorsgroups radiosGroup">
                    <label className="colors-container" for="grey">
                      <div className="colors__darkBlue colors"></div>
                      <div className="colors__lightBlue colors"></div>
                      <div className="colors__brightBlue colors"></div>
                    </label>
                    <input className="radio radio--grey" id="grey" type="radio" name="palette" value="3"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown__fonts">
              <div className="dropdown__title">
                <h3>Fuentes</h3>
              </div>
              <div className="">
                <div className="dropdown__fonts--selectors" action="index.html" method="post">
                  <div className="dropdown__fontsgroups radiosGroup">
                    <label className="fonts ubuntu" for="ubuntu">Ubuntu
                    </label>
                    <input className="radio radio--ubuntu" id="ubuntu" type="radio" name="typography" value="1"/>
                  </div>
                  <div className="dropdown__fontsgroups radiosGroup">
                    <label className="fonts comic" for="comic">Comic Sans
                    </label>
                    <input className="radio radio--comic" id="comic" type="radio" name="typography" value="2" checked/>
                  </div>
                  <div className="dropdown__fontsgroups radiosGroup">
                    <label className="fonts montserrat" for="monstserrat">Montserrat
                    </label>
                    <input className="radio radio--montserrat" id="montserrat" type="radio" name="typography" value="3"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
      <section className="dropdown__second collapsible">
      <div className="border">
        <div className="dropdown__fill collapsible__label">
          <div className="dropdown__fill--name">
            <div className="">
              <i className="far fa-keyboard dropdown__fill--nameIcon"></i>
            </div>

            <h2 className="dropdown__fill--nameText">Rellena</h2>
          </div>
          <span className="arrow">
            <i className="fas fa-angle-up"></i>
          </span>
        </div>
        <div className="fill_form--container collapsible__content">
          <div id="fill__form--itemscontainer" className="fill__form--itemscontainer" action="index.html" method="post">
            <div className="fill__form--labelinput">
              <label className="fill__label--items" for="nombrecompleto">Nombre completo</label>
              <input className="fill__input--items fill__input-name" type="text" id="nombrecompleto" name="name" placeholder="Ej: Sally Jill"
                data-info="element-name"/>
            </div>
            <div className="fill__form--labelinput">
              <label className="fill__label--items" for="puesto">Puesto</label>
              <input className="fill__input--items fill__input-job" type="text" id="puesto" name="job" placeholder="Ej: Front-end unicorn"
                data-info="element-job"/>
            </div>
            <div className="fill__form--labelinput">
              <label className="fill__label--items" for="imagenperfil">Imagen de perfil</label>
              <div className="fill__input--buttonandminiimg">
                <button type="button" className="fill__input--addimgbutton">Añadir imagen</button>
                <input type="file" name="photo" id="img-selector" className="action__hiddenField fill__input-photo"/>
                <div className="fill__input--miniimg"></div>
              </div>
            </div>
            <div className="fill__form--labelinput">
              <label className="fill__label--items" for="email">Email</label>
              <input className="fill__input--items fill__input-mail" type="email" id="email" name="email" placeholder="Ej: sally-jill@gmail.com"
                data-donde="element-mail"/>
            </div>
            <div className="fill__form--labelinput">
              <label className="fill__label--items" for="tlf">Teléfono</label>
              <input className="fill__input--items fill__input-phone" type="tel" id="tlf" name="phone" placeholder="Ej: 555 55 55 55" data-donde="element-phone"/>
            </div>
            <div className="fill__form--labelinput">
              <label className="fill__label--items" for="linkedin">Linkedin</label>
              <input className="fill__input--items fill__input-linkedin" type="text" id="linkedin" name="linkedin" placeholder="Ej: sally.jill"
                data-donde="element-linkedin"/>
            </div>
            <div className="fill__form--labelinput">
              <label className="fill__label--items" for="github">Github</label>
              <input className="fill__input--items fill__input-github" type="text" id="github" name="github" placeholder="Ej: sallyjill" data-donde="element-github"/>
            </div>

            <div className="fill__form--abilitieslabelinput">
              <label className="fill__label--items" for="habilidades">Habilidades (máximo 3)</label>
              <div className="fill__ability fill__ability--js">
                <select className="abilitiesdropdown abilitiesdropdown--js" name="abilities" id="habilidades"></select>
                <button className="abilitiesbutton abilitiesbutton--plusjs" type="button" name="button">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="fill__ability fill__ability--js fill__ability--jshidden">
                <select className="abilitiesdropdown abilitiesdropdown--js" name="abilities" id="habilidades"></select>
                <button className="abilitiesbutton abilitiesbutton--minusjs" type="button" name="button">
                  <i className="fas fa-minus"></i>
                </button>
              </div>
              <div className="fill__ability fill__ability--js fill__ability--jshidden">
                <select className="abilitiesdropdown abilitiesdropdown--js" name="abilities" id="habilidades"></select>
                <button className="abilitiesbutton abilitiesbutton--minusjs" type="button" name="button">
                  <i className="fas fa-minus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className="dropdown__third collapsible">
      <div className="border">
        <div className="dropdown__fill collapsible__label">
          <div className="dropdown__fill--name">
            <div className="">
              <i className="fas fa-share-alt dropdown__fill--nameIcon"></i>
            </div>
            <h2 className="dropdown__fill--nameText ">Comparte</h2>
          </div>
          <span className="arrow">
            <i className="fas fa-angle-up"></i>
          </span>
        </div>
        <div className="shares__input--buttonandminiimg">
          <button className="shares__input--addimgbutton collapsible__content">
            <i className="far fa-address-card"></i>Crear tarjeta</button>
        </div>
        <div className="loader collapsible__content hidden">Loading...</div>
        <section className="shares collapsible__content hidden">
          <div className="bookmark"></div>
          <p className="shares__text">La tarjeta ha sido creada:</p>
          <a className="shares__url" href="#" target="_blank">"https://awesome-profile-card.com?id=A456DF0001"</a>
          <a className="shares__twitter" type="button" name="button" target="_blank">
            <i className="fab fa-twitter shares__twitter-logo"></i>
            <p className="shares__twitter-text">Compartir en Twitter</p>
          </a>
          <div className="bookmark"></div>
        </section>
      </div>
      </section>
      </form>
			);
	}
}

export default App;
