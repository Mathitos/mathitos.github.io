import React from 'react'

import firstPhoto from 'assets/images/first-photo.jpg'

import './resume.sass'

const info = {
  name: 'Matheus',
  photo: firstPhoto,
  title: "I'm ",
  subtitle: 'a software developer',
}

const Resume = () => (
  <div className="resume">
    <Intro
      name={info.name}
      title={info.title}
      subtitle={info.subtitle}
      photoUrl={info.photo}
    />
    <Projects />
  </div>
)

const Intro = ({ name, title, subtitle, photoUrl }) => (
  <div className="resume__hello-card">
    <div className="resume__hello-card__text">
      <div className="resume__hello-card__text__container">
        <span className="resume__hello-card__text--hello">Hello</span>
        <span className="resume__hello-card__text--title">
          {title}
          <span className="resume__hello-card__text--name">{name}</span>
        </span>
        <span className="resume__hello-card__text--subtitle">{subtitle}</span>
      </div>
    </div>
    <div className="resume__hello-card__image__container">
      <img className={'resume__hello-card__image__content'} src={photoUrl} />
    </div>
  </div>
)

const Projects = () => <div className="resume__projects" />

export default Resume
