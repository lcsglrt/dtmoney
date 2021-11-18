import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

export function Summary({ summary }) {
  return (
    <div className="relative flex -mt-40 overflow-hidden">
      <div className="-top-40 bg-shape py-6 px-8 rounded text-title w-72">
        <header className="flex items-center justify-between">
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong className="block mt-4 text-3xl font-medium leading-summary">{new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'}).format(summary.deposits)}</strong>
        <p className="md:hidden text-sm text-text">Última entrada dia 13 de abril</p>
      </div>
      
      <div className="bg-shape py-6 px-8 rounded text-title md:h-auto w-72 mx-8">
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
        <p className="md:hidden text-sm text-text">Última entrada dia 13 de abril</p>
      </div>

      <div className="bg-green py-6 px-8 rounded text-title md:h-auto w-72">
        <header className="flex items-center justify-between">
          <p className="text-shape">Total</p>
          <img src={total} alt="Entradas" />
        </header>
        <strong className="block mt-4 text-3xl text-shape font-medium leading-summary">{new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'}).format(summary.total)}</strong>
        <p className="md:hidden text-sm text-shape">Última entrada dia 13 de abril</p>
      </div>
    </div>
  )
}