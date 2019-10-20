import React, {Component} from 'react';
import styles from './side-menu-styling.css.js';


class SideMenu extends Component {
  constructor(props){
    super(props);
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
          <ul>
            <li>Food
              <ul>
                <li>Menchies</li>
                <li>Burger King</li>
                <li>Mc Donlads</li>
              </ul>
            </li>
            <li>Charge Stations</li>
            <li>Printers</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SideMenu;
