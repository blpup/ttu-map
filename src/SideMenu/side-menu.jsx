import React, {Component} from 'react';
import styles from './side-menu-styling.css.js';
import ListItem from './submenu';
class SideMenu extends Component {
  constructor(props){
    super(props);
    this.state = {open:false};
  }
  render() {

    return(
      <div id="search-container" style={styles.searchContainerStyles}>
        <input type="search" style={styles.searchBoxStyles}/>
        <img src="https://via.placeholder.com/408" style={styles.imageStyles} alt="placeholder"/>
        <div style={styles.descriptionStyles}>
          <h1>H.U.B</h1>
          <p>This place is cool</p>
          <hr/>
          {
            this.props.data[0].categories.map((key, index) => <ListItem key={index} data={this.props.data[0].categories[index]}/>)
          }
        </div>
      </div>
    )
  }
}

export default SideMenu;
