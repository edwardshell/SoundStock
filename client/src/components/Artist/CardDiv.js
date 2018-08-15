import React from "react";
import Progress from "./Progress";
import Music from "./Music";
import Image from "./Image";
import InvestBtn from "./Invest";

const styles = {
  padding: {
    paddingTop: 40,
    marginLeft: 10
  },
  card: {
    marginTop: 50
  },

  invest: {
    paddingLeft: 140,
    paddingTop: 30
  }
};

export class CardDiv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };
  }

  grabNumberValue = number => {
    this.setState({
      number: number
    });
  };

  render() {
    return (
      <div className="card" style={styles.card}>
        <h5 className="card-header">Featured: {this.props.name}</h5>
        <div className="card-body">
          <div className="row">
            <div className="col-md-2">
              <Image img={this.props.img} alt={this.props.alt}/>
            </div>
            <div className="col-md-6">
              {/* added child to this so that we can assaign the this.props.summary that we get from db */}
              <p>{this.props.bio}</p>
            </div>
            <div className="col-md-4">
              <h6> Click below to play: </h6>
              <Music src={this.props.src} />
              <div className="row">
                <div className="col-md-10" style={styles.padding}>
                  <Progress number={this.state.number} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4" style={styles.invest}>
                  <InvestBtn artist={this.props.name} grabNumberValue={this.grabNumberValue} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
