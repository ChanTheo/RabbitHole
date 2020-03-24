Step 1 :
ROUTES_FRONTEND.md
/videos -> Shows something
/login
/register
/profile -> Shows user profile and watch log component

Step 2 : make sure the routes in App.js are matching what you said
APP.JS

<Route path="/profile">
<UserProfile />
<WatchLogs />
</Route>

  <Switch>
    <Route path="/login">
      <Login login={login} />
    </Route>
    <Route path="/register">
      <Register register={register} />
    </Route>
    <Route path="/logout">{/* <Logout /> */}</Route>
    <Route path="/playvideo">
      <Webcam user={state.user} />
      <PlayVideo />
    </Route>
    <Route path="/webcam">
      <Webcam user={state.user} />
    </Route>
    <Route path="/">
      <Home logout={logout} user={state.user} />
    </Route>
  </Switch>
