import React, { Component } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

class InvestBtn extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 0
    };
  }

  handleChangeStart = () => {
    console.log("Change event started");
  };

  handleChange = value => {
    this.setState({
      value: value
    });
    console.log(value)
    value = this.state.value;
  };

  handleChangeComplete = () => {
    console.log("Change event completed");
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <button
          type="button"
          class="btn btn-success"
          data-toggle="modal"
          data-target={"#" + this.props.artist}
        >
          Invest in {this.props.artist}
        </button>

        <div
          className="modal fade"
          id={this.props.artist}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Invest in {this.props.artist}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="slider">
                  <Slider
                    min={0}
                    max={100}
                    value={value}
                    onChangeStart={this.handleChangeStart}
                    onChange={this.handleChange}
                    onChangeComplete={this.handleChangeComplete}
                  />
                  <div className="value">{value}</div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button onClick={() => this.props.grabNumberValue(value)} type="button" data-dismiss="modal" className="btn btn-success">
                  Invest
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InvestBtn;
