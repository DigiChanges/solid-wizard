import {Component, Accessor, Setter} from "solid-js";
import styles from "./wizardButton.module.css"

interface WizardButtonProps {
    children?: string;
    step: Accessor<number>;
    setStep: Setter<number>;
    next: boolean;
    stepsQuantity: number;
}

export const WizardButton: Component<WizardButtonProps> = props => {
    const renderButton = () =>
    {
        if (props.next)
        {
            return <button onClick={() => props.setStep(props.step() + 1)} class={props.stepsQuantity === props.step()  ? styles.wizardButtonDisabled : styles.wizardButton} disabled={props.stepsQuantity === props.step()  ? true : false }>{props.children}</button>;
        }
        return (
            <button onClick={() => props.setStep(props.step() - 1)} class={props.step() === 1 ? styles.wizardButtonDisabled : styles.wizardButton} disabled={props.step() === 1 ? true : false}>{props.children}</button>
        );
    };

    return (
        renderButton()
    )
};
