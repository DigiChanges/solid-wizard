import {Component} from "solid-js";
import styles from "./wizardButton.module.css";
import {useCountContext} from "../../context/CountContext";

interface WizardButtonProps {
    children?: string;
    next: boolean;
    buttonStyle?: string;
    disabledButtonStyle?: string;
}

export const WizardButton: Component<WizardButtonProps> = props => {

    const store = useCountContext();
    const renderButton = () =>
    {
        if (props.next)
        {
            return <button onClick={() => store.stepsSetter(store.countGetter() + 1)} class={store.stepsGetter() === store.countGetter()  ? `${styles.wizardButtonDisabled} ${props.disabledButtonStyle}` : `${styles.wizardButton} ${props.buttonStyle}`} disabled={store.stepsGetter()  === store.countGetter()}>{props.children}</button>;
        }
        return (
            <button onClick={() => store.stepsSetter(store.countGetter() - 1)} class={store.countGetter() === 1 ? `${styles.wizardButtonDisabled} ${props.disabledButtonStyle}` : `${styles.wizardButton} ${props.buttonStyle}`} disabled={store.countGetter() === 1}>{props.children}</button>
        );
    };

    return (
        renderButton()
    )
};
