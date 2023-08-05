import {Component, Accessor, Setter} from "solid-js";

interface WizardButtonProps {
    children: string;
    step: Accessor<number>;
    setStep: Setter<number>;
    next: boolean;
    stepsQuantity: number;
}

const WizardButton: Component<WizardButtonProps> = props => {
    const renderButton = () =>
    {
        if (props.next)
        {
            return <button onClick={() => props.setStep(props.step() + 1)} class={props.stepsQuantity === props.step()  ? 'disabled nextStep' : 'nextStep'} disabled={props.stepsQuantity === props.step()  ? true : false }>{props.children}</button>;
        }
        return (
            <button onClick={() => props.setStep(props.step() - 1)} class={props.step() === 1 ? 'prevStep disabled' : 'prevStep'} disabled={props.step() === 1 ? true : false}>{props.children}</button>
        );
    };

    return (
        renderButton()
    )
};

export default WizardButton
