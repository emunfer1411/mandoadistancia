IR.IR_callbackUser(function (message) {
    basic.showNumber(IR.IR_read())
    if (message == 24) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
    }
    if (message == 82) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, velocidad)
    }
    if (message == 90) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, velocidad)
    }
    if (message == 8) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, velocidad)
    }
    if (message == 28) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
let velocidad = 0
velocidad = 40
basic.forever(function () {
	
})
