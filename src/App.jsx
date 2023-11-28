import React, { useState } from 'react';
import Receitas from './Receitas';
import Despesas from './Despesas';
import FormularioItem from './FormularioItem';
import './css/App.css'

const App = () => {
  const [items, setItems] = useState([]);

  // Função para adicionar um novo item à lista de itens
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Função para deletar um item da lista de itens
  const handleDeleteItem = (type, index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Controle de Despesas</h1>
      
      {/* Componente de formulário para adicionar novos itens */}
      <FormularioItem onAddItem={handleAddItem} />

      {/* Container para centralizar e exibir Receitas e Despesas lado a lado */}
      <div className='middle'>
        <Receitas items={items} handleDelete={handleDeleteItem} />
        <Despesas items={items} handleDelete={handleDeleteItem} />
      </div>
      
    </div>
  );
};

export default App;
