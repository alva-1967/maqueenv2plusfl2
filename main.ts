function rgb_direita () {
    maqueenPlusV2.setIndexColor(0, maqueenPlusV2.NeoPixelColors.Red)
    maqueenPlusV2.setIndexColor(1, maqueenPlusV2.NeoPixelColors.Red)
    maqueenPlusV2.setIndexColor(2, maqueenPlusV2.NeoPixelColors.Green)
    maqueenPlusV2.setIndexColor(3, maqueenPlusV2.NeoPixelColors.Green)
}
function rgb_emfrente () {
    maqueenPlusV2.setIndexColor(0, maqueenPlusV2.NeoPixelColors.Green)
    maqueenPlusV2.setIndexColor(1, maqueenPlusV2.NeoPixelColors.Green)
    maqueenPlusV2.setIndexColor(2, maqueenPlusV2.NeoPixelColors.Green)
    maqueenPlusV2.setIndexColor(3, maqueenPlusV2.NeoPixelColors.Green)
}
function rgb_esquerda () {
    maqueenPlusV2.setIndexColor(0, maqueenPlusV2.NeoPixelColors.Green)
    maqueenPlusV2.setIndexColor(1, maqueenPlusV2.NeoPixelColors.Green)
    maqueenPlusV2.setIndexColor(2, maqueenPlusV2.NeoPixelColors.Red)
    maqueenPlusV2.setIndexColor(3, maqueenPlusV2.NeoPixelColors.Red)
}
function rgb_fora () {
    maqueenPlusV2.setIndexColor(0, maqueenPlusV2.NeoPixelColors.Blue)
    maqueenPlusV2.setIndexColor(1, maqueenPlusV2.NeoPixelColors.Blue)
    maqueenPlusV2.setIndexColor(2, maqueenPlusV2.NeoPixelColors.Blue)
    maqueenPlusV2.setIndexColor(3, maqueenPlusV2.NeoPixelColors.Blue)
}
basic.clearScreen()
led.enable(false)
basic.forever(function () {
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 1 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 1) {
        rgb_emfrente()
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Close)
    } else if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 0 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 1) {
        rgb_esquerda()
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 30)
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Open)
    } else if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 1 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 0) {
        rgb_direita()
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 30)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Open)
    } else {
        rgb_fora()
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Open)
    }
})
