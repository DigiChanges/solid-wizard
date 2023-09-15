import {Component, JSX} from 'solid-js';
import {CountProvider} from "../../context/CountContext";

interface WizardProps {
    children: unknown
}
export const Wizard: Component<WizardProps> = props => {
    return (
        <CountProvider>
            {props.children as [JSX.FunctionElement]}
        </CountProvider>
    )
}
