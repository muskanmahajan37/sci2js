/* autogenerated from "macros/Misc/generic_block2.sci" */
function generic_block2() {
    generic_block2.prototype.define = function generic_block2() {
        this.model = scicos_model();
        this.function_name = "sinblk";
        this.funtyp = 1;
        this.model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        this.model.in = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([]);
        this.model.evtout = new ScilabDouble([]);
        this.model.state = new ScilabDouble([]);
        this.model.dstate = new ScilabDouble([]);
        this.model.rpar = new ScilabDouble([]);
        this.model.ipar = new ScilabDouble([]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var label = [[this.function_name],[sci2exp(this.funtyp)],[sci2exp(this.model.in)],[sci2exp(this.model.out)],[sci2exp(this.model.evtin)],[sci2exp(this.model.evtout)],[sci2exp(this.model.state)],[sci2exp(this.model.dstate)],[sci2exp(this.model.rpar)],[sci2exp(this.model.ipar)],[sci2exp(this.model.nmode)],[sci2exp(this.model.nzcross)],[sci2exp(this.model.firing)],["y"],["n"]];
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"generic_block2\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble(label),gr_i);
        return new BasicBlock(this.x);
    }
    generic_block2.prototype.details = function generic_block2() {
        return this.x;
    }
    generic_block2.prototype.get = function generic_block2() {
        var label = this.graphics.exprs;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        this.set_param_popup_title = "Set GENERIC block parameters";
        var options = {
            function_name:["simulation function",this.function_name],
            funtyp:["function type (0,1,2,..)",this.funtyp],
            i:["input ports sizes",this.i],
            o:["output port sizes",this.o],
            ci:["input event ports sizes",this.ci],
            co:["output events ports sizes",this.co],
            xx:["initial continuous state",this.xx],
            z:["initial discrete state",this.z],
            rpar:["Real parameters vector",this.rpar],
            ipar:["Integer parameters vector",this.ipar],
            nmode:["number of modes",this.nmode],
            nzcr:["number of zero_crossings",this.nzcr],
            auto0:["initial firing vector (<0 for no firing)",this.auto0],
            depu:["direct feedthrough (y or n)",this.depu],
            dept:["time dependence (y or n)",this.dept],
        }
        return options;
    }
    generic_block2.prototype.set = function generic_block2() {
        var label = this.graphics.exprs;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            var ok = true;
            this.function_name = arguments[0]["function_name"];
            this.funtyp = parseFloat(arguments[0]["funtyp"]);
            this.i = parseFloat(arguments[0]["i"]);
            this.o = parseFloat(arguments[0]["o"]);
            this.ci = parseFloat(arguments[0]["ci"]);
            this.co = parseFloat(arguments[0]["co"]);
            this.xx = inverse(arguments[0]["xx"]);
            this.z = inverse(arguments[0]["z"]);
            this.rpar = inverse(arguments[0]["rpar"]);
            this.ipar = parseFloat(arguments[0]["ipar"]);
            this.nmode = arguments[0]["nmode"];
            this.nzcr = arguments[0]["nzcr"];
            this.auto0 = arguments[0]["auto0"];
            this.depu = parseBoolean(arguments[0]["depu"]);
            this.dept = parseBoolean(arguments[0]["dept"]);
            var lab = [arguments[0]["function_name"], arguments[0]["funtyp"], arguments[0]["i"], arguments[0]["o"], arguments[0]["ci"], arguments[0]["co"], arguments[0]["xx"], arguments[0]["z"], arguments[0]["rpar"], arguments[0]["ipar"], arguments[0]["nmode"], arguments[0]["nzcr"], arguments[0]["auto0"], arguments[0]["depu"], arguments[0]["dept"]];
            if (!ok) {
                break;
            }
            var label = lab;
            this.function_name = stripblanks(this.function_name);
            this.xx = this.xx.slice();
            this.z = this.z.slice();
            this.rpar = this.rpar.slice();
            this.ipar = int(this.ipar.slice());
            this.i = int(this.i.slice());
            this.o = int(this.o.slice());
            this.ci = int(this.ci.slice());
            this.co = int(this.co.slice());
            this.funtyp = int(this.funtyp);
            if (this.funtyp<0) {
                message("function type cannot be negative");
                throw "user error";
                var ok = false;
            }
            if ([[this.ci],[this.co]].length!=0) {
                if (max([[this.ci],[this.co]])>1) {
                    message("vector event links not supported");
                    throw "user error";
                    var ok = false;
                }
            }
            this.depu = stripblanks(this.depu);
            if (part(this.depu,1)=="y") {
                this.depu = true;
            } else {
                this.depu = false;
            }
            this.dept = stripblanks(this.dept);
            if (part(this.dept,1)=="y") {
                this.dept = true;
            } else {
                this.dept = false;
            }
            var dep_ut = [this.depu,this.dept];
            if (ok) {
                var tmpvar0 = check_io(this.model,this.graphics,this.i,this.o,this.ci,this.co);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
            }
            if (ok) {
                if (this.funtyp==3) {
                    var needcompile = 4;
                }
                this.model.sim = list(new ScilabDouble([this.function_name]), new ScilabDouble([this.funtyp]));
                this.model.state = new ScilabDouble(this.xx);
                this.model.dstate = new ScilabDouble(this.z);
                this.model.rpar = new ScilabDouble(this.rpar);
                this.model.ipar = new ScilabDouble([this.ipar]);
                this.model.firing = new ScilabDouble([this.auto0]);
                this.model.nzcross = new ScilabDouble([this.nzcr]);
                this.model.nmode = new ScilabDouble([this.nmode]);
                this.model.dep_ut = new ScilabBoolean(dep_ut);
                this.graphics.exprs = new ScilabDouble([label]);
                break;
            }
        }
        needcompile = resume(needcompile)
        return new BasicBlock(this.x);
    }
    generic_block2.prototype.get_popup_title = function generic_block2() {
        return this.set_param_popup_title;
    }
}
