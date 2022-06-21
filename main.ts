let numero = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.isGesture(Gesture.Shake)) {
        numero = randint(1, 6)
        if (numero == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else {
            if (numero == 2) {
                basic.showLeds(`
                    . . . . .
                    . . . # .
                    . . . . .
                    . # . . .
                    . . . . .
                    `)
            } else {
                if (numero == 3) {
                    basic.showLeds(`
                        . . . . .
                        . . . # .
                        . . # . .
                        . # . . .
                        . . . . .
                        `)
                } else {
                    if (numero == 4) {
                        basic.showLeds(`
                            . . . . .
                            . # . # .
                            . . . . .
                            . # . # .
                            . . . . .
                            `)
                    } else {
                        if (numero == 5) {
                            basic.showLeds(`
                                . . . . .
                                . # . # .
                                . . # . .
                                . # . # .
                                . . . . .
                                `)
                        } else {
                            basic.showLeds(`
                                . . . . .
                                . # . # .
                                . # . # .
                                . # . # .
                                . . . . .
                                `)
                        }
                    }
                }
            }
        }
    }
})
