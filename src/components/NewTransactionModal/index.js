import Modal from 'react-modal';
import { useState } from 'react';

import closeModalImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

Modal.setAppElement('#root');

export function NewTransactionModal({ isOpen, onRequestClose, transactions, setTransactions }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState();
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  function createNewTransaction(data) {
    const localTransactions = [...transactions];
    localTransactions.push(data);
    setTransactions(localTransactions);


  }

  function handleCreateNewTransaction(e) {
    e.preventDefault();
    
    const now = new Date();
    const dateFormatted = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`

    createNewTransaction({
      id: +new Date(),
      title,
      amount,
      type,
      category,
      createdAt: dateFormatted
    });

    setTitle('');
    setAmount(0);
    setType('deposit');
    setCategory('');
    onRequestClose();
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
              placeholder="R$"
              value={amount}
              onChange={e => setAmount(Number(e.target.value))}
              className="input-modal"
            />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <button
                type='button'
                className={`w-full border border-bodyBorder flex items-center h-16 justify-center
                  ${type === 'deposit' ? 'bg-background' : ''}
                `}
                onClick={() => { setType('deposit') }}
              >
                <img src={incomeImg} alt="Entrada" className="mr-4 w-5 h-5" />
                <span>Entradas</span>
              </button>

              <button
                type='button'
                className={`w-full border border-bodyBorder flex items-center h-16 justify-center
                  ${type === 'withdraw' ? 'bg-background' : ''}
                `}
                onClick={() => { setType('withdraw') }}
              >
                <img src={outcomeImg} alt="Entrada"  className="mr-4 w-5 h-5" />
                <span>Saídas</span>
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