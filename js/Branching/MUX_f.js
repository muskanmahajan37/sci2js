/* autogenerated from "macros/Branching/MUX_f.sci" */
function MUX_f() {
    MUX_f.prototype.define = function MUX_f() {
        this.in1 = 2;
        this.model = scicos_model();
        this.model.sim = list("mux",1);
        this.model.in1 = -transpose([1:this.in1]);
        this.model.out = new ScilabDouble(0);
        this.model.ipar = new ScilabDouble(this.in1);
        this.model.blocktype = new ScilabString("c");
        this.model.dep_ut = [true,false];
        exprs = string(this.in1);
        gr_i = [];
        this.x = standard_define([0.5,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    MUX_f.prototype.details = function MUX_f() {
        return this.x;
    }
    MUX_f.prototype.get = function MUX_f() {
        var options = {
        }
        return options;
    }
    MUX_f.prototype.set = function MUX_f() {
        this.in1 = parseFloat(arguments[0]["in1"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.in1,exprs] = scicos_getvalue("Set MUX block parameters","number of input ports or vector of sizes",list("vec",-1),exprs);
            if (!ok) {
                break;
            }
            if (size(this.in1,"*")==1) {
                if (this.in1<2||this.in1>8) {
                    message("Block must have at least two input ports and at most eight");
                    ok = false;
                } else {
                    [model,graphics,ok] = check_io(this.model,graphics,-transpose([1:this.in1]),0,[],[]);
                }
            } else {
                if (size(this.in1,"*")<2||size(this.in1,"*")>8||or(this.in1==0)) {
                    message([["Block must have at least two input ports"],["and at most eight, and size 0 is not allowed. "]]);
                    ok = false;
                } else {
                    if (min(this.in1)<0) {
                        nout = 0;
                    } else {
                        nout = sum(this.in1);
                    }
                    [model,graphics,ok] = check_io(this.model,graphics,this.in1.slice(),nout,[],[]);
                    if (ok) {
                        this.in1 = size(this.in1,"*");
                    }
                }
            }
            if (ok) {
                graphics.exprs = exprs;
                this.model.ipar = new ScilabDouble(this.in1);
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
