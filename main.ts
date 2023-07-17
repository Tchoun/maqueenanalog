radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    } else if (receivedString == "E") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
        if (OuverturePince < 175) {
            OuverturePince += 1
            maqueen.servoRun(maqueen.Servos.S1, OuverturePince)
        } else {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    } else if (receivedString == "D") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
    } else if (receivedString == "C") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
        if (OuverturePince > 11) {
            OuverturePince += -1
            maqueen.servoRun(maqueen.Servos.S1, OuverturePince)
        } else {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    } else if (receivedString == "A") {
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
        Booster = 1
    } else if (receivedString == "B") {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        Booster = 2
    } else {
    	
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "MA") {
        if (value > 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, value * Booster)
        } else if (value < 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Math.abs(value * Booster))
        } else {
            maqueen.motorStop(maqueen.Motors.M1)
        }
    } else if (name == "MB") {
        if (value > 0) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, value * Booster)
        } else if (value < 0) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Math.abs(value * Booster))
        } else {
            maqueen.motorStop(maqueen.Motors.M2)
        }
    }
})
let OuverturePince = 0
let Booster = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.setGroup(1)
Booster = 1
OuverturePince = 174
maqueen.servoRun(maqueen.Servos.S1, OuverturePince)
