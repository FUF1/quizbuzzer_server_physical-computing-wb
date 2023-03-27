enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    entries.push(radio.receivedPacket(RadioPacketProperty.SerialNumber))
    music.playTone(262, music.beat(BeatFraction.Eighth))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    winningPlayerList = []
    for (let Index = 0; Index <= entries.length - 1; Index++) {
        let currentEntry = 0
        if (entries[currentEntry] == -1907160588) {
            winningPlayerList.push("A")
            if (entries[currentEntry] == 0) {
                winningPlayerList.push("B")
                if (entries[currentEntry] == 0) {
                    winningPlayerList.push("C")
                    if (entries[currentEntry] == 0) {
                        winningPlayerList.push("D")
                        if (entries[currentEntry] == 0) {
                            winningPlayerList.push("E")
                        }
                    }
                }
            }
        }
    }
    for (let Index = 0; Index <= entries.length - 1; Index++) {
        sendText = "" + sendText + "; " + entries[Index]
    }
    serial.writeLine(sendText)
    basic.pause(100)
    basic.clearScreen()
    while (!(input.buttonIsPressed(Button.A))) {
        basic.showString("" + (winningPlayerList[0]))
    }
    basic.clearScreen()
    music.playMelody("G B A G C5 B A B ", 600)
    entries = []
    sendText = ""
    basic.showIcon(IconNames.House)
    basic.pause(100)
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.clearScreen()
    music.playMelody("C5 A B G A F G E ", 600)
})
let winningPlayerList: string[] = []
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
