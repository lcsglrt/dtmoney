import { useState } from 'react';

import logoImg from '../../assets/logo.svg';

export function Header({ onOpenNewTransactionModal }) {
  return (
    <>
      <header className="bg-blue pb-40">
        <div className="pt-8 px-6 mx-auto justify-between max-w-custom">
          <div className="flex justify-between">
            <img src={logoImg} alt="dt moneyF0F2F5" className="w-logo md:w-auto" />
            <button
              type="button"
              onClick={onOpenNewTransactionModal}
              className="bg-btn text-shape font-base font-semibold px-4 py-2.5 rounded-md"
            >
              Nova Transação
            </button>
          </div>
        </div>
      </header>
    </>
  );
} 