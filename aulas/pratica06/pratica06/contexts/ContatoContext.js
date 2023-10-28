import React, { createContext, useState } from 'react';

const ContatoContext = createContext();

function ContatoProvider({ children }) {
  const [contatos, setContatos] = useState([]);

  function adicionar(nome) {
    setContatos([...contatos, nome]);
  }

  return (
    <ContatoContext.Provider value={{ contatos, adicionar }}>
      {children}
    </ContatoContext.Provider>
  );
}

export { ContatoProvider, ContatoContext };
