import {Component, Accessor, Setter} from "solid-js";
import styles from "./wizardButton.module.css"

interface WizardButtonProps {
    children?: string;
    step: Accessor<number>;
    setStep: Setter<number>;
    next: boolean;
    stepsQuantity: number;
    buttonStyle?: string;
    disabledButtonStyle?: string;
}

export const WizardButton: Component<WizardButtonProps> = props => {
    const renderButton = () =>
    {
        if (props.next)
        {
            return <button onClick={() => props.setStep(props.step() + 1)} class={props.stepsQuantity === props.step()  ? `${styles.wizardButtonDisabled} ${props.disabledButtonStyle}` : `${styles.wizardButton} ${props.buttonStyle}`} disabled={props.stepsQuantity === props.step()}>{props.children}</button>;
        }
        return (
            <button onClick={() => props.setStep(props.step() - 1)} class={props.step() === 1 ? `${styles.wizardButtonDisabled} ${props.disabledButtonStyle}` : `${styles.wizardButton} ${props.buttonStyle}`} disabled={props.step() === 1}>{props.children}</button>
        );
    };

    return (
        renderButton()
    )
};
