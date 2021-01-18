```jsx
initialState = {success: true, warning: true, failure: true, general: true, warningButton: true};
<Card bg="#fff" width={1}>
  <Striper>
    {state.success ? (
      <Box width={154} mx="auto">
        <Alert
          type="success"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          onHide={(success) => setState({success})}
        />
      </Box>
    ) : (
      null
    )}
    {state.warning ? (
      <Box width={154} mx="auto">
        <Alert
          width={154}
          type="warning"
          text="Duis viverra hendrerit tortor, nec euismod quam mattis ac. Curabitur rutrum finibus tellus, non venenatis ante ornare vitae. Donec dolor magna, malesuada eget magna in, placerat finibus massa. Aliquam at leo sit amet arcu vestibulum venenatis quis vel neque."
          onHide={(warning) => setState({warning})}
        />
      </Box>
    ) : (
      null
    )}
    {state.failure ? (
      <Box width={154} mx="auto">
        <Alert
          width={154}
          type="failure"
          text="Nam rutrum, sapien vitae finibus gravida, diam sem gravida dui, eu faucibus ex tellus a mi. Aenean ut enim nec nulla maximus hendrerit."
        />
      </Box>
    ) : (
      null
    )}
    {state.general ? (
      <Box width={154} mx="auto">
        <Alert
          width={154}
          type="general" 
          text="Sed lobortis tincidunt felis a congue."
          onHide={(general) => setState({general})}
        />
      </Box>
    ) : (
      null
    )}
    {state.warningButton ? (
      <Box width={154} mx="auto">
        <Alert
          width={154}
          type="warning"
          text="Ограничения в вашем кошельке."
          action="Ввести данные"
          onHide={(warningButton) => setState({warningButton})}
          onClick={() => alert('Спасибо')}
        />
      </Box>
    ) : (
      null
    )}
  </Striper>
</Card>
```
