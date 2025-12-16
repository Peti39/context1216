import { useContext } from 'react';
import {CurrencyContext} from '../contexts/currancyContext';

type HeaderProps = {
    title: string;
};

export function Header({ title }: HeaderProps) {
    const currencyCtx = useContext(CurrencyContext);
  return (
    <header>
      <h1>{title}</h1>
      <select 
        value={currencyCtx.currentCurrancy}
        onChange={(e) => currencyCtx.changeCurrancy(e.target.value)}>
        {currencyCtx.supportCurrancies.map((currancy) => (
            <option key={currancy} value={currancy}>{currancy}</option>
        ))}


      </select>
    </header>
  );
}