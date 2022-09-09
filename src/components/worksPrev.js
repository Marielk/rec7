
import '../styles/works.scss';

const WorksPrev = () => {
  return(
    <section id="eventos">
      <div className='section-title-wrapper'>
        <span className='divider'></span>
        <h4>Últimos trabajos</h4>
        <span className='divider'></span>
      </div>
      <a href="evento01.html">
        <article className="evento">
          <iframe width="412" height="232" src="https://www.youtube.com/embed/Xtx0jS0G2eA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <h5>“La Partida...”</h5>
        </article>
      </a>

      <article className="evento">
        <iframe width="412" height="232" src="https://www.youtube.com/embed/EX7H-V7U9Bo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <h5>All Boxing</h5>
      </article>

      <article className="evento">
        <iframe width="412" height="232" src="https://www.youtube.com/embed/EX7H-V7U9Bo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <h5>Insignias de Identidad</h5>
      </article>

      <div className='button-wrapper'>
        <button className='button-secondary'>
          Ver más
        </button>
      </div>

    </section>

  );
}

export default WorksPrev;