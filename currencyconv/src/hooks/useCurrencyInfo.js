
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!currency) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            const urls = [
                `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`,
                `https://latest.currency-api.pages.dev/v1/currencies/${currency.toLowerCase()}.json`
            ];

            try {
                let result = null;

                for (const url of urls) {
                    try {
                        const response = await fetch(url);

                        if (!response.ok) {
                            throw new Error(`HTTP ${response.status}`);
                        }

                        result = await response.json();
                        break;
                    } catch (err) {
                        console.warn("API attempt failed:", url, err);
                    }
                }

                if (!result || !result[currency.toLowerCase()]) {
                    throw new Error("All currency API endpoints failed");
                }

                setData(result[currency.toLowerCase()]);
            } catch (err) {
                console.error("Currency API Error:", err);
                setError(err.message);
                setData({});
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currency]);

    return { data, loading, error };
}

export default useCurrencyInfo;
