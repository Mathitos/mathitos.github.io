import React, { Component } from 'react'

import './resume.sass'

const info = {
  name: "Matheus",
  photoUrl: "https://scontent.fpoa8-2.fna.fbcdn.net/v/t1.0-9/12118807_1074228175920846_4068317976029860023_n.jpg?_nc_cat=104&_nc_ht=scontent.fpoa8-2.fna&oh=10aa376b12a7262c1b482ba1f5c4d6f1&oe=5D24ADC4",
  title: "I'm ",
  subtitle: "a software developer",
}

const Resume = () => (
  <div className="resume">
    <Intro
      name={info.name}
      title={info.title}
      subtitle={info.subtitle}
      photoUrl={info.photoUrl}
    />
    <Projects />
  </div>

)

const Intro = ({ name, title, subtitle, photoUrl, }) => (
  <div className="resume__hello-card">
    <div className="resume__hello-card__text">
      <div className="resume__hello-card__text__container">
        <span className="resume__hello-card__text--hello">Hello</span>
        <span className="resume__hello-card__text--title">
          {title}<span className="resume__hello-card__text--name">{name}</span>
        </span>
        <span className="resume__hello-card__text--subtitle">{subtitle}</span>
      </div>

    </div>
    <div className="resume__hello-card__image__container">
      <img className={"resume__hello-card__image__content"} src={photoUrl} />
    </div>
  </div>
)

const Projects = () => (
  < div className="resume__projects" >
  </div >
)


export default Resume
