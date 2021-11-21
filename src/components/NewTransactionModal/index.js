import Modal from 'react-modal';
import { useState } from 'react';

import NumberFormat from 'react-number-format';

import closeModalImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';


Modal.setAppElement('#root');

export function NewTransactionModal({ isOpen, onRequestClose, transactions, setTransactions }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
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
    const dateFormatted = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    const amountFormatted = Number(amount.slice(3).replace(/[^0-9]/g, ''));

    createNewTransaction({
      id: +new Date(),
      title,
      amountFormatted,
      type,
      category,
      createdAt: dateFormatted
    });

    setTitle('');
    setAmount('');
    setType('deposit');
    setCategory('');
    onRequestClose();
  }
  
  function currencyFormatter(value) {
    if (!Number(value)) return "";
  
    const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value / 100);
  
    return `${amount}`;
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay
          lg:bg-black lg:bg-opacity-50  lg:fixed  lg:bottom-0  lg:top-0  lg:left-0  lg:right-0  lg:flex  lg:items-center  lg:justify-center"
        className="react-modal lg:w-modal lg:rounded"
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

            <NumberFormat
              value={amount}
              onChange={e => setAmount(e.target.value)}
              displayType={'input'}
              format={currencyFormatter}
              thousandSeparator="."
              decimalSeparator=","
              prefix={'R$'}
              className="input-modal"
              placeholder="R$0,00"
            />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <button
                type='button'
                className={`w-full border border-bodyBorder flex items-center h-16 justify-center rounded
                  ${type === 'deposit' ? 'bg-background' : ''}
                `}
                onClick={() => { setType('deposit') }}
              >
                <img src={incomeImg} alt="Entrada" className="mr-4 w-5 h-5" />
                <span>Entradas</span>
              </button>

              <button
                type='button'
                className={`w-full border border-bodyBorder flex items-center h-16 justify-center rounded
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