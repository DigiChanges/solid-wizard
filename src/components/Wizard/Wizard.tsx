import {Component, JSX} from 'solid-js';
import {CountProvider} from "../../context/CountContext";

interface WizardProps {
    fallback: JSX.Element;
    children: any;
}
export const Wizard: Component<WizardProps> = props => {
    return (
        <CountProvider>
            {props.children}
        </CountProvider>
    )
}
