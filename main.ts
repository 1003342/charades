input.onButtonPressed(Button.A, function () {
    game.setLife(5)
    Seconds = 60
    basic.showNumber(Seconds)
})
input.onGesture(Gesture.LogoUp, function () {
    index = randint(0, text_list.length - 1)
    basic.showString("" + (text_list[index]))
})
input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
let text_list: string[] = []
let index = 0
let Seconds = 0
basic.showString("Press A to start")
basic.forever(function () {
    while (Seconds > 0) {
        basic.pause(1000)
        Seconds += -1
    }
    if (Seconds == 0) {
        game.gameOver()
    }
})
basic.forever(function () {
    text_list = [
    "BARKING",
    "SLEEPING",
    "BOWLING",
    "TYPING ",
    "FISHING",
    "FIGHTING",
    "DANCING",
    "SHOPPING",
    "EATING",
    "CRYING",
    "TALKING"
    ]
})
