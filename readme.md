# solid-wizard

The solid-wizard library provides a collection of three ready-to-use components: `Wizard`, `WizardButton`, and `StepBar`.

## Wizard Component

The `Wizard` component serves as a dynamic interface for managing and displaying various components based on the user's current step.

## WizardButton Component

The `WizardButton` component lets users navigate through different steps. The "back" button automatically deactivates when on the first step, and similarly, the "next" button deactivates when on the final step.

## StepBar Component

The `StepBar` component is an aesthetical component that allows you to show users from your app which step is a modal or another specific component.

# Get started

Is so easy to use the wizard, you can do this in just some simple steps:

### Installation

If you are using npm:

    npm i @digichanges/solid-wizard
Alternatively, for pnpm users:

    pnpm install @digichanges/solid-wizard

### Create the parent component and its management state.

Import the solid-wizard components and the ones you want to display in the wizard:

    import { Wizard, WizardButton, StepBar } from "@digichanges/solid-wizard";

    import StepOne from "./components/StepOne/StepOne";

And now you can follow the next steps:

1 - The wizard must be inside a parent element that should have a state, this state will allow you to control the step in which the wizard is found.

2 - Make an array filled with the step components in the order that you want them to be displayed.

3 - Add the `Wizard` component with its corresponding props.

4 - Add two `WizardButtons`, one to go back and the other to go next.

5 - Add the `StepBar` with its corresponding props.

![](https://cdn.discordapp.com/attachments/1138540438752612446/1138543563249029221/Screen_Shot_2023-08-08_at_3.37.21_PM.png)

### Wizard Props

| Name        | Function                                                                  | Required | Type        |
|-------------|---------------------------------------------------------------------------|----------|-------------|
| currentStep | Defines current step.                                                     | ✅        | number      |
| fallback    | Fallback component is needed to display something when some step is missing. | ✅        | JSX.Element |
| stepsArray  | Defines the steps that will be shown and in which order.                 | ✅        | Function[]  |

### WizardButton Props

| Name          | Function                                                                                              | Required | Type              |
|---------------|-------------------------------------------------------------------------------------------------------|----------|-------------------|
| step          | Defines current step.                                                                                 | ✅        | Accessor<number>  |
| setStep       | The signal setter of the current step that lets the button function.                                  | ✅        | Setter<number>    |
| next          | Defines if this is the "next" button. If true, clicking it sets the current step to `currentStep + 1` | ✅        | boolean           |
| stepsQuantity | Defines the total quantity of steps inside the wizard component.                                      | ✅        | number            |
| children      | Defines the text inside the button.                                                                   | ❌        | string            |


### StepBar Props

| Name                       | Function                                                                                       | Required | Type   |
|----------------------------|------------------------------------------------------------------------------------------------|----------|--------|
| stepsQuantity              | Defines the total quantity of steps inside the wizard component.                               | ✅        | number |
| actualStep                 | Defines actual Step.                                                                           | ✅        | number |


### Example in CodeSandbox

This should be the output:

https://codesandbox.io/p/sandbox/weathered-dew-c3l975?file=%2Fsrc%2FApp.tsx%3A3%2C1-4%2C52

### Custom styles

If you want you can change all the other CSS properties by changing the styled CSS classes that control the component.

![](https://media.discordapp.net/attachments/1077350703443492987/1082360181628878868/image.png?width=721&height=226)
