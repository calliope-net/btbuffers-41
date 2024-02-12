function SENDoBuffer (num: number) {
    for (let Index = 0; Index <= 8; Index++) {
        oBuffer.setUint8(Index, Index)
    }
    radio.sendBuffer(oBuffer.i2c_toBuffer())
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), 1, 0, 15, lcd16x2rgb.lcd16x2_text("1"))
    SENDoBuffer(1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendNumber(7)
})
let oBuffer: i2c.i2cclass = null
oBuffer = i2c.create(10)
lcd16x2rgb.initLCD(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E))
lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), 0, 0, 15, lcd16x2rgb.lcd16x2_text("btBufferS-41"))
radio.setGroup(228)
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(7)
