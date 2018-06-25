/* autogenerated from "macros/Linear/DLR_f.sci" */
function DLR_f() {
    DLR_f.prototype.define = function DLR_f() {
        x0 = 0;
        A = -1;
        B = 1;
        C = 1;
        D = 0;
        exprs = [["1"],["1+z"]];
        model = scicos_model();
        model.sim = "dsslti";
        model.in1 = 1;
        model.out = 1;
        model.evtin = 1;
        model.dstate = x0.slice();
        model.rpar = [[A.slice()],[B.slice()],[C.slice()],[D.slice()]];
        model.blocktype = "d";
        model.dep_ut = [false,false];
        gr_i = [];
        this.x = standard_define([2.5,2.5],model,exprs,gr_i);
    }
    DLR_f.prototype.details = function DLR_f() {
        return this.x;
    }
    DLR_f.prototype.get = function DLR_f() {
    }
    DLR_f.prototype.set = function DLR_f() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        x0 = model.dstate;
        ns = prod(size(x0));
        PREVAR_scicos_context = PREVAR_scicos_context;
        PREVAR_scicos_context.z = %z;
        while (true) {
            [ok,num,den,exprs] = scicos_getvalue("Set discrete SISO transfer parameters",[["Numerator (z)"],["Denominator (z)"]],list("pol",1,"pol",1),exprs);
            if (!ok) {
                break;
            }
            if (degree(num)>degree(den)) {
                message("Transfer must be proper");
                ok = false;
            }
            if (ok) {
                H = cont_frm(num,den);
                [A,B,C,D] = H.slice(2-1,5);
                graphics.exprs = exprs;
                [ns1,ns1] = size(A);
                if (ns1<=ns) {
                    x0 = x0.slice(1-1,ns1);
                } else {
                    x0[ns1-1][1-1] = 0;
                }
                rpar = [[A.slice()],[B.slice()],[C.slice()],[D.slice()]];
                model.dstate = x0;
                model.rpar = rpar;
                if (norm(D,1)!=0) {
                    mmm = [true,false];
                } else {
                    mmm = [false,false];
                }
                if (or(model.dep_ut!=mmm)) {
                    model.dep_ut = mmm;
                }
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        this.x.model.firing = [];
    }
}
