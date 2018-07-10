/* autogenerated from "macros/MatrixOp/MATDET.sci" */
function MATDET() {
    MATDET.prototype.define = function MATDET() {
        this.model = scicos_model();
        function_name = "mat_det";
        funtyp = 4;
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in1 = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-1]);
        this.model.intyp = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.out2 = new ScilabDouble([1]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.evtin = [];
        this.model.evtout = [];
        this.model.state = [];
        this.model.dstate = [];
        this.model.rpar = [];
        this.model.ipar = [];
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = [];
        this.model.dep_ut = [true,false];
        label = [sci2exp(1)];
        gr_i = [];
        this.x = standard_define([2,2],this.model,label,gr_i);
        return new BasicBlock(this.x);
    }
    MATDET.prototype.details = function MATDET() {
        return this.x;
    }
    MATDET.prototype.get = function MATDET() {
        var options = {
            typ:["Datatype(1=real double  2=Complex)",this.typ],
        }
        return options;
    }
    MATDET.prototype.set = function MATDET() {
        this.typ = inverse(arguments[0]["typ"])
        this.x = arg1;
        graphics = arg1.graphics;
        label = graphics.exprs;
        this.model = arg1.model;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,this.typ,exprs] = scicos_getvalue("Set MATDET Block",["Datatype(1=real double  2=Complex)"],list("vec",1),label);
            if (!ok) {
                break;
            }
            if ((this.typ==1)) {
                function_name = "mat_det";
                ot = 1;
                it = 1;
            } else if ((this.typ==2)) {
                function_name = "matz_det";
                ot = 2;
                it = 2;
            } else {
                message("Datatype is not supported");
                ok = false;
            }
            in1 = [this.model.in1,this.model.in2];
            out = [this.model.out,this.model.out2];
            funtyp = 4;
            if (ok) {
                label = exprs;
                [this.model,graphics,ok] = set_io(this.model,graphics,list(in1,it),list(out,ot),[],[]);
                this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
                graphics.exprs = label;
                arg1.graphics = graphics;
                arg1.model = this.model;
                this.x = arg1;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
