import { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';

import './App.css';
import { DashBoard } from './components/Dashboard';

import { Header } from './components/Header';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [transactionsTable, setTransactionsTable] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  // const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  useEffect(() => {
    setTransactionsTable(transactions);
  }, [transactions]);

  function createNewTransaction(data) {
    const localTransactions = [...transactions];
    localTransactions.push(data);
    setTransactions(localTransactions);
  }

  function handleCreateNewTransaction(e) {
    e.preventDefault();
    
    createNewTransaction({
      id: +new Date(),
      title,
      amount,
      category
    });
  }

  const summary = transactionsTable.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
  
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <DashBoard />
      {/* <!-- <form onSubmit={handleCreateNewTransaction}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <button 
          type="submit"
        >
          Enviar
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            {/* <th>Data</th> */}
          {/* </tr>
        </thead>
        <tbody>
          {transactionsTable.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.category}</td>
            </tr>
            ))
          }
          <tr>
            <td>Total: {!summary ? 0 : summary}</td>
          </tr>
        </tbody>
      </table> --> */}
    </div>
  );
}

export default App;
