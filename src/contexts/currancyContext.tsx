import { createContext, useState, type PropsWithChildren } from "react";

export type CurrancyType = "HUF" | "USD" | "EUR";
type CurrancyContextType = {
    currentCurrancy: CurrancyType;
    supportCurrancies: CurrancyType[];
    changeCurrancy: (newCurrancy: string) => void;
    format: (valueHuf: number) => string;
}

const defaultCurrancyContext: CurrancyContextType = {
    currentCurrancy: "HUF",
    supportCurrancies: ["HUF", "USD", "EUR"],
    changeCurrancy: (newCurrancy: string) => {},
    format: (valueHuf: number) => valueHuf.toString(),
};

export const CurrencyContext = createContext<CurrancyContextType>(defaultCurrancyContext);

const currencyList: CurrancyType[] = ["HUF", "USD", "EUR"];

const exchangeRates: Record<CurrancyType, number> = {
    HUF: 1,
    USD: 0.0026,
    EUR: 0.0031,
};

export function CurrancyProvider(props: PropsWithChildren) {
    const [currency, setCurrancy] = useState<CurrancyType>("HUF");

    const changeCurrancy = (newCurrancy: string) => {
        if (currencyList.includes(newCurrancy as CurrancyType)) {
            setCurrancy(newCurrancy as CurrancyType);
        }
    };
    const format = (valueHuf: number): string => {
        const rate = exchangeRates[currency];
        const convertedValue = valueHuf * rate;
        switch (currency) {
            case "HUF":
                return `${convertedValue.toFixed(0)} Ft`;
            case "USD":
                return `$${convertedValue.toFixed(2)}`;
            case "EUR":
                return `€${convertedValue.toFixed(2)}`;
            default:
                return "Failed to convert";
        }
    };

    const contextValue: CurrancyContextType = {
        currentCurrancy: currency,
        supportCurrancies: currencyList,
        changeCurrancy,
        format,
    };
    return (
        <CurrencyContext.Provider value={contextValue}>
            {props.children}
        </CurrencyContext.Provider>
    );
}