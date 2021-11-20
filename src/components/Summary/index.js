import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

export function Summary({ summary, transactionsData }) {
  const summaryDates = {
    deposits: '',
    withdraws: '',
    total: ''
  };

  if (transactionsData.length > 0) {
    const findLastDepositDate = transactionsData.filter(transaction => transaction.type === 'deposit');
    const findLastWithdrawDate = transactionsData.filter(transaction => transaction.type === 'withdraw');

    if (findLastDepositDate.length > 0) {
      const timestampLastDepositDate = findLastDepositDate[findLastDepositDate.length - 1].id;
      summaryDates.deposits = `Última entrada dia ${format(new Date(timestampLastDepositDate), "d 'de' MMMM", { locale: ptBR })}`;
    }

    if (findLastWithdrawDate.length > 0) {
      const timestampLastWithdrawDate = findLastWithdrawDate[findLastWithdrawDate.length - 1].id;
      summaryDates.withdraws = `Última saída dia ${format(new Date(timestampLastWithdrawDate), "d 'de' MMMM", { locale: ptBR })}`;
    }

    const timestampLastTransactionDate = transactionsData[transactionsData.length - 1].id;
    summaryDates.total = `Última transação dia ${format(new Date(timestampLastTransactionDate), "d 'de' MMMM", { locale: ptBR })}`;

  }

  return (
    <div className="flex justify-between -mt-28 overflow-x-auto container-summary">
      <div className="-top-40 bg-shape py-6 px-8 rounded text-title content-summary w-72 flex-shrink-0
      lg:flex-1">
        <header className="flex items-center justify-between">
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong className="block mt-4 text-3xl font-medium leading-summary">
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(summary.deposits)}
        </strong>
        <p className="md:hidden text-sm text-text">
          {summaryDates.deposits}
        </p>
      </div>
      
      <div className="bg-shape py-6 px-8 rounded text-title mx-8 w-72 content-summary flex-shrink-0
      lg:flex-1">
        <header className="flex items-center justify-between">
          <p>Saídas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong
          className="block mt-4 text-3xl font-medium leading-summary text-red"
        >
          - {
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'})
            .format(summary.withdraws)
          }
        </strong>
        <p className="md:hidden text-sm text-text">{summaryDates.withdraws}</p>
      </div>

      <div className={`${summary.total >= 0 ? 'bg-green' : 'bg-red'} py-6 px-8 rounded text-title w-72 flex-shrink-0 content-summary
      lg:flex-1`}>
        <header className="flex items-center justify-between">
          <p className="text-shape">Total</p>
          <img src={total} alt="Entradas" />
        </header>
        <strong className="block mt-4 text-3xl text-shape font-medium leading-summary">{new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'}).format(summary.total)}</strong>
        <p className="md:hidden text-sm text-shape">{summaryDates.total}</p>
      </div>
    </div>
  )
}
