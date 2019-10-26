import React, {Component} from 'react';
import {Collapse} from 'react-bootstrap'

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.toggledropDown = this.toggledropDown.bind(this);
    this.state = {collapse: false, data: this.props.data};
  }

toggledropDown() {
  this.setState({open:!this.state.open})
}

render() {
  return (
    <div className="accordion">
      <div className="list-group">
        <div className="card">
          <button className="list-group-item list-group-item-action" onClick={this.toggledropDown } aria-controls="food" aria-expanded={this.state.open}>{this.state.data.name}</button>
          <Collapse in={this.state.open}>
            <div className="card-body" id="food">
              {this.state.data.description}
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  )
}
}
export default ListItem;
