
import iconRect7 from '../assets/img/Logo_rec.png';
import '../styles/works.scss';

const Works = () => {
  return(
    <section id='works-page'>
      <div id='header' className="works-header">
        <img src={iconRect7} alt="Rec7 Films"/>
        <div className='logoName-wrapper'>
          <h1>Rec7</h1><h3>Films</h3>
        </div> 
      </div>

      <div className='section-title-wrapper'>
        <span className='divider'></span>
        <h4>Difusión cultural</h4>
        <span className='divider'></span>
      </div>

      <div className='content-wrapper'>
        <div className="videos-column column">
          <article className="evento">
            <iframe width="412" height="232" src="https://www.youtube.com/embed/Xtx0jS0G2eA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </article>
          <article className="evento margin-top">
            <iframe width="412" height="232" src="https://www.youtube.com/embed/EX7H-V7U9Bo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </article>
        </div>

        <div className="video-text-column column">
          <div className="video-text-wrapper">
            <h5>"La Partida..."</h5>
            <p> Compañía Kebrantahuesos presenta la Obra de Teatro y Danza Aérea "La Partida..." primer capítulo de Migraciones del Alma.</p>
          </div>
          <div className="video-text-wrapper margin-top">
            <h5>"La Balsa de la Medusa"</h5>
            <p>Obra performance de arte contemporáneo, en conjunto con los vecinos de Perrera Arte, basada en el cuadro “La Balsa de la Medusa”</p>
          </div> 
        </div>
      </div>

        <div className='section-title-wrapper'>
          <span className='divider'></span>
          <h4>Institucionales</h4>
          <span className='divider'></span>
        </div>

      <div className='content-wrapper'>
        <div className="videos-column column">
          <article className="evento">
            <iframe width="412" height="232" src="https://www.youtube.com/embed/EX7H-V7U9Bo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </article>
        </div>
        <div className="video-text-column column">
          <div className="video-text-wrapper">
            <h5>All Boxing</h5>
            <p>Video promocional para gimnasio All Boxing, enfocado a acondicionamiento físico y entrenamiento de boxeo.</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Works