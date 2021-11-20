import { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';

import './App.css';
import { DashBoard } from './components/Dashboard';

import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

function App() {
  const [transactionsData, setTransactionsData] = useState([]);
  const [transactions, setTransactions] = useState([]);
  
  const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] = useState(false);

  useEffect(() => {
    setTransactionsData(transactions);
  }, [transactions]);

  function handleOpenNewTransactionModal() {
    SetIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    SetIsNewTransactionModalOpen(false);
  }

  const summary = transactionsData.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amountFormatted;
      acc.total += transaction.amountFormatted;
    } else {
      acc.withdraws += transaction.amountFormatted;
      acc.total -= transaction.amountFormatted;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });

  console.log(transactionsData);
  
  return (
    <div className="bg-background min-h-screen">
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard transactionsData={transactionsData} summary={summary} />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        setTransactions={setTransactions}
        transactions={transactions}
      />
    </div>
  );
}

export default App;
