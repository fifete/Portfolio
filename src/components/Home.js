import React from 'react'

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__img">
            <img src="./profile-img.svg" alt="profile img"/>
          </div>

          <div className="home__data">
            <h1 className="home__title">Hi! I Am Daniela Fuentes</h1>
            <p className="home__description">
                I'm a frontend developer who enjoys the challenge of
                <span className="home__highlight">solving</span> modern 
                <span className="home__highlight">problems</span> through code.
            </p>
            <a href="#contact" className="button">Hire me!</a>
          </div>

          <div className="home__social">
            <a
                href="https://www.linkedin.com/in/danielafuentesdev/"
                target="_blank"
                rel='noreferrer'
                className="home__social-icon"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
                href="https://github.com/fifete"
                target="_blank"
                rel='noreferrer'
                className="home__social-icon"
            >
              <i className="uil uil-github-alt"></i>
            </a>
            <a
                href="https://drive.google.com/file/d/1EtxbRRP_cVUBeDqzBra751i9sAeP53-3/view?usp=sharing"
                target="_blank"
                rel='noreferrer'
                className="home__social-icon"
            >
              <i>CV</i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
