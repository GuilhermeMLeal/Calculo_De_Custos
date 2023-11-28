import React, { useState } from 'react';
import './css/FormularioItem.css'; // Substitua pelo nome do arquivo CSS que estiliza o formulário

const FormularioItem = ({ onAddItem }) => {
  // Estados para controlar os campos do formulário
  const [itemName, setItemName] = useState('');
  const [itemValue, setItemValue] = useState(0);
  const [itemType, setItemType] = useState('receita');
  const [itemPaidBy, setItemPaidBy] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Cria um novo item com os dados do formulário
    const newItem = {
      nome: itemName,
      valor: itemValue,
      tipo: itemType,
      pagoPor: itemPaidBy,
    };

    // Chama a função onAddItem e passa o novo item como parâmetro
    onAddItem(newItem);

    // Limpa os campos do formulário após o envio
    setItemName('');
    setItemValue(0);
    setItemType('receita');
    setItemPaidBy('');
  };

  return (
    <div className="form-container">
      {/* Formulário para adicionar um novo item */}
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </label>
        <label>
          Valor:
          <input
            type="number"
            value={itemValue}
            onChange={(e) => setItemValue(parseFloat(e.target.value))}
            required
          />
        </label>
        <label>
          Tipo:
          <select value={itemType} onChange={(e) => setItemType(e.target.value)} required>
            <option value="receita">Receita</option>
            <option value="despesa">Despesa</option>
          </select>
        </label>
        <label>
          Pago por:
          <input
            type="text"
            value={itemPaidBy}
            onChange={(e) => setItemPaidBy(e.target.value)}
            required
          />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default FormularioItem;
