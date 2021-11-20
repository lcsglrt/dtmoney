import { TransactionCard } from "../TransactionCard"

export function TransactionsList({ transactionsData }) {
  return (
    <>
      <div className="pt-8 lg:hidden">
        <div className="flex items-center justify-between">
          <p className="text-2xl text-title">Listagem</p>
          <p className="text-sm text-text">{transactionsData.length} {transactionsData.length > 1 ? 'itens' : 'item'}</p>
        </div>
        {
          transactionsData.length === 0 ? <p>Não há transações</p> :
          <ul>
            {transactionsData.map(transaction => (
              <li key={transaction.id}>
                <TransactionCard transaction={transaction} />
              </li>
            ))}
          </ul>
        }
      </div>
      <div className="mt-16 hidden lg:block">
        <table className="w-full border-separate">
          <thead>
            <tr>
              <th className="text-text font-normal text-left py-4 px-8">Título</th>
              <th className="text-text font-normal text-left py-4 px-8">Preço</th>
              <th className="text-text font-normal text-left py-4 px-8">Categoria</th>
              <th className="text-text font-normal text-left py-4 px-8">Data</th>
            </tr>
          </thead>
          <tbody>
            {
              transactionsData.length === 0 ? 
                <tr>
                  <td>
                    <p className="px-8 py-4">Não há transações</p>
                  </td>
                </tr> :
              transactionsData.map(transaction => (
                <tr key={transaction.id} className="rounded">
                  <td className="text-title  py-4 px-8 border-none bg-shape">{transaction.title}</td>
                  <td className={`${transaction.type === 'deposit' ? 'text-green' : 'text-red'} py-4 px-8 border-none bg-shape`}>
                    { transaction.type === 'withdraw' && '- ' }
                    { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(transaction.amountFormatted / 100) }
                  </td>
                  <td className="text-text py-4 px-8 border-none bg-shape">{transaction.category}</td>
                  <td className="text-text py-4 px-8 border-none bg-shape">{transaction.createdAt}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}