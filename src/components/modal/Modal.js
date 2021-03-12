import React, { Component } from "react";
import s from "./modal.module.css";

export default class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  onBackdropClose = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImg } = this.props;
    return (
      <div className={s.Overlay} onClick={this.onBackdropClose}>
        <div className={s.Modal}>
          <img src={largeImg} alt="largeImg" />
        </div>
      </div>
    );
  }
}
