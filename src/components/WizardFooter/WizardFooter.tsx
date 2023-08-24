import {Component} from "solid-js";

interface WizardFooterProps {
    children: any;
}

export const WizardFooter: Component<WizardFooterProps> = (props) => {
    return (
        <>
            {props.children}
        </>
    );
};
