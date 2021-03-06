import React from 'react'
import Link from 'gatsby-link'

import headerImg from 'static/images/header.jpg'
import logoType from 'static/images/logotype-white.svg'
import './header.scss'

export default () =>
  <div className="header">
    <Link to="/">
      <img src={headerImg}
        className="header__image"
        alt="Lo Life Coach: Rediscover you"
      />
    </Link>
  </div>


export const SmallHeader = () =>
  <div className="header--small">
    <Link to="/">
      <img className="header__logo" src={logoType} alt="Lo Life Coach" />
    </Link>
  </div>

export const ImageHeader = ({ title = '', header = null }) =>
  header ?
    <img className="layout-container__header-img" src={header} alt={title} />
    : null

