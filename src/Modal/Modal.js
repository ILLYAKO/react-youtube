import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button>Open modal</button>
        <div className="modal">
          <div className="modal-body">
            <h1> Modal Title</h1>
            <p>I am amodal !</p>
            <button>Close Modal</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
