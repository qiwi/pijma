# Contributing to Pijma

## The idea

* Render Props
* Primitives Composition

`Component` is a React function component (`React.FC`)

Markup of `Component` is composition of primitives (`Box`, `Card`, `Pos`, `Flex`, `FlexItem`, etc.)

```jsx
export interface ComponentProps {
  ...
}

export const Component: React.FC<ComponentProps> = (props) => (
  <ComponentControl
    ...
    children={(renderProps) => (
      ...
    )}
  />
)
```

`ComponentControl` is a React class component (`React.Component`, `React.PureCompoent`)

```jsx
export interface ComponentControlProps {
  ...
  children: RenderChild<{
    ...
  }>
}

export interface ComponentControlState {
  ...
}

export class ComponentControl extends React.Component<ComponentControlProps, ComponentControlState> {
  
  public state = {
    ...
  }
  
  public render() {
    return this.props.children({
      ...
    })
  }
  
}
```

## Commit Message Guidelines
Relies on [conventional commits](https://www.conventionalcommits.org) contract:
```
<type>(<scope>): <subject>
```

### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies
* **ci**: Changes to our CI configuration files and scripts
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code
* **test**: Adding missing tests or correcting existing tests
* **chore**: Routine: releases, tech commits, minor tweak ups, etc.

### Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages.

### Subject

The subject contains a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end
