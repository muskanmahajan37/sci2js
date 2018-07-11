/* autogenerated from "macros/Misc/CBLOCK.sci" */
function CBLOCK() {
    CBLOCK.prototype.define = function CBLOCK() {
        var in1 = 1;
        var out = 1;
        var clkin = [];
        var clkout = [];
        var x0 = [];
        var z0 = [];
        var typ = "c";
        var auto = [];
        this.rpar = [];
        this.ipar = [];
        var funam = "toto";
        this.ng = 0;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString([" "]), new ScilabDouble([2004]));
        this.model.in1 = new ScilabDouble([in1]);
        this.model.out = new ScilabDouble([out]);
        this.model.evtin = new ScilabDouble(clkin);
        this.model.evtout = new ScilabDouble(clkout);
        this.model.state = new ScilabDouble(x0);
        this.model.dstate = new ScilabDouble(z0);
        this.model.rpar = new ScilabDouble(this.rpar);
        this.model.ipar = new ScilabDouble(this.ipar);
        this.model.blocktype = new ScilabString([typ]);
        this.model.firing = new ScilabDouble(auto);
        this.model.dep_ut = new ScilabDouble([true,false]);
        this.model.nzcross = new ScilabDouble([this.ng]);
        var label = list(transpose([funam,"n",sci2exp(in1),sci2exp(out),sci2exp(clkin),sci2exp(clkout),sci2exp(x0),sci2exp(0),sci2exp(z0),sci2exp(this.rpar),sci2exp(this.ipar),sci2exp(auto),"y","n"]),[]);
        var gr_i = [];
        this.x = standard_define([4,2],this.model,label,gr_i);
        return new BasicBlock(this.x);
    }
    CBLOCK.prototype.details = function CBLOCK() {
        return this.x;
    }
    CBLOCK.prototype.get = function CBLOCK() {
        var options = {
            function_name:["simulation function",this.function_name],
            impli:["is block implicit? (y,n)",this.impli],
            i:["input ports sizes",this.i],
            o:["output ports sizes",this.o],
            ci:["input event ports sizes",this.ci],
            co:["output events ports sizes",this.co],
            xx:["initial continuous state",this.xx],
            ng:["number of zero crossing surfaces",this.ng],
            z:["initial discrete state",this.z],
            rpar:["Real parameters vector",this.rpar],
            ipar:["Integer parameters vector",this.ipar],
            auto0:["initial firing vector (<0 for no firing)",this.auto0],
            depu:["direct feedthrough (y or n)",this.depu],
            dept:["time dependence (y or n)",this.dept],
        }
        return options;
    }
    CBLOCK.prototype.set = function CBLOCK() {
        this.function_name = arguments[0]["function_name"]
        this.impli = arguments[0]["impli"]
        this.i = parseFloat(arguments[0]["i"])
        this.o = parseFloat(arguments[0]["o"])
        this.ci = parseFloat(arguments[0]["ci"])
        this.co = parseFloat(arguments[0]["co"])
        this.xx = inverse(arguments[0]["xx"])
        this.ng = parseFloat(arguments[0]["ng"])
        this.z = inverse(arguments[0]["z"])
        this.rpar = inverse(arguments[0]["rpar"])
        this.ipar = inverse(arguments[0]["ipar"])
        this.auto0 = arguments[0]["auto0"]
        this.depu = parseBoolean(arguments[0]["depu"])
        this.dept = parseBoolean(arguments[0]["dept"])
        this.lab = arguments[0]["lab"]
        this.x = arg1;
        this.model = arg1.model;
        var graphics = arg1.graphics;
        var label = graphics.exprs;
        while (true) {
            [ok,this.function_name,this.impli,this.i,this.o,this.ci,this.co,this.xx,this.ng,this.z,this.rpar,this.ipar,this.auto0,this.depu,this.dept,this.lab] = scicos_getvalue("Set C-Block2 block parameters",["simulation function","is block implicit? (y,n)","input ports sizes","output ports sizes","input event ports sizes","output events ports sizes","initial continuous state","number of zero crossing surfaces","initial discrete state","Real parameters vector","Integer parameters vector","initial firing vector (<0 for no firing)","direct feedthrough (y or n)","time dependence (y or n)"],list("str",1,"str",1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",1,"vec",-1,"vec",-1,"vec",-1,"vec","sum(%6)","str",1,"str",1),label[1-1]);
            if (!ok) {
                break;
            }
            label[1-1] = this.lab;
            var funam = stripblanks(this.function_name);
            this.xx = this.xx.slice();
            this.z = this.z.slice();
            this.rpar = this.rpar.slice();
            this.ipar = int(this.ipar.slice());
            var nx = size(this.xx,1);
            var nz = size(this.z,1);
            this.i = int(this.i.slice());
            this.o = int(this.o.slice());
            var nout = size(this.o,1);
            this.ci = int(this.ci.slice());
            var nevin = size(this.ci,1);
            this.co = int(this.co.slice());
            var nevout = size(this.co,1);
            if (part(this.impli,1)=="y") {
                var funtyp = 12004;
            } else {
                var funtyp = 2004;
            }
            if ([[this.ci],[this.co]]!=[]) {
                if (max([[this.ci],[this.co]])>1) {
                    message("vector event links not supported");
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
            if (funam==" ") {
                break;
            }
            if (this.model.sim[1-1]!=funam||sign(size(this.model.state,"*"))!=sign(nx)||sign(size(this.model.dstate,"*"))!=sign(nz)||this.model.nzcross!=this.ng||sign(size(this.model.evtout,"*"))!=sign(nevout)) {
                var tt = [];
            }
            var tt = label[2-1];
            while (true) {
                var tmpvar0 = CFORTR2(funam,tt)
                var ok = tmpvar0[0]
                var tt = tmpvar0[1]
                var cancel = tmpvar0[2];
                if (!ok) {
                    if (cancel) {
                        break;
                    }
                } else {
                    var tmpvar1 = check_io(this.model,graphics,this.i,this.o,this.ci,this.co)
                    this.model = tmpvar1[0]
                    var graphics = tmpvar1[1]
                    var ok = tmpvar1[2];
                    if (ok) {
                        this.model.sim = list(new ScilabDouble([funam]), new ScilabDouble([funtyp]));
                        this.model.in1 = new ScilabDouble([this.i]);
                        this.model.out = new ScilabDouble([this.o]);
                        this.model.evtin = new ScilabDouble([this.ci]);
                        this.model.evtout = new ScilabDouble([this.co]);
                        this.model.state = new ScilabDouble(this.xx);
                        this.model.dstate = new ScilabDouble(this.z);
                        this.model.rpar = new ScilabDouble(this.rpar);
                        this.model.ipar = new ScilabDouble([this.ipar]);
                        this.model.firing = new ScilabDouble([this.auto0]);
                        this.model.dep_ut = new ScilabDouble(dep_ut);
                        this.model.nzcross = new ScilabDouble([this.ng]);
                        label[2-1] = tt;
                        this.x.model = this.model;
                        graphics.exprs = label;
                        this.x.graphics = graphics;
                        break;
                    }
                }
            }
            if (ok||cancel) {
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
