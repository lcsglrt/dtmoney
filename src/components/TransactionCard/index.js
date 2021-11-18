export function TransactionCard() {
  return (
    <div className="mt-3 bg-shape rounded py-6 px-8">
      <p className="text-title">Desenvolvimento de site</p>
      <p className="text-green text-xl">R$12.000,00</p>
      <div className="flex items-center justify-between pt-6">
        <p className="text-sm text-text">Vendas</p>
        <p className="text-sm text-text">17/11/2021</p>
      </div>
    </div>
  );
}