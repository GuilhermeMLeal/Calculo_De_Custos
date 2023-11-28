import React from 'react';
import './css/Despesas.css'

const Despesas = ({ items, handleDelete }) => {
  // Filtra os itens para exibir apenas as despesas
  const despesas = items.filter((item) => item.tipo === 'despesa');

  // Função para calcular o total das despesas
  const calculateTotal = () => {
    return despesas.reduce((total, item) => total + item.valor, 0);
  };

  return (
    <div>
      <h1>Despesas</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Pago</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapeia e exibe cada item de despesa na tabela */}
          {despesas.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.valor}</td>
              <td>{item.pagoPor}</td>
              <td>
                {/* Botão para excluir o item de despesa */}
                <button onClick={() => handleDelete('despesa', index)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Exibe o total das despesas */}
      <h2>Total Despesa: {calculateTotal()}</h2>
    </div>
  );
};

export default Despesas;
