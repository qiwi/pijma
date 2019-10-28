```jsx
initialState = {success: true, warning: true, error: true, notice: true};
<Block>
  <BlockContent>
    <Spacer>
      {state.success ? (
        <SystemBanners
          type="success"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          onHide={(success) => setState({success})}
        />
      ) : (null)}
      {state.warning ? (
        <SystemBanners
          type="warning"
          text="Duis viverra hendrerit tortor, nec euismod quam mattis ac. Curabitur rutrum finibus tellus, non venenatis ante ornare vitae. Donec dolor magna, malesuada eget magna in, placerat finibus massa. Aliquam at leo sit amet arcu vestibulum venenatis quis vel neque."
          onHide={(warning) => setState({warning})}
        />
      ) : (null)}
      {state.error ? (
        <SystemBanners
          type="error"
          statical
          text="Nam rutrum, sapien vitae finibus gravida, diam sem gravida dui, eu faucibus ex tellus a mi. Aenean ut enim nec nulla maximus hendrerit."
          onHide={(error) => setState({error})}
        />
      ) : (null)}
      {state.notice ? (
        <SystemBanners
          type="notice" 
          text="Sed lobortis tincidunt felis a congue."
          onHide={(notice) => setState({notice})}
        />
      ) : (null)}
    </Spacer>
  </BlockContent>
</Block>
```
