import { Summary } from "../Summary";
import { TransactionsList } from "../TransactionsList";

export function DashBoard({ transactionsData, summary }) {
  return (
    <main className="max-w-custom mx-auto py-10 px-6">
      <Summary summary={summary} transactionsData={transactionsData} />
        <TransactionsList transactionsData={transactionsData} />
    </main>
  )
}