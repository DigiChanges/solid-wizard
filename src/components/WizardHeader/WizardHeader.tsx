import {Component} from "solid-js";

interface WizardHeaderProps {
    children: any;
}

export const WizardHeader: Component<WizardHeaderProps> = (props) => {
    return (
        <>
            {props.children}
        </>
    )
};
