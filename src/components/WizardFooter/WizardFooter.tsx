import {Component, JSX} from "solid-js";

interface WizardFooterProps {
    children: [JSX.FunctionElement];
}

export const WizardFooter: Component<WizardFooterProps> = (props) => {
    return (
        <>
            {props.children}
        </>
    );
};
