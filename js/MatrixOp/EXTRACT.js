/* autogenerated from "macros/MatrixOp/EXTRACT.sci" */
function EXTRACT() {
    EXTRACT.prototype.define = function EXTRACT() {
        this.model = scicos_model();
        function_name = "extract";
        funtyp = 4;
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in1 = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.intyp = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.out2 = new ScilabDouble([1]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.evtin = [];
        this.model.evtout = [];
        this.model.state = [];
        this.model.dstate = [];
        this.model.rpar = [];
        this.model.ipar = [1,1,1,1];
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = [];
        this.model.dep_ut = [true,false];
        label = [[sci2exp(1)],[sci2exp([1])],[sci2exp([1])]];
        gr_i = [];
        this.x = standard_define([3,2],this.model,label,gr_i);
        return new BasicBlock(this.x);
    }
    EXTRACT.prototype.details = function EXTRACT() {
        return this.x;
    }
    EXTRACT.prototype.get = function EXTRACT() {
        var options = {
            typ:["Datatype (1=real double  2=Complex)",this.typ],
            a:["Lines to extract",this.a],
            b:["Columns to extract",this.b],
        }
        return options;
    }
    EXTRACT.prototype.set = function EXTRACT() {
        this.typ = inverse(arguments[0]["typ"])
        this.a = inverse(arguments[0]["a"])
        this.b = inverse(arguments[0]["b"])
        this.x = arg1;
        graphics = arg1.graphics;
        label = graphics.exprs;
        this.model = arg1.model;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,this.typ,this.a,this.b,exprs] = scicos_getvalue("Set EXTRACT Block",["Datatype (1=real double  2=Complex)","Lines to extract","Columns to extract"],list("vec",1,"mat",[1,-1],"mat",[1,-1]),label);
            this.a = this.a.slice();
            this.b = this.b.slice();
            if (!ok) {
                break;
            }
            if ((this.typ==1)) {
                function_name = "extract";
                ot = 1;
                it = 1;
            } else if ((this.typ==2)) {
                function_name = "extractz";
                ot = 2;
                it = 2;
            } else {
                message("Datatype is not supported");
                ok = false;
            }
            ma = size(this.a,1);
            mb = size(this.b,1);
            if ((ma==0||mb==0)) {
                message("empty field");
                ok = false;
            }
            for (i=1;i<=ma;i+=1) {
                if ((this.a[i-1]<=0)) {
                    message("invalid index");
                    ok = false;
                }
            }
            for (j=1;j<=mb;j+=1) {
                if ((this.b[j-1]<=0)) {
                    message("invalid index");
                    ok = false;
                }
            }
            this.model.ipar = [[this.a],[this.b],[ma],[mb]];
            in1 = [this.model.in1,this.model.in2];
            out = [ma,mb];
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
