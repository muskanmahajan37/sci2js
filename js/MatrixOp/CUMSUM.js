/* autogenerated from "macros/MatrixOp/CUMSUM.sci" */
function CUMSUM() {
    CUMSUM.prototype.define = function CUMSUM() {
        model = scicos_model();
        function_name = "cumsum_m";
        funtyp = 4;
        model.sim = list(function_name,funtyp);
        model.in1 = -1;
        model.in2 = -2;
        model.intyp = 1;
        model.out = -1;
        model.out2 = -2;
        model.outtyp = 1;
        model.evtin = [];
        model.evtout = [];
        model.state = [];
        model.dstate = [];
        model.rpar = [];
        model.ipar = [];
        model.blocktype = "c";
        model.firing = [];
        model.dep_ut = [true,false];
        label = [[sci2exp(1)],[sci2exp(0)]];
        gr_i = [];
        this.x = standard_define([3,2],model,label,gr_i);
    }
    CUMSUM.prototype.details = function CUMSUM() {
        return this.x;
    }
    CUMSUM.prototype.get = function CUMSUM() {
    }
    CUMSUM.prototype.set = function CUMSUM() {
        this.x = arg1;
        model = arg1.model;
        graphics = arg1.graphics;
        label = graphics.exprs;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,typ,decomptyp,lab] = scicos_getvalue("Set CUMSUM block parameters",[["Datatype(1=real double  2=Complex)"],["Sum along (0=the first non singleton dimension  1=Rows  2=Columns)"]],list("vec",1,"vec",1),label);
            if (!ok) {
                break;
            }
            label = lab;
            if ((typ==1)) {
                if ((decomptyp==0)) {
                    function_name = "cumsum_m";
                    out = [-1,-2];
                } else if ((decomptyp==1)) {
                    function_name = "cumsum_r";
                    out = [-1,1];
                } else if ((decomptyp==2)) {
                    function_name = "cumsum_c";
                    out = [1,-2];
                } else {
                    message("decomposition type is not supported");
                    ok = false;
                }
                it = 1;
                ot = 1;
            } else if ((typ==2)) {
                if ((decomptyp==0)) {
                    function_name = "cumsumz_m";
                } else if ((decomptyp==1)) {
                    function_name = "cumsumz_r";
                } else if ((decomptyp==2)) {
                    function_name = "cumsumz_c";
                } else {
                    message("decomposition type is not supported");
                    ok = false;
                }
                it = 2;
                ot = 2;
            } else {
                message("Datatype is not supported");
                ok = false;
            }
            in1 = [model.in1,model.in2];
            out = [model.out,model.out2];
            funtyp = 4;
            if (ok) {
                [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),[],[]);
            }
            if (ok) {
                model.sim = list(function_name,funtyp);
                arg1.model = model;
                graphics.exprs = label;
                arg1.graphics = graphics;
                this.x = arg1;
                break;
            }
        }
    }
}
