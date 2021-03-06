/* autogenerated from "macros/Electrical/VVsourceAC.sci" */
function VVsourceAC() {
    VVsourceAC.prototype.define = function VVsourceAC() {
        this.model = scicos_model();
        this.model.in = new ScilabDouble([1],[1]);
        this.model.out = new ScilabDouble([1]);
        var VA = 220;
        this.FR = 50;
        this.model.rpar = new ScilabDouble([this.FR]);
        this.model.sim = new ScilabString(["VVsourceAC"]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var mo = modelica();
        mo.model = "VVsourceAC";
        mo.inputs = ["p","VA"];
        mo.outputs = "n";
        mo.parameters = list(["f"],list(this.FR));
        this.model.equations = new ScilabDouble([mo]);
        var exprs = [string(this.FR)];
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"VVsourceAC\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabString(exprs),list(gr_i,0));
        this.x.graphics.in_implicit = ["I","E"];
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    VVsourceAC.prototype.details = function VVsourceAC() {
        return this.x;
    }
    VVsourceAC.prototype.get = function VVsourceAC() {
        var exprs = this.graphics.exprs;
        this.set_param_popup_title = "Set voltage source parameter";
        var options = {
            FR:["Frequency (Hz)",this.FR],
        }
        return options;
    }
    VVsourceAC.prototype.set = function VVsourceAC() {
        var exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.FR = parseFloat(arguments[0]["FR"]);
            var exprs = [arguments[0]["FR"]];
            if (!ok) {
                break;
            }
            this.model.rpar = new ScilabDouble([this.FR]);
            this.model.equations.parameters[2-1] = list(new ScilabDouble([this.FR]));
            this.graphics.exprs = new ScilabDouble([exprs]);
            this.x.graphics = this.graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
    VVsourceAC.prototype.get_popup_title = function VVsourceAC() {
        return this.set_param_popup_title;
    }
    VVsourceAC.prototype.importset = function VVsourceAC() {
        var graphics = this.x.graphics;
        var ary = getData(graphics.exprs);
        this.FR = ary[0];
    }
    VVsourceAC.prototype.getContainer = function VVsourceAC() { return new BasicBlock(this.x); }
}
