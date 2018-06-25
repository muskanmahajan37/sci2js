/* autogenerated from "macros/MatrixOp/RICC.sci" */
function RICC() {
    RICC.prototype.define = function RICC() {
        model = scicos_model();
        function_name = "ricc_m";
        funtyp = 4;
        model.sim = list(function_name,funtyp);
        model.in1 = [[-1],[-1],[-1]];
        model.in2 = [[-1],[-1],[-1]];
        model.intyp = [1,1,1];
        model.out = -1;
        model.out2 = -1;
        model.outtyp = 1;
        model.evtin = [];
        model.evtout = [];
        model.state = [];
        model.dstate = [];
        model.rpar = [];
        model.ipar = [[1],[1]];
        model.blocktype = "c";
        model.firing = [];
        model.dep_ut = [true,false];
        label = [[sci2exp(1)],[sci2exp(1)]];
        gr_i = [];
        this.x = standard_define([2,2],model,label,gr_i);
    }
    RICC.prototype.details = function RICC() {
        return this.x;
    }
    RICC.prototype.get = function RICC() {
    }
    RICC.prototype.set = function RICC() {
        this.x = arg1;
        graphics = arg1.graphics;
        label = graphics.exprs;
        model = arg1.model;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,tpe,mod,exprs] = scicos_getvalue("Set RICC Block",[["Type (1=Cont  2=Disc)"],["Model(1=Schr  2=sign(cont) inv(disc))"]],list("vec",1,"vec",1),label);
            if (!ok) {
                break;
            }
            in1 = [model.in1,model.in2];
            out = [model.out,model.out2];
            it = [1,1,1];
            ot = 1;
            label = exprs;
            [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),[],[]);
            if (ok) {
                model.ipar = [[tpe],[mod]];
                graphics.exprs = label;
                arg1.graphics = graphics;
                arg1.model = model;
                this.x = arg1;
                break;
            }
        }
    }
}
