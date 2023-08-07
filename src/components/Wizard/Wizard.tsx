import {Component, Switch, Match, JSXElement, For} from 'solid-js';

interface WizardProps {
    currentStep: number;
    fallback: JSXElement;
    stepsArray: any[]
}
export const Wizard: Component<WizardProps> = props => {
    return (
        <>
            <Switch fallback={props.fallback}>
                <For each={props.stepsArray}>{(StepComponent, index) =>
                    <Match when={props.currentStep === index() + 1}>
                        <p>Step {index() + 1}</p>
                        {StepComponent()}
                    </Match>
                }
                </For>
            </Switch>
        </>
    )
}
