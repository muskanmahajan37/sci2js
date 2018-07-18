/* autogenerated from "macros/Electrical/PMOS.sci" */
function PMOS() {
    PMOS.prototype.define = function PMOS() {
        this.model = scicos_model();
        this.W = 50.0e-6;
        this.L = 6.0e-6;
        this.Beta = 0.0105e-3;
        this.Vt = -1;
        this.K2 = 0.41;
        this.K5 = 0.839;
        this.dW = -2.5e-6;
        this.dL = -2.1e-6;
        this.RDS = 1.e+7;
        this.model.sim = new ScilabString(["PMOS"]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var mo = modelica();
        mo.model = "PMOS";
        mo.outputs = [["D"],["B"],["S"]];
        mo.inputs = "G";
        mo.parameters = list([["W"],["L"],["Beta"],["Vt"],["K2"],["K5"],["dW"],["dL"],["RDS"]],[[this.W],[this.L],[this.Beta],[this.Vt],[this.K2],[this.K5],[this.dW],[this.dL],[this.RDS]]);
        this.model.equations = new ScilabDouble([mo]);
        this.model.in = new ScilabDouble([ones(size(mo.inputs,"*"),1)]);
        this.model.out = new ScilabDouble([ones(size(mo.outputs,"*"),1)]);
        this.exprs = [[string(this.W)],[string(this.L)],[string(this.Beta)],[string(this.Vt)],[string(this.K2)],[string(this.K5)],[string(this.dW)],[string(this.dL)],[string(this.RDS)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"PMOS\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = [["I"],["I"],["I"]];
        return new BasicBlock(this.x);
    }
    PMOS.prototype.details = function PMOS() {
        return this.x;
    }
    PMOS.prototype.get = function PMOS() {
        var options = {
            W:["Width [m]",this.W],
            L:["Length [m]",this.L],
            Beta:["Transconductance parameter [A/(V*V)]",this.Beta],
            Vt:["Zero bias threshold voltage [V]",this.Vt],
            K2:["Bulk threshold parameter",this.K2],
            K5:["Reduction of pinch-off region",this.K5],
            dW:["Narrowing of channel [m]",this.dW],
            dL:["Shortening of channel [m]",this.dL],
            RDS:["Drain-Source-Resistance [Ohm]",this.RDS],
        }
        return options;
    }
    PMOS.prototype.set = function PMOS() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.W = parseFloat(arguments[0]["W"]);
            this.L = parseFloat(arguments[0]["L"]);
            this.Beta = parseFloat(arguments[0]["Beta"]);
            this.Vt = parseFloat(arguments[0]["Vt"]);
            this.K2 = parseFloat(arguments[0]["K2"]);
            this.K5 = parseFloat(arguments[0]["K5"]);
            this.dW = parseFloat(arguments[0]["dW"]);
            this.dL = parseFloat(arguments[0]["dL"]);
            this.RDS = parseFloat(arguments[0]["RDS"]);
            if (!ok) {
                break;
            }
            this.model.equations.parameters[2-1] = list(new ScilabDouble([this.W]), new ScilabDouble([this.L]), new ScilabDouble([this.Beta]), new ScilabDouble([this.Vt]), new ScilabDouble([this.K2]), new ScilabDouble([this.K5]), new ScilabDouble([this.dW]), new ScilabDouble([this.dL]), new ScilabDouble([this.RDS]));
            this.graphics.exprs = new ScilabDouble([this.exprs]);
            this.x.graphics = this.graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
