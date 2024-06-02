import React, { useEffect, useState } from "react";

export default function useCurrConRate(amount, toCurrency, fromCurrency) {
    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;

    const [conversion, setConversion] = useState();

    async function fetching() {
        try {
            if (amount == 0) {
                setConversion(0);
            }
            else if (toCurrency === fromCurrency) {
                setConversion(amount);
            }
            else {
                {
                    const result = await fetch(url);
                    const data = await result.json();
                    const value = data.rates[toCurrency];
                    setConversion(value);
                }
            }
        } catch (e) {
            console.log("error: ", e);
        }
    }

    useEffect(() => {
        fetching();
    }, [amount, fromCurrency, toCurrency])
    return conversion;
}