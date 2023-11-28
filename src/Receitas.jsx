import React from 'react';
import './css/Receitas.css'; // Substitua pelo nome do arquivo CSS que estiliza o componente

const Receitas = ({ items, handleDelete }) => {
  // Filtra os itens marcados como 'receita'
  const receitas = items.filter((item) => item.tipo === 'receita');

  // Calcula o total das receitas
  const calculateTotal = () => {
    return receitas.reduce((total, item) => total + item.valor, 0);
  };

  return (
    <div>
      <h1>Receitas</h1>
      {/* Tabela para listar as receitas */}
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Pago</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapeia e renderiza os itens de receita na tabela */}
          {receitas.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.valor}</td>
              <td>{item.pagoPor}</td>
              <td>
                {/* Botão para excluir um item de receita */}
                <button onClick={() => handleDelete('receita', index)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Exibe o total das receitas */}
      <h2>Total Receita: {calculateTotal()}</h2>
    </div>
  );
};

export default Receitas;
