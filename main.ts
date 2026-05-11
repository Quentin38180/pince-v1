input.onLogoEvent(TouchButtonEvent.Touched, function () {
    servos.P1.setAngle(90)
})
input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(65)
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(104)
})
servos.P1.setAngle(90)
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
