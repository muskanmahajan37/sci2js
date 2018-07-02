/* autogenerated from "macros/Sources/RAMP.sci" */
function RAMP() {
    RAMP.prototype.define = function RAMP() {
        this.slope = 0;
        this.iout = 0;
        this.stt = 0;
        rpar = [[this.slope],[this.stt],[this.iout]];
        model = scicos_model();
        model.sim = list("ramp",4);
        model.in1 = [];
        model.out = 1;
        model.rpar = rpar;
        model.blocktype = "c";
        model.nmode = 1;
        model.nzcross = 1;
        model.dep_ut = [false,true];
        exprs = [string(rpar)];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    RAMP.prototype.details = function RAMP() {
        return this.x;
    }
    RAMP.prototype.get = function RAMP() {
        var options = {
            slope:["Slope",this.slope],
            stt:["Start Time",this.stt],
            iout:["Initial Value",this.iout],
        }
        return options;
    }
    RAMP.prototype.set = function RAMP() {
        this.slope = parseFloat((arguments[0]["slope"]))
        this.stt = parseFloat((arguments[0]["stt"]))
        this.iout = parseFloat((arguments[0]["iout"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.slope,this.stt,this.iout,exprs] = scicos_getvalue([[msprintf("Set %s block parameters","RAMP")],[" "],["Ramp function"],[" "]],["Slope","Start Time","Initial Value"],list("vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.stt<0) {
                block_parameter_error(msprintf("Wrong value for \'Start Time\' parameter: %e.",this.stt),"Null or positive integer expected.");
            } else {
                model.rpar = [[this.slope],[this.stt],[this.iout]];
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
