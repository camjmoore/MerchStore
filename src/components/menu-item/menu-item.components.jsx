import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = (props) => {

  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div className={`${props.size} menu-item`} onClick={() => history.push(`${match.url}${props.linkUrl}`)} >
      <div className='background-image' style={{backgroundImage:`url(${props.imageUrl})`}}/>
      <div className='content'>
        <h1 className='title'>{(props.title).toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}



export default MenuItem;

