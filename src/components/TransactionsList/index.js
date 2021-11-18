import { TransactionCard } from "../TransactionCard"

export function TransactionsList() {
  return (
    <div className="pt-8">
      <div className="flex items-center justify-between">
        <p className="text-2xl text-title">Listagem</p>
        <p className="text-sm text-text">3 Itens</p>
      </div>
      <TransactionCard />
      <TransactionCard />
      <TransactionCard />
    </div>
  )
}