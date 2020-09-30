let light2 = 0
basic.forever(function () {
    light2 = input.lightLevel()
    if (light2 >= 0 && light2 <= 100) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (light2 >= 101 && light2 <= 150) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (light2 >= 151 && light2 <= 255) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
