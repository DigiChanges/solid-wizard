import {Component, For, JSX, Match, Switch} from "solid-js";
import {useCountContext} from "../../context/CountContext";

interface StepsWrapperProps {
    children: unknown[];
    fallback: JSX.Element;
}

export const StepsWrapper: Component<StepsWrapperProps> = (props) =>
{
    const store = useCountContext();

    store.stepsSetter(props.children.length);

    return (
        <>
            <Switch fallback={props.fallback}>
                <For each={props.children as [JSX.FunctionElement]}>{(StepComponent, index) =>
                <Match when={store.stepsGetter() === index() + 1} keyed={true}>
                    {StepComponent()}
                </Match>
                }
                </For>
            </Switch>
        </>
    )
};
