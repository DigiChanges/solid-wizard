import {createContext, useContext, createSignal, JSX, Accessor, Setter} from 'solid-js';

interface CountProviderProps {
    children: JSX.Element;
}

interface StoreInterface {
    countGetter: Accessor<number>;
    countSetter: Setter<number>;
    stepsGetter: Accessor<number>;
    stepsSetter: Setter<number>;
}

const CountContext = createContext({} as StoreInterface);

export function CountProvider(props: CountProviderProps) {
    const [currentCount, setCurrentCount] = createSignal(1);
    const [stepsQuantity, setStepsQuantity] = createSignal(0);

    const store: StoreInterface = {
        countGetter: currentCount, countSetter: setCurrentCount, stepsGetter: stepsQuantity, stepsSetter: setStepsQuantity
    };

    return (
        <CountContext.Provider value={store}>
            {props.children}
        </CountContext.Provider>
    )
};

export function useCountContext() {
    return useContext(CountContext);
}
