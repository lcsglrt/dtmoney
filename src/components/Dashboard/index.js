import { Summary } from "../Summary";
import { TransactionsList } from "../TransactionsList";

export function DashBoard({ transactionsTable, summary }) {
  return (
    <main className="max-w-custom mx-auto py-10 px-6">
      <Summary summary={summary} transactionsTable={transactionsTable} />
      <div className="md:hidden">
        <TransactionsList transactionsTable={transactionsTable} />
      </div>
    </main>
  )
}