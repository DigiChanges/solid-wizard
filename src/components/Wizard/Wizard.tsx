import {Component, Switch, Match, For, JSX, createSignal} from 'solid-js';
import {WizardButton} from "../WizardButton/WizardButton";
import {StepBar} from "../StepBar/StepBar";

interface WizardProps {
    fallback: JSX.Element;
    children: any;
    buttonStyle?: string;
    disabledButtonStyle?: string;
}
export const Wizard: Component<WizardProps> = props => {
    const [currentStep, setCurrentStep] = createSignal(1);
    return (
        <>
            <Switch fallback={props.fallback}>
                <For each={props.children}>{(StepComponent, index) =>
                    <Match when={currentStep() === index() + 1} keyed={true}>
                        <StepBar stepsQuantity={props.children.length} actualStep={currentStep()} />
                        {StepComponent()}
                        <WizardButton step={currentStep} setStep={setCurrentStep} next={false} stepsQuantity={props.children.length} buttonStyle={props.buttonStyle} disabledButtonStyle={props.disabledButtonStyle}>Prev</WizardButton>
                        <WizardButton step={currentStep} setStep={setCurrentStep} next={true} stepsQuantity={props.children.length} buttonStyle={props.buttonStyle} disabledButtonStyle={props.disabledButtonStyle}>Next</WizardButton>
                    </Match>
                }
                </For>
            </Switch>
        </>
    )
}
