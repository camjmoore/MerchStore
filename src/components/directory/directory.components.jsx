import React, { Component } from 'react';
import './directory.styles.scss';
import { sections } from '../../original';
import MenuItem from '../menu-item/menu-item.components';

class Directory extends Component {
  constructor() {
    super();

    this.state = {sections}
  }

  render() {
    return (
      <div className='directory-menu' >
        {
          this.state.sections.map( ({title, imageUrl, id, size}) => (
          <MenuItem  title={title} image={imageUrl} key={id} size={size}/>
          )) 
        }
      </div>
    )
  }
}

export default Directory;