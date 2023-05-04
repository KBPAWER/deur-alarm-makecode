radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 101) {
        basic.pause(5000)
        control.reset()
    } else if (receivedNumber == 111011) {
        basic.showIcon(IconNames.Sad)
        while (true) {
            music.playTone(212, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    }
})
input.onPinReleased(TouchPin.P1, function () {
    radio.sendNumber(111011)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(101)
    basic.showIcon(IconNames.Heart)
})
music.setBuiltInSpeakerEnabled(true)
basic.showIcon(IconNames.Heart)
radio.setGroup(136)
radio.sendNumber(0)
