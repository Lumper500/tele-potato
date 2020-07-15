radio.onReceivedNumber(function (receivedNumber) {
    potato = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    potato = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    if (potato > 0) {
        radio.sendNumber(potato)
        potato = -1
    }
})
let potato = 0
potato = -1
radio.setGroup(10)
basic.forever(function () {
    if (potato == 0) {
        basic.showIcon(IconNames.Skull)
    }
    if (potato < 0) {
        basic.clearScreen()
    }
    if (potato > 0) {
        basic.showIcon(IconNames.Chessboard)
        potato += -1
    }
})
