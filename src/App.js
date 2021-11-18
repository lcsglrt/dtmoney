import { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';

import './App.css';
import { DashBoard } from './components/Dashboard';

import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [transactionsTable, setTransactionsTable] = useState([]);
  
  const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] = useState(false);

  useEffect(() => {
    setTransactionsTable(transactions);
  }, [transactions]);

  function handleOpenNewTransactionModal() {
    SetIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    SetIsNewTransactionModalOpen(false);
  }

  

  // const summary = transactionsTable.reduce((acc, transaction) => {
  //   return acc + transaction.amount;
  // }, 0);
  
  return (
    <div className="bg-background min-h-screen">
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />
      
      {/* <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th> */}
            {/* <th>Data</th>
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
      </table> */}

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </div>
  );
}

export default App;
