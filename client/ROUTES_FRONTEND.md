<Login> /login -> User login

<Register> /register -> New User login

<Profile> /profile -> Shows user profile,watch log component, history and an arregate analysis of their mood(s) across all videos

<Home> /home -> User logout, Show a webcam to detect user's emotion and shows an emoji based on their mood, Shows YouTube videos, shows a graph based on the users reaction to the video

<PlayVideo> /playvideo -> Shows YouTube videos
<Watchlog> /watch_logs -> Show user watch_log history

<Webcam> /webcam -> Show a webcam to detect user's emotion

```html
<Switch>
  <Route path="/login">
    <Login login="{login}" />
  </Route>

  <Route path="/register">
    <Register register="{register}" />
  </Route>

  <Route path="/logout">{/* <Logout /> */}</Route>

  <Route path="/">
    <Home logout="{logout}" user="{state.user}" />
    <PlayVideo />
    <Webcam />
  </Route>

  <Route path="/profile">
    <Profile />
    <Watchlog />
  </Route>

  <Route path="/playvideo">
    <Webcam user="{state.user}" />
    <PlayVideo />
  </Route>

  <Route path="/webcam">
    <Webcam />
  </Route>

  <Route path="/watch_logs">
    <Watchlog />
  </Route>
</Switch>
```
