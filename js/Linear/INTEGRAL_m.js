/* autogenerated from "macros/Linear/INTEGRAL_m.sci" */
function INTEGRAL_m() {
    INTEGRAL_m.prototype.define = function INTEGRAL_m() {
        maxp = 1;
        minp = -1;
        rpar = [];
        model = scicos_model();
        model.state = 0;
        model.sim = list("integral_func",4);
        model.in1 = 1;
        model.out = 1;
        model.in2 = 1;
        model.out2 = 1;
        model.rpar = rpar;
        model.blocktype = "c";
        model.dep_ut = [false,true];
        exprs = string([[0],[0],[0],[maxp],[minp]]);
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
    }
    INTEGRAL_m.prototype.details = function INTEGRAL_m() {
        return this.x;
    }
    INTEGRAL_m.prototype.get = function INTEGRAL_m() {
    }
    INTEGRAL_m.prototype.set = function INTEGRAL_m() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,x0,reinit,satur,maxp,lowp,exprs] = scicos_getvalue("Set Integral block parameters",[["Initial Condition"],["With re-intialization (1:yes, 0:no)"],["With saturation (1:yes, 0:no)"],["Upper limit"],["Lower limit"]],list("mat",[-1,-1],"vec",1,"vec",1,"mat",[-1,-1],"mat",[-1,-1]),exprs);
            if (!ok) {
                break;
            }
            if (isreal(x0)) {
                Datatype = 1;
            } else {
                Datatype = 2;
            }
            if (reinit!=0) {
                reinit = 1;
            }
            if (satur!=0) {
                satur = 1;
                if (Datatype==1) {
                    if (size(maxp,"*")==1) {
                        maxp = maxp*ones(x0);
                    }
                    if (size(lowp,"*")==1) {
                        lowp = lowp*ones(x0);
                    }
                    if ((size(x0)!=size(maxp)||size(x0)!=size(lowp))) {
                        message("x0 and Upper limit and Lower limit must have same size");
                        ok = false;
                    } else if (or(maxp<=lowp)) {
                        message("Upper limits must be > Lower limits");
                        ok = false;
                    } else if (or(x0>maxp)||or(x0<lowp)) {
                        message("Initial condition x0 should be inside the limits");
                        ok = false;
                    } else {
                        rpar = [[real(maxp.slice())],[real(lowp.slice())]];
                        model.nzcross = size(x0,"*");
                        model.nmode = size(x0,"*");
                    }
                } else if ((Datatype==2)) {
                    if (size(maxp,"*")==1) {
                        maxp = math.complex(maxp*ones(x0),(maxp*ones(x0)));
                    }
                    if (size(lowp,"*")==1) {
                        lowp = math.complex(lowp*ones(x0),(lowp*ones(x0)));
                    }
                    if ((size(x0)!=size(maxp)||size(x0)!=size(lowp))) {
                        message("x0 and Upper limit and Lower limit must have same size");
                        ok = false;
                    } else if (or(real(maxp)<=real(lowp))||or(imag(maxp)<=imag(lowp))) {
                        message("Upper limits must be > Lower limits");
                        ok = false;
                    } else if (or(real(x0)>real(maxp))||or(real(x0)<real(lowp))||or(imag(x0)>imag(maxp))||or(imag(x0)<imag(lowp))) {
                        message("Initial condition x0 should be inside the limits");
                        ok = false;
                    } else {
                        rpar = [[real(maxp.slice())],[real(lowp.slice())],[imag(maxp.slice())],[imag(lowp.slice())]];
                        model.nzcross = 2*size(x0,"*");
                        model.nmode = 2*size(x0,"*");
                    }
                }
            } else {
                rpar = [];
                model.nzcross = 0;
                model.nmode = 0;
            }
            if (ok) {
                model.rpar = rpar;
                if ((Datatype==1)) {
                    model.state = real(x0.slice());
                    model.sim = list("integral_func",4);
                    it = [[1],[ones(reinit,1)]];
                    ot = 1;
                } else if ((Datatype==2)) {
                    model.state = [[real(x0.slice())],[imag(x0.slice())]];
                    model.sim = list("integralz_func",4);
                    it = [[2],[2*ones(reinit,1)]];
                    ot = 2;
                } else {
                    message("Datatype is not supported");
                    ok = false;
                }
                if (ok) {
                    in1 = [size(x0,1)*[[1],[ones(reinit,1)]],size(x0,2)*[[1],[ones(reinit,1)]]];
                    out = size(x0);
                    [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),ones(reinit,1),[]);
                }
            }
            if (ok) {
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
    }
}
