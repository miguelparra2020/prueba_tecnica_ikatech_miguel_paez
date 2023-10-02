import { connect } from 'react-redux';
import { increment } from '../redux/actions';
import styles from '../styles/detalle.module.scss'

function IncrementarButton({ increment }) {
  return <button onClick={increment} className={styles.detalle_carrito_anadir}>Añadir al carrito</button>;
}

export default connect(null, { increment })(IncrementarButton);