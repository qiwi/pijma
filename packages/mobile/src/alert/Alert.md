```jsx
initialState = {success: true, warning: true, failure: true, general: true, warningButton: true};
<Card bg="#fff">
  {state.success ? (
    <Alert
      type="success"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      onHide={(success) => setState({success})}
    />
  ) : (
    null
  )}
  {state.warning ? (
    <Alert
      type="warning"
      text="Duis viverra hendrerit tortor, nec euismod quam mattis ac. Curabitur rutrum finibus tellus, non venenatis ante ornare vitae. Donec dolor magna, malesuada eget magna in, placerat finibus massa. Aliquam at leo sit amet arcu vestibulum venenatis quis vel neque."
      onHide={(warning) => setState({warning})}
    />
  ) : (
    null
  )}
  {state.failure ? (
    <Alert
      type="failure"
      text="Nam rutrum, sapien vitae finibus gravida, diam sem gravida dui, eu faucibus ex tellus a mi. Aenean ut enim nec nulla maximus hendrerit."
    />
  ) : (
    null
  )}
  {state.general ? (
    <Alert
      type="general" 
      text="Sed lobortis tincidunt felis a congue."
      onHide={(general) => setState({general})}
    />
  ) : (
    null
  )}
  {state.warningButton ? (
    <Alert
      type="warning"
      text="Ограничения в вашем кошельке."
      action="Ввести данные"
      onHide={(warningButton) => setState({warningButton})}
      onClick={() => alert('Спасибо')}
    />
  ) : (
    null
  )}
</Card>
```
