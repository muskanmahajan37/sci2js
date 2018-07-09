/* autogenerated from "macros/Electrical/VoltageSensor.sci" */
function VoltageSensor() {
    VoltageSensor.prototype.define = function VoltageSensor() {
        this.model = scicos_model();
        this.model.in1 = new ScilabDouble(1);
        this.model.out = [[1],[1]];
        this.model.sim = new ScilabString("VoltageSensor");
        this.model.blocktype = new ScilabString("c");
        this.model.dep_ut = [true,false];
        mo = modelica();
        mo.model = "VoltageSensor";
        mo.inputs = "p";
        mo.outputs = [["n"],["v"]];
        this.model.equations = new ScilabDouble(mo);
        exprs = [];
        gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = [["I"],["E"]];
        return new VoltageSensorBlock(this.x);
    }
    VoltageSensor.prototype.details = function VoltageSensor() {
        return this.x;
    }
    VoltageSensor.prototype.get = function VoltageSensor() {
        var options = {
        }
        return options;
    }
    VoltageSensor.prototype.set = function VoltageSensor() {
        this.x = arg1;
        return new VoltageSensorBlock(this.x);
    }
}
