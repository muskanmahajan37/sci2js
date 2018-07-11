/* autogenerated from "macros/Linear/INTEGRAL_m.sci" */
function INTEGRAL_m() {
    INTEGRAL_m.prototype.define = function INTEGRAL_m() {
        this.maxp = 1;
        var minp = -1;
        var rpar = [];
        this.model = scicos_model();
        this.model.state = new ScilabDouble([0]);
        this.model.sim = list(new ScilabString(["integral_func"]), new ScilabDouble([4]));
        this.model.in1 = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.in2 = new ScilabDouble([1]);
        this.model.out2 = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble(rpar);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([false,true]);
        var exprs = string([[0],[0],[0],[this.maxp],[minp]]);
        var gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    INTEGRAL_m.prototype.details = function INTEGRAL_m() {
        return this.x;
    }
    INTEGRAL_m.prototype.get = function INTEGRAL_m() {
        var options = {
            x0:["Initial Condition",this.x0],
            reinit:["With re-intialization (1:yes, 0:no)",this.reinit],
            satur:["With saturation (1:yes, 0:no)",this.satur],
            maxp:["Upper limit",this.maxp],
            lowp:["Lower limit",this.lowp],
        }
        return options;
    }
    INTEGRAL_m.prototype.set = function INTEGRAL_m() {
        this.x0 = arguments[0]["x0"]
        this.reinit = parseFloat(arguments[0]["reinit"])
        this.satur = parseFloat(arguments[0]["satur"])
        this.maxp = parseFloat(arguments[0]["maxp"])
        this.lowp = parseFloat(arguments[0]["lowp"])
        this.x = arg1;
        var graphics = arg1.graphics;
        var exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.x0,this.reinit,this.satur,this.maxp,this.lowp,exprs] = scicos_getvalue("Set Integral block parameters",["Initial Condition","With re-intialization (1:yes, 0:no)","With saturation (1:yes, 0:no)","Upper limit","Lower limit"],list("mat",[-1,-1],"vec",1,"vec",1,"mat",[-1,-1],"mat",[-1,-1]),exprs);
            if (!ok) {
                break;
            }
            if (isreal(this.x0)) {
                var Datatype = 1;
            } else {
                var Datatype = 2;
            }
            if (this.reinit!=0) {
                this.reinit = 1;
            }
            if (this.satur!=0) {
                this.satur = 1;
                if (Datatype==1) {
                    if (size(this.maxp,"*")==1) {
                        this.maxp = this.maxp*ones(this.x0);
                    }
                    if (size(this.lowp,"*")==1) {
                        this.lowp = this.lowp*ones(this.x0);
                    }
                    if ((size(this.x0)!=size(this.maxp)||size(this.x0)!=size(this.lowp))) {
                        message("x0 and Upper limit and Lower limit must have same size");
                        var ok = false;
                    } else if (or(this.maxp<=this.lowp)) {
                        message("Upper limits must be > Lower limits");
                        var ok = false;
                    } else if (or(this.x0>this.maxp)||or(this.x0<this.lowp)) {
                        message("Initial condition x0 should be inside the limits");
                        var ok = false;
                    } else {
                        var rpar = [[real(this.maxp.slice())],[real(this.lowp.slice())]];
                        this.model.nzcross = new ScilabDouble([size(this.x0,"*")]);
                        this.model.nmode = new ScilabDouble([size(this.x0,"*")]);
                    }
                } else if ((Datatype==2)) {
                    if (size(this.maxp,"*")==1) {
                        this.maxp = math.complex(this.maxp*ones(this.x0),(this.maxp*ones(this.x0)));
                    }
                    if (size(this.lowp,"*")==1) {
                        this.lowp = math.complex(this.lowp*ones(this.x0),(this.lowp*ones(this.x0)));
                    }
                    if ((size(this.x0)!=size(this.maxp)||size(this.x0)!=size(this.lowp))) {
                        message("x0 and Upper limit and Lower limit must have same size");
                        var ok = false;
                    } else if (or(real(this.maxp)<=real(this.lowp))||or(imag(this.maxp)<=imag(this.lowp))) {
                        message("Upper limits must be > Lower limits");
                        var ok = false;
                    } else if (or(real(this.x0)>real(this.maxp))||or(real(this.x0)<real(this.lowp))||or(imag(this.x0)>imag(this.maxp))||or(imag(this.x0)<imag(this.lowp))) {
                        message("Initial condition x0 should be inside the limits");
                        var ok = false;
                    } else {
                        var rpar = [[real(this.maxp.slice())],[real(this.lowp.slice())],[imag(this.maxp.slice())],[imag(this.lowp.slice())]];
                        this.model.nzcross = new ScilabDouble([2*size(this.x0,"*")]);
                        this.model.nmode = new ScilabDouble([2*size(this.x0,"*")]);
                    }
                }
            } else {
                var rpar = [];
                this.model.nzcross = new ScilabDouble([0]);
                this.model.nmode = new ScilabDouble([0]);
            }
            if (ok) {
                this.model.rpar = new ScilabDouble(rpar);
                if ((Datatype==1)) {
                    this.model.state = new ScilabDouble([real(this.x0.slice())]);
                    this.model.sim = list(new ScilabString(["integral_func"]), new ScilabDouble([4]));
                    var it = [[1],[ones(this.reinit,1)]];
                    var ot = 1;
                } else if ((Datatype==2)) {
                    this.model.state = new ScilabDouble([real(this.x0.slice())],[imag(this.x0.slice())]);
                    this.model.sim = list(new ScilabString(["integralz_func"]), new ScilabDouble([4]));
                    var it = [[2],[2*ones(this.reinit,1)]];
                    var ot = 2;
                } else {
                    message("Datatype is not supported");
                    var ok = false;
                }
                if (ok) {
                    var in1 = [size(this.x0,1)*[[1],[ones(this.reinit,1)]],size(this.x0,2)*[[1],[ones(this.reinit,1)]]];
                    var out = size(this.x0);
                    var tmpvar0 = set_io(this.model,graphics,list(in1,it),list(out,ot),ones(this.reinit,1),[])
                    this.model = tmpvar0[0]
                    var graphics = tmpvar0[1]
                    var ok = tmpvar0[2];
                }
            }
            if (ok) {
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
