import styles from './MyFilm.module.css';

export function MyinfoFilm(props) {
  return <div className={styles.Card}>
    <img src={props.photo} className={styles.filmPhoto}/>
    <h2>{props.name}</h2>
    <h3>{props.year}</h3>
    <p>{props.description}</p>
    <h4 className={styles.rating}>My rating</h4>
    <img src="stars.png" className={styles.ratingPhoto} />
  </div>
}

export function Blockforfilms(props) {
  return <div className={styles.filmBlock}>
    <MyinfoFilm photo="film1.jpg" name="Avatar" year="2009"
      description="Avatar is a science-fiction film directed by James Cameron.The story takes place on the alien planet Pandor where humans mine a valuable resource. A former marine Jake Sully uses an avatar body to interact with the native Navi people." />

    <MyinfoFilm photo="film2.jpg" name="Terminator " year="1984"
      description="A cyborg assassin called the Terminator is sent from the future to kill Sarah Connor, whose unborn son will one day lead humanity in a war against machines. A soldier from the future follows to protect her. The film mixes science fiction with action and suspense." />

    <MyinfoFilm photo="film3.png" name="Star Wars" year="1999"
      description="Two Jedi Knights, Qui-Gon Jinn and Obi-Wan Kenobi, protect Queen Padmé Amidala during a political conflict. On their journey, they discover a young slave boy, Anakin Skywalker, who is very strong with the Force.The film shows the beginning of Anakin’s story." />
  </div>
}
