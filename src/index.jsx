import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';


/* HOC 
function App(props) {
  return (
    <h1>!{props.saludo}, {props.nombre}¡</h1>
  );
}

function withSaludo(WrapperdComponent) {
  return function WrapperdComponentWithSaludo(saludo) {
    return function ComponenteDeVerdad (props) {
      return (
        <React.Fragment>
          <WrapperdComponent {...props} saludo={saludo}/>
          <p>Estamos acompañamdo al WrapperdComponent</p>
        </React.Fragment>
      );
    }
  }
}

const AppwithSaludo = withSaludo(App)('buenas');



ReactDOM.render(
  <React.Fragment>
    <AppwithSaludo2 nombre={"Alex"} />
    <AppwithSaludo3 nombre={"jose"} />
  </React.Fragment>,
  document.getElementById('root')
);
*/


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
