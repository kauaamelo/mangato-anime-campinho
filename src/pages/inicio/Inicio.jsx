import style from './inicio.module.scss';
import AnimeList from '../../components/animeList/AnimeList';

export default function Inicio() {
  return (
    <main>
      <section className={style.sessaoImg}>
      <h2>OS MELHORES ANIMES DO MUNDO</h2>
      </section>

      <section className={style.cardsSection}>
        <h2>Nossos Animes:</h2>
        <div className={style.containerCards}>
          <AnimeList />
        </div>
      </section>
    </main>
  );
}