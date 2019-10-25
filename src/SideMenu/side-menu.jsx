import React, {Component, useState} from 'react';
import styles from './side-menu-styling.css.js';
import {Collapse} from 'react-bootstrap'

class SideMenu extends Component {
  constructor(props){
    super(props);
    this.state = {open:false};
    console.log(this.props)
    this.toggledropDown = this.toggledropDown.bind(this);

    this.items = this.props.data[0].categories.map((item, key) =>
      <div className="card" key={key}>
        <a href="#" className="list-group-item list-group-item-action" onClick={this.toggledropDown } aria-controls="food" aria-expanded={this.state.open}>Food</a>
        <Collapse in={this.state.open}>
          <div className="card-body" id="food">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </Collapse>
      </div>
    );
  }
  toggledropDown() {
    this.setState({open:!this.state.open})
  }
  render() {

    return(
      <div id="search-container" style={styles.searchContainerStyles}>
        <input type="search" style={styles.searchBoxStyles}/>
        <img src="https://via.placeholder.com/408" style={styles.imageStyles}/>
        <div style={styles.descriptionStyles}>
          <h1>H.U.B</h1>
          <p>This place is cool</p>
          <hr/>
          <div className="accordion">
            <ul className="list-group">
            {this.items}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SideMenu;

//// TODO: FIX THE CARDS FROM BEING CLICKED AND ALL DROPING DOWN. PROBABLY NEED SEPERATE STATES.
