/* autogenerated from "macros/Electrical/SineVoltage.sci" */
function SineVoltage() {
    SineVoltage.prototype.define = function SineVoltage() {
        model = scicos_model();
        model.in1 = [1];
        model.out = [1];
        V = 1;
        ph = 0;
        frq = 1;
        offset = 0;
        start = 0;
        model.rpar = [[V],[ph],[frq],[offset],[start]];
        model.sim = "SineVoltage";
        model.blocktype = "c";
        model.dep_ut = [true,false];
        mo = modelica();
        mo.model = "SineVoltage";
        mo.inputs = "p";
        mo.outputs = "n";
        mo.parameters = list([["V"],["phase"],["freqHz"],["offset"],["startTime"]],list(V,ph,frq,offset,start));
        model.equations = mo;
        exprs = [[string(V)],[string(ph)],[string(frq)],[string(offset)],[string(start)]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = ["I"];
    }
    SineVoltage.prototype.details = function SineVoltage() {
        return this.x;
    }
    SineVoltage.prototype.get = function SineVoltage() {
    }
    SineVoltage.prototype.set = function SineVoltage() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,V,ph,frq,offset,start,exprs] = scicos_getvalue("Set voltage source parameter",[["Amplitude (Volt)"],["phase (rad)"],["Frequency (Hz)"],["Voltageoffset (V)"],["Timeoffset (s)"]],list("vec",1,"vec",1,"vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            model.rpar = [[V],[ph],[frq],[offset],[start]];
            model.equations.parameters[2-1] = list(V,ph,frq,offset,start);
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = model;
            break;
        }
    }
}
