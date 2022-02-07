import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import "../../style.css";

const modalRoot = document.querySelector("#modal");

class Modal extends React.Component {
    static propTypes = {
      image: PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      }),
      closeModal: PropTypes.func.isRequired, 
    }
    

    componentDidMount() {
        window.addEventListener("keydown", this.onKeyPress);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.onKeyPress);
    }

    onKeyPress = event => {
        if(event.code === "Escape"){
          this.props.closeModal();
        }
    }

    onBackdropClick = event => {
        if(event.target === event.currentTarget) {
          this.props.closeModal();
        }
    }

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.onBackdropClick}>
        <div className="Modal">
          <img src={this.props.image.largeImageURL} alt={this.props.image.id} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
