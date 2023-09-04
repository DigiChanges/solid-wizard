# Solid Wizard

The solid-wizard library provides a collection of ready-to-use components.

# Get started

Is so easy to use the wizard, you can do this in just some simple steps:

### Installation

If you are using npm:

    npm i @digichanges/solid-wizard
Alternatively, for pnpm users:

    pnpm install @digichanges/solid-wizard

### Create the parent component.

Import the solid-wizard components and the ones you want to display in the wizard:

```tsx
import { StepBar, StepsWrapper, Wizard, WizardButton, WizardFooter, WizardHeader } from "@digichanges/solid-wizard";
import YourStepOne from "./components/YourStepOne/YourStepOne.tsx";
import YourStepTwo from "./components/YourStepTwo/YourStepTwo.tsx";
```
Then, use the components like this:

```tsx
<Wizard>
   <WizardHeader>
     <StepBar /> 
     <StepsWrapper>
       <YourStepOne />
       <YourStepTwo />
     </StepsWrapper>
   </WizardHeader>
   <WizardFooter>
       <WizardButton/>
       <WizardButton />
   </WizardFooter>
</Wizard>
```

## Props and children

### Wizard

| Name     | Function                                                                     | Required | Type        |
|----------|------------------------------------------------------------------------------|----------|-------------|
| children | The components that are nested inside the Wizard component.                  | ✅        | [JSX.FunctionElement]  |

### WizardHeader

| Name     | Function                                                                     | Required | Type        |
|----------|------------------------------------------------------------------------------|----------|-------------|
| children | The components that are nested inside the WizardHeader component.            | ✅        | [JSX.FunctionElement]  |

### StepsWrapper

| Name     | Function                                                                         | Required | Type        |
|----------|----------------------------------------------------------------------------------|----------|-------------|
| fallback | The fallback component is needed to display something when some step is missing. | ✅        | JSX.Element |
| children | The components that you want to display in the wizard.                           | ✅        | [JSX.FunctionElement]  |

### WizardFooter

| Name     | Function                                                          | Required | Type        |
|----------|-------------------------------------------------------------------|----------|-------------|
| children | The components that are nested inside the WizardFooter component. | ✅        | [JSX.FunctionElement]  |

### WizardButton

| Name                | Function                                                                                       | Required | Type    |
|---------------------|------------------------------------------------------------------------------------------------|---------|---------|
| children            | The text that you want the button to display.                                                  | ❌        | string  |
| next                | A boolean that checks if the button should take the user to the next Step or the previous one. | ✅       | boolean |
| buttonStyle         | Here you can add a custom class to style the button.                                           | ❌       | string  |
| disabledButtonStyle | Here you can add a custom class to style the button when it is disabled.                       | ❌       | string  |

### Custom styles for StepBar

If you want you can change all the CSS properties by changing the styled CSS classes that control the component.

![](https://media.discordapp.net/attachments/1077350703443492987/1082360181628878868/image.png?width=721&height=226)
