/* autogenerated from "macros/Sinks/OUTIMPL_f.sci" */
function OUTIMPL_f() {
    OUTIMPL_f.prototype.define = function OUTIMPL_f() {
        this.model = scicos_model();
        this.model.in1 = [-1];
        this.model.in2 = [1];
        this.prt = 1;
        this.model.sim = new ScilabString("outimpl");
        this.model.ipar = [1];
        this.model.blocktype = new ScilabString("c");
        this.model.dep_ut = [false,false];
        mo = modelica();
        mo.model = "PORT";
        mo.inputs = "n";
        this.model.equations = new ScilabDouble(mo);
        exprs = "1";
        gr_i = [];
        this.x = standard_define([1,1],this.model,exprs,gr_i);
        this.x.graphics.in_implicit = ["I"];
        return new ImplicitOutBlock(this.x);
    }
    OUTIMPL_f.prototype.details = function OUTIMPL_f() {
        return this.x;
    }
    OUTIMPL_f.prototype.get = function OUTIMPL_f() {
        var options = {
        }
        return options;
    }
    OUTIMPL_f.prototype.set = function OUTIMPL_f() {
        this.prt = parseFloat(arguments[0]["prt"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        if (size(exprs,"*")==2) {
            exprs = exprs[1-1];
        }
        while (true) {
            [ok,this.prt,exprs] = scicos_getvalue([[msprintf("Set %s block parameters","OUTIMPL_f")],[" "],["Implicit output port"]],"Port number",list("vec",1),exprs);
            if (!ok) {
                break;
            }
            this.prt = int(this.prt);
            if (this.prt<=0) {
                block_parameter_error(msprintf("Wrong value for \'Port Number\' parameter: %d.",this.prt),"Strictly positive integer expected.");
            } else {
                if (this.model.ipar!=this.prt) {
                    needcompile = 4;
                    y = needcompile;
                }
                this.model.ipar = new ScilabDouble(this.prt);
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new ImplicitOutBlock(this.x);
    }
}
