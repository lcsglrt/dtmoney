import { TransactionCard } from "../TransactionCard"

export function TransactionsList({ transactionsTable }) {
  return (
    <div className="pt-8">
      <div className="flex items-center justify-between">
        <p className="text-2xl text-title">Listagem</p>
        <p className="text-sm text-text">{transactionsTable.length} {transactionsTable.length > 1 ? 'itens' : 'item'}</p>
      </div>
      {
        transactionsTable.length === 0 ? <p>Não há transações</p> :
        <ul>
          {transactionsTable.map(transaction => (
            <li key={transaction.id}>
              <TransactionCard transaction={transaction} />
            </li>
          ))}
        </ul>
      }
    </div>
  )
}