import { Component, For } from 'solid-js';
import styles from './stepBar.module.css';
import {useCountContext} from "../../context/CountContext";

interface stepBarProps {}
export const StepBar: Component<stepBarProps> = ( props ) =>
{
    const store = useCountContext();
    const numbers = Array( store.stepsGetter()).fill( 'element' );

    return (
        <div class={styles.wizardContainer}>
            <For each={numbers}>{
                ( number, index ) =>
                    <>
                        <div class={store.countGetter() >= index() + 1 ? styles.wizardStepActive : styles.wizardStepInactive}>
                            {index() + 1}
                        </div>
                        {index() < store.stepsGetter() - 1 &&
                        <div class={store.countGetter() > index() + 1 ? styles.lineActive : styles.lineInactive} />
                        }
                    </>
            }
            </For>

        </div >
    );
};
