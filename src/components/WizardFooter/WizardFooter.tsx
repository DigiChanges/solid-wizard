import {Component, JSX} from "solid-js";

interface WizardFooterProps {
    children: [any, any];
}

export const WizardFooter: Component<WizardFooterProps> = (props) => {
    return (
        <>
            {props.children as unknown as [JSX.FunctionElement]}
        </>
    );
};
