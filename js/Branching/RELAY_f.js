/* autogenerated from "macros/Branching/RELAY_f.sci" */
function RELAY_f() {
    RELAY_f.prototype.define = function RELAY_f() {
        i0 = 0;
        in1 = [[-1],[-1]];
        this.nin = 2;
        this.model = scicos_model();
        this.model.sim = list("relay",2);
        this.model.in1 = in1;
        this.model.out = new ScilabDouble(-1);
        this.model.evtin = new ScilabDouble(ones(in1));
        this.model.dstate = new ScilabDouble(i0);
        this.model.blocktype = new ScilabString("c");
        this.model.firing = [];
        this.model.dep_ut = [true,true];
        exprs = [[string(this.nin)],[string(i0+1)]];
        gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    RELAY_f.prototype.details = function RELAY_f() {
        return this.x;
    }
    RELAY_f.prototype.get = function RELAY_f() {
        var options = {
            nin:["number of inputs",this.nin],
            z0:["initial connected input",this.z0],
        }
        return options;
    }
    RELAY_f.prototype.set = function RELAY_f() {
        this.nin = parseFloat(arguments[0]["nin"])
        this.z0 = arguments[0]["z0"]
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        ipar = this.model.ipar;
        while (true) {
            [ok,this.nin,this.z0,exprs] = scicos_getvalue("Set parameters",["number of inputs","initial connected input"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.z0>this.nin||this.z0<=0) {
                message("initial connected input is not a valid input port number");
            } else {
                [model,graphics,ok] = check_io(this.model,graphics,-ones(this.nin,1),-1,ones(this.nin,1),[]);
                if (ok) {
                    graphics.exprs = exprs;
                    this.model.dstate = new ScilabString(this.z0-1);
                    this.x.graphics = graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
