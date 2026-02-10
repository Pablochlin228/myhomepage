import styles from './MyFilm.module.css';

export function MyinfoFilm(props) {
  return <div className={styles.Card}>
    <img src={props.photo} />
    <h2>{props.name}</h2>
    <h3>{props.year}</h3>
    <p>{props.description}</p>
    <img src={props.rating}/>
  </div>
}


