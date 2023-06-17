import React from 'react';
import json from '../../JSON/header.json';
import style from './Header.module.scss';

const Header = () => {
    console.log('json-->', json);
  return (
    <div className={style.container}>
        <h1>{json.title}</h1>
        <p>{json.desc}</p>
    </div>
  )
}

export default Header