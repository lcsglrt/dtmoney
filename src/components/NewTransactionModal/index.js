import Modal from 'react-modal';
import { useState } from 'react';

import closeModalImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

Modal.setAppElement('#root');

export function NewTransactionModal({ isOpen, onRequestClose }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  // const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  function createNewTransaction(data) {
    // const localTransactions = [...transactions];
    // localTransactions.push(data);
    // setTransactions(localTransactions);
  }

  function handleCreateNewTransaction(e) {
    e.preventDefault();
    
    // createNewTransaction({
    //   id: +new Date(),
    //   title,
    //   amount,
    //   category
    // });
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-title font-semibold text-2xl py-8">Cadastrar transação</h2>
          <button type="button" onClick={onRequestClose}>
            <img src={closeModalImg} alt="Fechar" />
          </button>
        </div>
        <form onSubmit={handleCreateNewTransaction}>
          <div>
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="input-modal"
            />
            <input
              type="number"
              placeholder="Valor"
              value={amount}
              onChange={e => setAmount(Number(e.target.value))}
              className="input-modal"
            />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <button
                className="w-full border border-bodyBorder flex items-center h-16 justify-center"
              >
                <img src={incomeImg} alt="Entrada" className="mr-4" />
                <span>Entradas</span>
              </button>
              <button
                className="w-full border border-bodyBorder flex items-center h-16 justify-center"
              >
                <img src={outcomeImg} alt="Entrada"  className="mr-4" />
                <span>Entradas</span>
              </button>
            </div>

            <input
              type="text"
              placeholder="Categoria"
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="input-modal"
            />
            <button 
              type="submit"
              className="btn-submit"      
            >
              Cadastrar
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}