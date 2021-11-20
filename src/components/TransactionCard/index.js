export function TransactionCard({ transaction }) {
  return (
    <div className="mt-3 bg-shape rounded py-6 px-8">
      <p className="text-title">{transaction.title}</p>
      <p className={transaction.type === 'deposit' ? 'text-green' : 'text-red'}>{new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'}).format(transaction.amountFormatted / 100)}</p>
      <div className="flex items-center justify-between pt-6">
        <p className="text-sm text-text">{transaction.category}</p>
        <p className="text-sm text-text">{transaction.createdAt}</p>
      </div>
    </div>
  );
}