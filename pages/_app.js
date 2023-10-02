// En el archivo app/_app.js
import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import store from '../store';



function MyApp({ Component, pageProps }) {
    // Aquí puedes agregar lógica adicional o componentes de nivel superior
  
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );    
  }
  
const makeStore = () => store;

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);