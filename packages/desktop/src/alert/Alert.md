```jsx
const [success, setSuccess] = React.useState(true)
const [warning, setWarning] = React.useState(true)
const [failure, setFailure] = React.useState(true)
const [general, setGeneral] = React.useState(true)
const [warningButton, setWarningButton] = React.useState(true)
return (
  <Card bg="#fff" width={1}>
    <Striper>
      {success ? (
        <Box width={154} mx="auto">
          <Alert
            type="success"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            onHide={(success) => setSuccess(success)}
          />
        </Box>
      ) : null}
      {warning ? (
        <Box width={154} mx="auto">
          <Alert
            width={154}
            type="warning"
            text="Duis viverra hendrerit tortor, nec euismod quam mattis ac. Curabitur rutrum finibus tellus, non venenatis ante ornare vitae. Donec dolor magna, malesuada eget magna in, placerat finibus massa. Aliquam at leo sit amet arcu vestibulum venenatis quis vel neque."
            onHide={(warning) => setWarning(warning)}
          />
        </Box>
      ) : null}
      {failure ? (
        <Box width={154} mx="auto">
          <Alert
            width={154}
            type="failure"
            text="Nam rutrum, sapien vitae finibus gravida, diam sem gravida dui, eu faucibus ex tellus a mi. Aenean ut enim nec nulla maximus hendrerit."
          />
        </Box>
      ) : null}
      {general ? (
        <Box width={154} mx="auto">
          <Alert
            width={154}
            type="general"
            text="Sed lobortis tincidunt felis a congue."
            onHide={(general) => setGeneral(general)}
          />
        </Box>
      ) : null}
      {warningButton ? (
        <Box width={154} mx="auto">
          <Alert
            width={154}
            type="warning"
            text="Ограничения в вашем кошельке."
            action="Ввести данные"
            onHide={(warningButton) => setWarningButton(warningButton)}
            onClick={() => alert('Спасибо')}
          />
        </Box>
      ) : null}
    </Striper>
  </Card>
)
```
