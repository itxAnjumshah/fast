import React, { useId } from "react";
import "./Cureny.css";

export default function Currency({
  label,
  amout,
  onAmountChange,
  onCurrencyChange,
  currencyoption = [],
  selectCurrency = "usd",
  amoutDisable = false,
  currencydisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`currency ${className}`}>
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-inner">
            <div className="most-inner">
              <label htmlFor={amountInputId}>{label}</label>
              <input
                id={amountInputId}
                type="number"
                placeholder="Amount"
                disabled={amoutDisable}
                value={amout}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
              />
            </div>
            <div className="most-inner">
              <label>Currency Type</label>
              <select
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencydisable}
              >
                {currencyoption.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
