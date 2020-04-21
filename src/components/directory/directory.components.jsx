import React, { Component } from 'react';
import SECTIONS_DATA from '../../sections.data.js';
import MenuItem from '../menu-item/menu-item.components';
import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA
    }
  }

  render() {
    return (
      <div className='directory-menu' >
        {
          this.state.sections.map( ({id, ...sectionProps}) => (
          <MenuItem key={id} {...sectionProps}/>
          )) 
        }
      </div>
    )
  }
}

export default Directory;