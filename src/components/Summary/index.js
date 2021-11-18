import incomeImg from '../../assets/income.svg';

export function Summary() {
  return (
    <div className="flex -mt-40">
      <div className="bg-shape py-6 px-8 rounded text-title w-72 h-48 md:h-auto">
        <header className="flex items-center justify-between">
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong className="block mt-4 text-4xl font-medium leading-summary">R$1.000,00</strong>
        <p className="md:hidden text-sm text-text">Última entrada dia 13 de abril</p>
      </div>

      {/* <div className="bg-shape py-6 px-8 rounded text-title w-72 h-48 md:h-auto">
        <header className="flex items-center justify-between">
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong className="block mt-4 text-summary font-medium leading-summary">R$1.000,00</strong>
        <p className="md:hidden text-sm text-text">Última entrada dia 13 de abril</p>
      </div>

      <div className="bg-shape py-6 px-8 rounded text-title w-72 h-48 md:h-auto">
        <header className="flex items-center justify-between">
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong className="block mt-4 text-summary font-medium leading-summary">R$1.000,00</strong>
        <p className="md:hidden text-sm text-text">Última entrada dia 13 de abril</p>
      </div> */}
    </div>
  )
}