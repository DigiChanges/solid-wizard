# Wizard

The **Wizard **component is an aestetical component that allows you to show users from your app in which step is a modal or another specific component .

# Get started

Is so easy to use the wizard, you can do this in just some simple steps:

### Instalation
If you are using npm:

    npm intall solid-wizard
or if you are using pnpm:

    pnpm install solid-wizard

### Create the parent component and his management state.

1 - Import the component.

    import Wizard from 'solid-wizard';

2 - The wizard must be inside o a parent element that should have a state, this state will allows you to control the step in which wizard is found.

3 - Now you could add two buttons that will change the value of the state we created in the previous step as the example below.

![](https://media.discordapp.net/attachments/1077350703443492987/1082363523608363129/image.png?width=1439&height=625)

### Add the required props.
* add the props stepsQuantity that should receive the quantity of steps you want to have and actual step that shouls receive the state we created before.

![](https://media.discordapp.net/attachments/1077350703443492987/1081607533824843806/image.png?width=1039&height=75)

This should be te output:

![](https://media.discordapp.net/attachments/1077350703443492987/1081608684167241789/image.png?width=918&height=268)

### Props

| Name                       | Function                                                                                       | Required |
|----------------------------|------------------------------------------------------------------------------------------------|----------|
| stepsQuantity              | Defines total quantity of steps inside wizard coponent.                                        | ✅        |
| actualStep                 | Defines actual Step.                                                                           | ✅        |

If you want you can change aLL the others css properties by change the stryled css classes that controls the component.

![](https://media.discordapp.net/attachments/1077350703443492987/1082360181628878868/image.png?width=721&height=226)
