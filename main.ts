function saikoro () {
    if (乱数 == 1) {
        Ｘ = 2
        Y = 2
        led.plot(Ｘ, Y)
        basic.pause(1000)
        basic.clearScreen()
    } else if (乱数 == 2) {
        led.plot(1, 1)
        led.plot(2, 2)
        basic.pause(1000)
        basic.clearScreen()
    } else if (乱数 == 3) {
        led.plot(1, 1)
        Y += 1
        Ｘ += 1
        led.plot(Ｘ, Y)
    } else if (乱数 == 4) {
        Ｘ = 0
        Y = 0
        led.plot(Ｘ, Y)
        while (Ｘ == 0) {
            Ｘ += 4
            led.plot(Ｘ, Y)
        }
    } else if (乱数 == 5) {
        Ｘ += 1
        Y += 1
        led.plot(Ｘ, Y)
    } else if (乱数 == 6) {
        led.plot(Ｘ, Y)
        Y += 1
    } else {
        basic.clearScreen()
    }
}
let Y = 0
let Ｘ = 0
let 乱数 = 0
basic.showString("start")
basic.forever(function () {
    乱数 = randint(0, 6)
    saikoro()
})
