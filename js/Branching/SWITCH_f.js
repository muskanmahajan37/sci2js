/* autogenerated from "macros/Branching/SWITCH_f.sci" */
function SWITCH_f() {
    SWITCH_f.prototype.define = function SWITCH_f() {
        i0 = 0;
        in1 = [[-1],[-1]];
        this.nin = 2;
        model = scicos_model();
        model.sim = list("switchn",2);
        model.in1 = in1;
        model.out = -1;
        model.ipar = i0;
        model.blocktype = "c";
        model.firing = [];
        model.dep_ut = [true,true];
        exprs = [[string(this.nin)],[string(i0+1)]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    SWITCH_f.prototype.details = function SWITCH_f() {
        return this.x;
    }
    SWITCH_f.prototype.get = function SWITCH_f() {
        var options = {
            nin:["number of inputs",this.nin],
            z0:["connected input",this.z0],
        }
        return options;
    }
    SWITCH_f.prototype.set = function SWITCH_f() {
        this.nin = parseFloat((arguments[0]["nin"]))
        this.z0 = parseFloat((arguments[0]["z0"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        ipar = model.ipar;
        while (true) {
            [ok,this.nin,this.z0,exprs] = scicos_getvalue("Set switch parameters",["number of inputs","connected input"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.z0>this.nin||this.z0<=0) {
                message("initial connected input is not a valid input port number");
            } else {
                [model,graphics,ok] = check_io(model,graphics,-ones(this.nin,1),-1,[],[]);
                if (ok) {
                    graphics.exprs = exprs;
                    model.ipar = this.z0-1;
                    this.x.graphics = graphics;
                    this.x.model = model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
