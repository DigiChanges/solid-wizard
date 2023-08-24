import {Component, For, JSX, Match, Switch} from "solid-js";
import {useCountContext} from "../../context/CountContext";

interface StepsWrapperProps {
    children: any;
    fallback: JSX.Element;
}

export const StepsWrapper: Component<StepsWrapperProps> = (props) =>
{
    const store = useCountContext();

    return (
        <>
            <Switch fallback={props.fallback}>
                <For each={props.children}>{(StepComponent, index) =>
                <Match when={store.stepsGetter() === index() + 1} keyed={true}>
                    {StepComponent()}
                </Match>
                }
                </For>
            </Switch>
        </>
    )
};
