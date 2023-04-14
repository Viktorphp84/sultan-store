import React, { createContext, useContext, useState } from 'react';

interface User {
    name: string;
}

interface CurrentUserContextValue {
    currentUser: User | null;
    setCurrentUser: (user: User) => void;
}

const CurrentUserContext = createContext<CurrentUserContextValue>({
    currentUser: null,
    setCurrentUser: () => { },
});

export default function MyApp() {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            <Form />
        </CurrentUserContext.Provider>
    );
}

function Form({ children }: { children?: React.ReactNode }) {
    return (
        <Panel title="Welcome">
            <LoginButton />
        </Panel>
    );
}

function LoginButton() {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    if (currentUser !== null) {
        return <p>You logged in as {currentUser.name}.</p>;
    }

    return (
        <Button onClick={() => setCurrentUser({ name: 'Advika' })}>
            Log in as Advika
        </Button>
    );
}

function Panel({ title, children }: { title: string; children?: React.ReactNode }) {
    return (
        <section className="panel">
            <h1>{title}</h1>
            {children}
        </section>
    );
}

function Button({ children, onClick }: { children?: React.ReactNode; onClick: () => void }) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
}