import { useState } from 'react';
import Formulario from './componentes/Formulario';

export default function App() {
  const [message, setMessage] = useState('');

  function calcularIMC(altura, peso) {
    if (altura <= 0.0 || peso <= 0.0) return;

    let resultado = (peso / altura ** 2).toFixed(2);
    let classificacao;

    if (resultado < 18.5) classificacao = 'Abaixo do peso';
    else if (resultado < 25) classificacao = 'Peso normal';
    else if (resultado < 30) classificacao = 'Sobrepeso';
    else if (resultado < 35) classificacao = 'Obesidade grau I';
    else if (resultado < 40) classificacao = 'Obesidade grau II';
    else classificacao = 'Obesidade grau III';

    setMessage(`SEU IMC: ${resultado} ${classificacao}`);
  }

  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">Cálculo de IMC</h1>
        </div>
      </header>
      <main>
        <div className="container mx-auto p-4">
          <Formulario onFormSubmit={calcularIMC} />
          <span>{message}</span>
        </div>
      </main>
      <footer className="flex flex-row justify-center">
        <font color="gray" size="2">
          Robson Rodrigo Andrade @®²{' '}
        </font>
      </footer>
    </div>
  );
}
