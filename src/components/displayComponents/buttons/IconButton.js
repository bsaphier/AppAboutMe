import React from 'react';

import Icon from '../Icon';


const IconButton = ({ icon, style, url = null, name = '', target = '_blank' }) => (
  <a
    className="icon-button"
    href={url}
    title={name}
    target={target}
    rel="noopener noreferrer"
    >
    <Icon icon={icon} style={style} />
  </a>
);

export default IconButton;
