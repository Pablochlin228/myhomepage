import styles from './MyPet.module.css';

// const MyPet = () => (
//   <div className={styles.MyPet}>
//     MyPet Component
//   </div>
// );

export function Mypet(props) {
  return <div className={styles.PetCard}>
    <img src={props.photo} />
    <div className={styles.TextBlock}>
      <h3>{props.Name}</h3>
      <h3>{props.Year}</h3>
      <h4>About breed:</h4>
      <p>{props.Info}</p>
    </div>
  </div>
}

export function BlockOfMyPet(props) {
  return <div className={styles.blockForPets}>
    <Mypet photo="pet.jpg" Name="Tosha" Year="2017" 
    Info="The Maltese is a small toy dog breed known for its long, white, silky coat.Maltese dogs are intelligent and love attention. They are good companion dogs and often live 12–15 years or more." ></Mypet>
  </div>
}
