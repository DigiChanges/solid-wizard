import {Component, JSX} from "solid-js";

interface WizardHeaderProps {
    children: [JSX.FunctionElement];
}

export const WizardHeader: Component<WizardHeaderProps> = (props) => {
    return (
        <>
            {props.children}
        </>
    )
};
