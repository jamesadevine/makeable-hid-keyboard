const kbs = new servers.HIDKeyboardServer("KEY");
servers.startServer(kbs);

let held = false
modules.button1.onUp(function() {
    if (held)
        held = false;
    else
        keyboard.mediaKey(KeyboardMediaKey.PlayPause,KeyboardKeyEvent.Press)
})
modules.button1.onHold(function () {
    if (held)
        return
    held = true
    keyboard.mediaKey(KeyboardMediaKey.NextTrack, KeyboardKeyEvent.Press)
})