import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [exchangeRates, setExchangeRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = 'c1b526db4114cfda4b0f1b8a';
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  useEffect(() => {
    const fetchExchangeRates = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl);
        console.log(response);
        
        setExchangeRates(response.data.conversion_rates);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        setError('Failed to fetch exchange rates');
        setLoading(false);
      }
    };
    fetchExchangeRates();
  }, [fromCurrency]);

  useEffect(() => {
    if (exchangeRates[toCurrency]) {
      const rate = exchangeRates[toCurrency];
      setConvertedAmount(amount * rate);
    }
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e, setCurrency) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="converter-form">
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          disabled={loading}
        />
        <select
          value={fromCurrency}
          onChange={(e) => handleCurrencyChange(e, setFromCurrency)}
          disabled={loading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
        </select>
        <span>to</span>
        <input type="number" value={convertedAmount || 0} readOnly />
        <select
          value={toCurrency}
          onChange={(e) => handleCurrencyChange(e, setToCurrency)}
          disabled={loading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
        </select>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default CurrencyConverter;