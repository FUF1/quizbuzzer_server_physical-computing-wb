enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    entries.push(radio.receivedPacket(RadioPacketProperty.SerialNumber))
    music.playTone(262, music.beat(BeatFraction.Eighth))
})
input.onButtonPressed(Button.B, function () {
    if (entries.length > 0) {
        basic.showIcon(IconNames.Happy)
        winningPlayerList = []
        for (let Index = 0; Index <= entries.length - 1; Index++) {
            let currentEntry = 0
            if (entries[currentEntry] == -1907160588) {
                winningPlayerList.push("A")
            } else if (entries[currentEntry] == -1372141027) {
                winningPlayerList.push("B")
            } else if (entries[currentEntry] == 943271416) {
                winningPlayerList.push("C")
            } else if (entries[currentEntry] == 1472197505) {
                winningPlayerList.push("D")
            } else if (entries[currentEntry] == -1850258811) {
                winningPlayerList.push("E")
            } else {
                winningPlayerList.push("")
            }
        }
        for (let Index = 0; Index <= winningPlayerList.length - 1; Index++) {
            sendText = "" + sendText + "; " + winningPlayerList[Index]
        }
        serial.writeLine(sendText)
        entries = []
        basic.pause(100)
        basic.clearScreen()
        while (!(input.buttonIsPressed(Button.A))) {
            basic.showString("" + (winningPlayerList[0]))
        }
        basic.clearScreen()
        music.playMelody("G B A G C5 B A B ", 600)
        sendText = ""
        basic.showIcon(IconNames.House)
        basic.pause(100)
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
        music.playMelody("C5 A B G A F G E ", 600)
    } else {
        music.playTone(147, music.beat(BeatFraction.Half))
    }
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
