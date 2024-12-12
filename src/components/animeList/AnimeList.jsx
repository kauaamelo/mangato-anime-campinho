import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api/api';
import Card from '../card/Card';

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const data = await fetchData('animes');
        setAnimes(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimes();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div style={styles.grid}>
      {animes.map((anime) => (
        <Card
          key={anime.id}
          title={anime.attributes.title}
          synopsis={anime.attributes.synopsis}
          episodes={anime.attributes.episodes}
          genre={anime.attributes.genre}
          releaseDate={anime.attributes.releaseDate}
          rating={anime.attributes.rating}
          coverImage={anime.attributes.coverImage}
        />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
  },
};

export default AnimeList;
