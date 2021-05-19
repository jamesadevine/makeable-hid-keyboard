const kbs = new servers.HIDKeyboardServer("KEY");
servers.startServer(kbs);

forever(function () {
	
})
let held = false
modules.button1.onUp(function() {
    if (held)
        held = false;
    else
        keyboard.mediaKey(KeyboardMediaKey.PlayPause,KeyboardKeyEvent.Press)
})
modules.button1.onHold(function () {
    held = true
    keyboard.modifierKey(KeyboardModifierKey.ControlShift, KeyboardKeyEvent.Down);
    keyboard.key("m", KeyboardKeyEvent.Down);
    pause(20);
    keyboard.clearAllKeys()
})