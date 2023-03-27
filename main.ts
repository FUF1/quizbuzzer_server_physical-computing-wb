enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    entries.push(radio.receivedPacket(RadioPacketProperty.SerialNumber))
    music.playTone(262, music.beat(BeatFraction.Eighth))
})
input.onButtonPressed(Button.A, function () {
    entries = []
    sendText = ""
    basic.showIcon(IconNames.House)
    basic.pause(100)
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.clearScreen()
    music.playMelody("C5 A B G A F G E ", 600)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    for (let Index = 0; Index <= entries.length; Index++) {
        sendText = "sendText" + "; " + entries[Index]
    }
    serial.writeLine("" + (sendText))
    basic.pause(100)
    basic.clearScreen()
    music.playMelody("G B A G C5 B A B ", 600)
})
let sendText = ""
let entries: number[] = []
radio.setGroup(4)
radio.setTransmitPower(7)
serial.setBaudRate(BaudRate.BaudRate115200)
serial.redirectToUSB()
entries = []
sendText = ""
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
	
})
