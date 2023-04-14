import React, { useState, FC, ReactNode } from "react";

interface ISortContext {
    typeSorting: string;
    setTypeSorting: React.Dispatch<React.SetStateAction<string>>;
}

export const SortContext = React.createContext<ISortContext>({ typeSorting: '', setTypeSorting: () => { } });

export const SortContextProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [typeSorting, setTypeSorting] = useState('');

    return <SortContext.Provider value={{ typeSorting, setTypeSorting }}>
        {children}
    </SortContext.Provider>
}
