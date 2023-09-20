import React, { useState } from "react";
import './style.css'

function Pergunta1() {
  const [pergunta1, setPergunta1] = useState(true);
  const [pergunta2, setPergunta2] = useState(false);
  const [pergunta3, setPergunta3] = useState(false);
  const [alturapapel, setAlturapapel] = useState('');
  const [largurapapel, setLargurapapel] = useState('');
  const [alturaImpresso, setAlturaImpresso] = useState('');
  const [larguraImpresso, setLarguraImpresso] = useState('');
  const [resultadoDaMultiplicacao, setResultadoDaMultiplicacao] = useState(null);
  const [resultadoDaMultiplicacao2, setResultadoDaMultiplicacao2] = useState(null);

  // Função para realizar a divisão da altura do papel
  function divisaoAltura() {
    const divisao = Math.floor(alturapapel / alturaImpresso);
    return divisao;
  }

  // Função para realizar a divisão da largura do papel
  function divisaoLargura() {
    const divisao = Math.floor(largurapapel / larguraImpresso);
    return divisao;
  }

  function divisaoAltura2() {
    const divisao = Math.floor(alturapapel / larguraImpresso);
    return divisao;
  }
  
  function divisaoLargura2() {
    const divisao = Math.floor(largurapapel / alturaImpresso);
    return divisao;
  }

  // Função para multiplicar os resultados das divisões
  function multiplicarResultados() {
    const resultadoAltura = divisaoAltura();
    const resultadoLargura = divisaoLargura();

    // Realiza a multiplicação dos resultados
    const resultadoMultiplicacao = resultadoAltura * resultadoLargura;

    return resultadoMultiplicacao;
  }

  function multiplicarResultados2() {
    const resultadoAltura2 = divisaoAltura2();
    const resultadoLargura2 = divisaoLargura2();

    // Realiza a multiplicação dos resultados
    const resultadoMultiplicacao2 = resultadoAltura2 * resultadoLargura2;

    return resultadoMultiplicacao2;
  }

  // Função para mostrar o resultado da multiplicação
  const mostrarResultado = () => {
    const resultado = multiplicarResultados();
    setResultadoDaMultiplicacao(resultado);
  };

  // Função para mostrar o resultado da multiplicação
  const mostrarResultado2 = () => {
    const resultado2 = multiplicarResultados2();
    setResultadoDaMultiplicacao2(resultado2);
  };


  // Função para lidar com o envio do primeiro formulário
  const preenchido = (e) => {
    e.preventDefault();
    if (!alturapapel || !largurapapel) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    openPergunta2();
  };

  // Função para lidar com o envio do segundo formulário
  const preenchido2 = (e) => {
    e.preventDefault();
    if (!alturaImpresso || !larguraImpresso) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    openPergunta3();
    mostrarResultado();
    mostrarResultado2();
  };

  








  // Função para avançar para a segunda pergunta
  const openPergunta2 = () => {
    setPergunta2(true);
    setPergunta1(false);
  };

  // Função para avançar para a terceira pergunta
  const openPergunta3 = () => {
    setPergunta3(true);
    setPergunta2(false);
    setPergunta1(false);
  };

  // Função para voltar para a primeira pergunta
  function voltarPergunta1() {
    setPergunta2(false);
    setPergunta1(true);
  }

  // Função para voltar para a segunda pergunta
  function voltarPergunta2() {
    setPergunta3(false);
    setPergunta2(true);
    setPergunta1(false);
  }

  

  return (
  <div className="fundo">
    <div className="conatiner">
      <div style={{ display: pergunta1 ? "block" : "none" }}>
      <form className="formi" onSubmit={preenchido}>
          <label>Largura Papel(cm):</label>
          <input
            required
            type="number"
            value={largurapapel}
            onChange={(e) => setLargurapapel(Number(e.target.value))}
          />
          
          <label>Altura Papel(cm):</label>
          <input
            required
            type="number"
            value={alturapapel}
            onChange={(e) => setAlturapapel(Number(e.target.value))}
          />
          <div className="containerbutao">
          <button type="submit">PRÓXIMO</button>
          </div>
        </form>
      </div>

      <div style={{ display: pergunta2 ? "block" : "none" }}>
        
        <form className="formi" onSubmit={preenchido2}>
          
            <div>
            <h2>Tamanho papel:{largurapapel}x{alturapapel}</h2>
            
            

            </div>
          <label>Largura impresso(cm):</label>
          <input
            required
            type="number"
            value={larguraImpresso}
            onChange={(e) => setLarguraImpresso(Number(e.target.value))}
          />
          <label>Altura impresso(cm):</label>
          <input
            required
            type="number"
            value={alturaImpresso}
            onChange={(e) => setAlturaImpresso(Number(e.target.value))}
          />
          <div className="containerbutao">
          <button className="voltar" onClick={voltarPergunta1}>VOLTAR</button>
          <button type="submit">PRÓXIMO</button>
          </div>
        </form>
        
      </div>

      
    <div style={{ display: pergunta3 ? "block" : "none" }}>
       <div className="formi">
              <div className="respostas">
                  <h2>Tamanho papel:<span>{largurapapel}x{alturapapel}</span></h2>
                  <h2>Tamanho do impresso:<span>{larguraImpresso}x{alturaImpresso}</span></h2>
                    {/* Exibe o resultado da multiplicação */}
                  {resultadoDaMultiplicacao !== null && (
                    <div>
                      <h2>Papel em Pé, cabem: <span>{resultadoDaMultiplicacao}</span> por folha</h2>
                    </div>
                  )}
                  {resultadoDaMultiplicacao2 !== null && (
                    <div>
                      <h2>Papel Deitado, cabem: <span>{resultadoDaMultiplicacao2}</span> por folha</h2>
                    </div>
                  )}
            </div>
        <button className="voltar" onClick={voltarPergunta2}>VOLTAR</button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Pergunta1;
