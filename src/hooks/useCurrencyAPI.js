import { useEffect, useState } from "react";

function useCurrencyAPI(currency) {
    const [data, setData] = useState(null);

    const fetchCurrency = async () => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        const response = await fetch(url);
        const result = await response.json();
        setData(result[currency]);
    }

    useEffect(() => {
        fetchCurrency();
    }, [currency])

    return data;
}

export default useCurrencyAPI;