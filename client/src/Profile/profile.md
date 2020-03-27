###
<Profile>
container 
-all log entries for user & and all user watch logs (stored as local state here)

<Historylist>
lists the watch logs (default view)

<Historylistitem>
each watchlog belogning to the user, contains: date and an average reaction for the watch log, clicking it will transition to the watchlog, hiding the others and showing the entries

<WatchLog>
transitioned to when the a history listitem is clicked 

<Loglist> 
child of Watchlog, lists each entry in the selected watchlog

<Logitem>
child of Loglist
shows the user's reaction to each video
and the video

// not sure about the video and how to get it and render it
