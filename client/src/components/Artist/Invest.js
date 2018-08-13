import React from "react";

const InvestBtn = () => (
  <div>
    <button
      type="button"
      class="btn btn-success"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Invest
    </button>

    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Invest in this Artist
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
            <form>
              <div className="form-group">
                <label for="formControlRange">Amount</label>
                <input
                  type="range"
                  className="form-control-range"
                  id="formControlRange"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-success">
              Invest
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InvestBtn;
