import { connect } from 'react-redux';
import { decrement } from '../redux/actions';
import styles from '../styles/detalle.module.scss'

function DecrementButton({ decrement }) {
  return <div onClick={decrement} className={styles.detalle_carrito_favorito}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></div>;
}

export default connect(null, { decrement })(DecrementButton);