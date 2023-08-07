import { Component, For } from 'solid-js';
import styles from './stepBar.module.css';

interface stepBarProps {
    stepsQuantity: number;
    actualStep: number;
}
export const StepBar: Component<stepBarProps> = ( props ) =>
{
    const numbers = Array( props.stepsQuantity ).fill( 'element' );

    return (
        <div class={styles.wizardContainer}>
            <For each={numbers}>{
                ( number, index ) =>
                    <>
                        <div class={props.actualStep >= index() + 1 ? styles.wizardStepActive : styles.wizardStepInactive}>
                            {index() + 1}
                        </div>
                        {index() < props.stepsQuantity - 1 &&
                        <div class={props.actualStep > index() + 1 ? styles.lineActive : styles.lineInactive} />
                        }
                    </>
            }
            </For>

        </div >
    );
};
