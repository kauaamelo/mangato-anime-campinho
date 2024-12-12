import React from 'react';
import styles from './card.module.scss';

const Card = ({ title, synopsis, coverImage, genre, rating }) => {
  return (
    <div className={styles.card}>
      <img src={coverImage} alt={title} className={styles.image} />
      <div className={styles.informacoes}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.genero}><strong>Gênero:</strong> {genre}</p>
      <p className={styles.nota}><strong>Nota:</strong>{rating} </p>
      <p className={styles.synopsis}><strong>Sinopse: </strong> {synopsis}</p>
      </div>
    </div>
  );
};

export default Card;
