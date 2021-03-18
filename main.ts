input.onButtonPressed(Button.A, function () {
    OLED.clear()
    OLED.writeStringNewLine("123456789012345689012")
    OLED.writeStringNewLine("123456789012345689012")
    OLED.writeStringNewLine("123456789012345689012")
    OLED.writeStringNewLine("123456789012345689012")
    OLED.writeStringNewLine("123456789012345689012")
    OLED.writeStringNewLine("123456789012345689012")
    OLED.writeStringNewLine("123456789012345689012")
    OLED.writeStringNewLine("123456789012345689012")
})
input.onButtonPressed(Button.AB, function () {
    OLED.clear()
})
input.onButtonPressed(Button.B, function () {
    OLED.clear()
    OLED.drawLine(
    0,
    0,
    128,
    64
    )
    OLED.drawLine(
    128,
    0,
    0,
    64
    )
    OLED.drawLine(
    1,
    1,
    127,
    1
    )
    OLED.drawLine(
    127,
    63,
    127,
    1
    )
    OLED.drawLine(
    127,
    63,
    0,
    64
    )
    OLED.drawLine(
    1,
    1,
    1,
    63
    )
})
OLED.init(128, 64)
OLED.clear()
basic.forever(function () {
    // Joystic X axis
    OLED.writeString("P0 :")
    OLED.writeNumNewLine(pins.analogReadPin(AnalogPin.P0))
    OLED.writeString("P2 :")
    OLED.writeNumNewLine(pins.analogReadPin(AnalogPin.P2))
    OLED.writeString("P3 :")
    OLED.writeNumNewLine(pins.analogReadPin(AnalogPin.P3))
    OLED.writeString("P4 :")
    OLED.writeNumNewLine(pins.analogReadPin(AnalogPin.P4))
    OLED.writeString("P10:")
    OLED.writeNumNewLine(pins.analogReadPin(AnalogPin.P10))
    basic.pause(800)
    OLED.clear()
})
