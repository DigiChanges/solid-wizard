import {Component, JSX} from "solid-js";

interface WizardFooterProps {
    children: unknown;
}

export const WizardFooter: Component<WizardFooterProps> = (props) => {
    return (
        <>
            {props.children as [JSX.FunctionElement]}
        </>
    );
};
