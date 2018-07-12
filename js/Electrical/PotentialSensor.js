/* autogenerated from "macros/Electrical/PotentialSensor.sci" */
function PotentialSensor() {
    PotentialSensor.prototype.define = function PotentialSensor() {
        this.model = scicos_model();
        this.model.in1 = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([]);
        this.model.sim = new ScilabString(["PotentialSensor"]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var mo = modelica();
        mo.model = "PotentialSensor";
        mo.inputs = "p";
        mo.outputs = ["v"];
        this.model.equations = new ScilabDouble([mo]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"PotentialSensor\",sz(1),sz(2));"]);
        this.x = standard_define([2,2],this.model,"",list(gr_i,0));
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = ["E"];
        return new BasicBlock(this.x);
    }
    PotentialSensor.prototype.details = function PotentialSensor() {
        return this.x;
    }
    PotentialSensor.prototype.get = function PotentialSensor() {
        var options = {
        }
        return options;
    }
    PotentialSensor.prototype.set = function PotentialSensor() {
        this.x = arg1;
        return new BasicBlock(this.x);
    }
}
