import React from 'react'
import 'styles/article.scss'
import {SmallHeader} from 'components/header'
import GetInTouch from 'components/get-in-touch'
import Footer from 'components/footer'

const Article = ({ title, html, header}) =>
  <div className="article">
    <div className="article__container">
      <SmallHeader />
      { header ?
        <img className="article__header-img" src={header} alt={title} />
        : null }
      <h2 className="article__title">
        {title}
      </h2>
      <div className="article__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <GetInTouch />
      <Footer />
    </div>
  </div>

export default Article

