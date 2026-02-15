import styles from './MyInformation.module.css';

// const MyInformation = () => (
//   <div className={styles.MyInformation}>
//     MyInformation Component
//   </div>
// );

export function Myinfo(props) {
  return <div className={styles.Card}>
    <img src={props.photo} />
    <div className={styles.TextBlock}>
      <h2>{props.fullName}</h2>
      <h3>{props.phone}</h3>
      <h3>{props.email}</h3>
      <h4>My skills:</h4>
      <ul>
        <li>{props.ability1}</li>
        <li>{props.ability2}</li>
        <li>{props.ability3}</li>
      </ul>
    </div>
  </div>
}

export function Blockforinformation() {
  return <div className={styles.blockForCards}>
    <Myinfo photo="me.jpg" fullName="Cherkasov Pavlo Muckolaevich"
    phone="+380687959492" email="cherkasov08pavel@gmail.com"
    ability1="Have B2 english"
    ability2="Know C++"
    ability3="Like to learn something new" />
  </div>

}
