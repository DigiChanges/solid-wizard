import {Component, JSX} from "solid-js";

interface WizardHeaderProps {
    children: unknown;
}

export const WizardHeader: Component<WizardHeaderProps> = (props) => {
    return (
        <>
            {props.children as [JSX.FunctionElement]}
        </>
    )
};
