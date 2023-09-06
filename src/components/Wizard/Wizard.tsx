import {Component, JSX} from 'solid-js';
import {CountProvider} from "../../context/CountContext";

interface WizardProps {
    children: [any, any]
}
export const Wizard: Component<WizardProps> = props => {
    return (
        <CountProvider>
            {props.children as unknown as [JSX.FunctionElement]}
        </CountProvider>
    )
}
