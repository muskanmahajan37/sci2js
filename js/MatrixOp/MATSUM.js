/* autogenerated from "macros/MatrixOp/MATSUM.sci" */
function MATSUM() {
    MATSUM.prototype.define = function MATSUM() {
        this.model = scicos_model();
        function_name = "mat_sum";
        funtyp = 4;
        this.model.sim = list(function_name,funtyp);
        this.model.in1 = new ScilabDouble(-1);
        this.model.in2 = new ScilabDouble(-2);
        this.model.intyp = new ScilabDouble(1);
        this.model.out = new ScilabDouble(1);
        this.model.out2 = new ScilabDouble(1);
        this.model.outtyp = new ScilabDouble(1);
        this.model.evtin = [];
        this.model.evtout = [];
        this.model.state = [];
        this.model.dstate = [];
        this.model.rpar = [];
        this.model.ipar = [];
        this.model.blocktype = new ScilabString("c");
        this.model.firing = [];
        this.model.dep_ut = [true,false];
        label = [[sci2exp(1)],[sci2exp(0)]];
        gr_i = [];
        this.x = standard_define([3,2],this.model,label,gr_i);
        return new BasicBlock(this.x);
    }
    MATSUM.prototype.details = function MATSUM() {
        return this.x;
    }
    MATSUM.prototype.get = function MATSUM() {
        var options = {
            typ:["Datatype(1=real double  2=Complex)",this.typ],
            decomptyp:["Sum along (0=all 1=lines  2=Columns)",this.decomptyp],
        }
        return options;
    }
    MATSUM.prototype.set = function MATSUM() {
        this.typ = inverse(arguments[0]["typ"])
        this.decomptyp = arguments[0]["decomptyp"]
        this.lab = arguments[0]["lab"]
        this.x = arg1;
        this.model = arg1.model;
        graphics = arg1.graphics;
        label = graphics.exprs;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,this.typ,this.decomptyp,this.lab] = scicos_getvalue("Set MATSUM block parameters",["Datatype(1=real double  2=Complex)","Sum along (0=all 1=lines  2=Columns)"],list("vec",1,"vec",1),label);
            if (!ok) {
                break;
            }
            label = this.lab;
            if ((this.typ==1)) {
                if ((this.decomptyp==0)) {
                    function_name = "mat_sum";
                    out = [1,1];
                } else if ((this.decomptyp==2)) {
                    function_name = "mat_suml";
                    out = [-1,1];
                } else if ((this.decomptyp==1)) {
                    function_name = "mat_sumc";
                    out = [1,-2];
                } else {
                    message("decomposition type is not supported");
                    ok = false;
                }
                it = 1;
                ot = 1;
            } else if ((this.typ==2)) {
                if ((this.decomptyp==0)) {
                    function_name = "matz_sum";
                    out = [1,1];
                } else if ((this.decomptyp==2)) {
                    function_name = "matz_suml";
                    out = [-1,1];
                } else if ((this.decomptyp==1)) {
                    function_name = "matz_sumc";
                    out = [1,-2];
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
            in1 = [this.model.in1,this.model.in2];
            funtyp = 4;
            if (ok) {
                [model,graphics,ok] = set_io(this.model,graphics,list(in1,it),list(out,ot),[],[]);
            }
            if (ok) {
                this.model.sim = list(function_name,funtyp);
                arg1.model = this.model;
                graphics.exprs = label;
                arg1.graphics = graphics;
                this.x = arg1;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
