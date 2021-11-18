import { Summary } from "../Summary";
import { TransactionsList } from "../TransactionsList";

export function DashBoard() {
  return (
    <main className="max-w-custom mx-auto py-10 px-6">
      <Summary />
      <div className="md:hidden">
        <TransactionsList />
      </div>
    </main>
  )
}