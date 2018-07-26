import React from 'react';

class Reset extends React.Component {
  render(){
    return (
      <div className="viewfinder__button">
        <button className="viewfinder__button-reset" type="reset" name="button">
          <span className="viewfinder__button-icono">
            <i className="fas fa-trash-alt"></i>
          </span>Reset</button>
      </div>

    );
  }
}

export default Reset ;
