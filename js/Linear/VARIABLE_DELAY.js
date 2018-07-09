/* autogenerated from "macros/Linear/VARIABLE_DELAY.sci" */
function VARIABLE_DELAY() {
    VARIABLE_DELAY.prototype.define = function VARIABLE_DELAY() {
        nin = 1;
        this.T = 1;
        this.init = 0;
        this.N = 1024;
        this.model = scicos_model();
        this.model.sim = list("variable_delay",4);
        this.model.in1 = [[nin],[1]];
        this.model.out = new ScilabDouble(nin);
        this.model.rpar = [this.T,this.init];
        this.model.ipar = new ScilabDouble(this.N);
        this.model.blocktype = new ScilabString("d");
        this.model.dep_ut = [false,false];
        exprs = [[string(this.T)],[string(this.init)],[string(this.N)]];
        gr_i = [];
        this.x = standard_define([3,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    VARIABLE_DELAY.prototype.details = function VARIABLE_DELAY() {
        return this.x;
    }
    VARIABLE_DELAY.prototype.get = function VARIABLE_DELAY() {
        var options = {
            T:["Max delay",this.T],
            init:["initial input",this.init],
            N:["Buffer size",this.N],
        }
        return options;
    }
    VARIABLE_DELAY.prototype.set = function VARIABLE_DELAY() {
        this.T = parseFloat(arguments[0]["T"])
        this.init = parseFloat(arguments[0]["init"])
        this.N = parseFloat(arguments[0]["N"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        nin = this.model.in1[1-1];
        while (true) {
            [ok,this.T,this.init,this.N,exprs] = scicos_getvalue("Set delay parameters",["Max delay","initial input","Buffer size"],list("vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.N<2) {
                message("Buffer must be larger than 2");
                ok = false;
            }
            if (this.T<=0) {
                message("Delay must be positive");
                ok = false;
            }
            if (ok) {
                [model,graphics,ok] = check_io(this.model,graphics,[[-1],[1]],-1,[],[]);
            }
            if (ok) {
                graphics.exprs = exprs;
                this.model.rpar = [[this.T],[this.init]];
                this.model.ipar = new ScilabDouble(this.N);
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
