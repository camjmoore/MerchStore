import React, { Component } from 'react';
import { sections } from '../../original';
import MenuItem from '../menu-item/menu-item.components';
import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {sections}
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