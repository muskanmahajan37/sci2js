/* autogenerated from "macros/MatrixOp/MATZREIM.sci" */
function MATZREIM() {
    MATZREIM.prototype.define = function MATZREIM() {
        this.model = scicos_model();
        var function_name = "matz_reim";
        var funtyp = 4;
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in1 = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.intyp = new ScilabDouble([2]);
        this.model.out = new ScilabDouble([-1],[-1]);
        this.model.out2 = new ScilabDouble([-2],[-2]);
        this.model.outtyp = new ScilabDouble([1,1]);
        this.model.evtin = new ScilabDouble([]);
        this.model.evtout = new ScilabDouble([]);
        this.model.state = new ScilabDouble([]);
        this.model.dstate = new ScilabDouble([]);
        this.model.rpar = new ScilabDouble([]);
        this.model.ipar = new ScilabDouble([]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var label = sci2exp(1);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATZREIM\",sz(1),sz(2));"]);
        this.x = standard_define([3,2],this.model,label,gr_i);
        return new BasicBlock(this.x);
    }
    MATZREIM.prototype.details = function MATZREIM() {
        return this.x;
    }
    MATZREIM.prototype.get = function MATZREIM() {
        var options = {
            decomptyp:["decomposition type (1=Complex2Real&Imag 2=Real&Imag2Complex)",this.decomptyp],
        }
        return options;
    }
    MATZREIM.prototype.set = function MATZREIM() {
        this.decomptyp = arguments[0]["decomptyp"]
        this.lab = arguments[0]["lab"]
        this.x = arg1;
        this.model = arg1.model;
        this.graphics = arg1.graphics;
        var label = this.graphics.exprs;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,this.decomptyp,this.lab] = scicos_getvalue("Set MATZREIM block parameters",["decomposition type (1=Complex2Real&Imag 2=Real&Imag2Complex)"],list("vec",1),label);
            if (!ok) {
                break;
            }
            var label = this.lab;
            if ((this.decomptyp==1)) {
                var function_name = "matz_reim";
                var in1 = [-1,-2];
                var it = 2;
                var out = [[-1,-2],[-1,-2]];
                var ot = [1,1];
            } else if ((this.decomptyp==2)) {
                var function_name = "matz_reimc";
                var in1 = [[-1,-2],[-1,-2]];
                var it = [1,1];
                var out = [-1,-2];
                var ot = 2;
            } else {
                message("decomposition type is not supported");
                var ok = false;
            }
            var funtyp = 4;
            if (ok) {
                var tmpvar0 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),[],[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
            }
            if (ok) {
                this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
                arg1.model = this.model;
                this.graphics.exprs = new ScilabDouble([label]);
                arg1.graphics = this.graphics;
                this.x = arg1;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
