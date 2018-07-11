/* autogenerated from "macros/Misc/c_block.sci" */
function c_block() {
    c_block.prototype.define = function c_block() {
        var in1 = 1;
        var out = 1;
        var clkin = [];
        var clkout = [];
        var x0 = [];
        var z0 = [];
        var typ = "c";
        var auto = [];
        this.rpar = [];
        this.funam = "toto";
        this.model = scicos_model();
        this.model.sim = list(new ScilabString([" "]), new ScilabDouble([2001]));
        this.model.in1 = new ScilabDouble([in1]);
        this.model.out = new ScilabDouble([out]);
        this.model.evtin = new ScilabDouble(clkin);
        this.model.evtout = new ScilabDouble(clkout);
        this.model.state = new ScilabDouble(x0);
        this.model.dstate = new ScilabDouble(z0);
        this.model.rpar = new ScilabDouble(this.rpar);
        this.model.ipar = new ScilabDouble([0]);
        this.model.blocktype = new ScilabString([typ]);
        this.model.firing = new ScilabDouble(auto);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var label = list([[sci2exp(in1)],[sci2exp(out)],[strcat(sci2exp(this.rpar))],[this.funam]],list([]));
        var gr_i = [];
        this.x = standard_define([3,2],this.model,label,gr_i);
        return new BasicBlock(this.x);
    }
    c_block.prototype.details = function c_block() {
        return this.x;
    }
    c_block.prototype.get = function c_block() {
        var options = {
            i:["input ports sizes",this.i],
            o:["output port sizes",this.o],
            rpar:["System parameters vector",this.rpar],
            funam:["function name",this.funam],
        }
        return options;
    }
    c_block.prototype.set = function c_block() {
        this.i = parseFloat(arguments[0]["i"])
        this.o = parseFloat(arguments[0]["o"])
        this.rpar = inverse(arguments[0]["rpar"])
        this.funam = arguments[0]["funam"]
        this.lab = arguments[0]["lab"]
        this.x = arg1;
        this.model = arg1.model;
        var graphics = arg1.graphics;
        var label = graphics.exprs;
        while (true) {
            [ok,this.i,this.o,this.rpar,this.funam,this.lab] = scicos_getvalue("Set C_block parameters",["input ports sizes","output port sizes","System parameters vector","function name"],list("vec",-1,"vec",-1,"vec",-1,"str",-1),label[1-1]);
            if (!ok) {
                break;
            }
            if (this.funam==" ") {
                break;
            }
            label[1-1] = this.lab;
            this.rpar = this.rpar.slice();
            this.i = int(this.i.slice());
            var ni = size(this.i,1);
            this.o = int(this.o.slice());
            var no = size(this.o,1);
            var tt = label[2-1];
            if (this.model.sim[1-1]!=this.funam||size(this.model.in1,"*")!=size(this.i,"*")||size(this.model.out,"*")!=size(this.o,"*")) {
                var tt = [];
            }
            var tmpvar0 = CFORTR(this.funam,tt,this.i,this.o)
            var ok = tmpvar0[0]
            var tt = tmpvar0[1];
            if (!ok) {
                break;
            }
            var tmpvar1 = check_io(this.model,graphics,this.i,this.o,[],[])
            this.model = tmpvar1[0]
            var graphics = tmpvar1[1]
            var ok = tmpvar1[2];
            if (ok) {
                this.model.sim[1] = new ScilabString([this.funam]);
                this.model.rpar = new ScilabDouble(this.rpar);
                label[2-1] = tt;
                this.x.model = this.model;
                graphics.exprs = label;
                this.x.graphics = graphics;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
