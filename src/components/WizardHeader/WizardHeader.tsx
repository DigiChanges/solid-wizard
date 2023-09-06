import {Component, JSX} from "solid-js";

interface WizardHeaderProps {
    children: [any, any];
}

export const WizardHeader: Component<WizardHeaderProps> = (props) => {
    return (
        <>
            {props.children as unknown as [JSX.FunctionElement]}
        </>
    )
};
