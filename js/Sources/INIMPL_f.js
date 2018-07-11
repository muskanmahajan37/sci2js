/* autogenerated from "macros/Sources/INIMPL_f.sci" */
function INIMPL_f() {
    INIMPL_f.prototype.define = function INIMPL_f() {
        this.model = scicos_model();
        this.model.sim = new ScilabString(["inimpl"]);
        this.model.out = new ScilabDouble([-1]);
        this.model.out2 = new ScilabDouble([1]);
        this.model.ipar = new ScilabDouble([1]);
        this.model.dep_ut = new ScilabDouble([false,false]);
        this.model.blocktype = new ScilabString(["c"]);
        var mo = modelica();
        mo.model = "PORT";
        mo.outputs = "n";
        this.model.equations = new ScilabDouble([mo]);
        this.prt = 1;
        var exprs = "1";
        var gr_i = [];
        this.x = standard_define([1,1],this.model,exprs,gr_i);
        this.x.graphics.out_implicit = ["I"];
        return new ImplicitInBlock(this.x);
    }
    INIMPL_f.prototype.details = function INIMPL_f() {
        return this.x;
    }
    INIMPL_f.prototype.get = function INIMPL_f() {
        var options = {
        }
        return options;
    }
    INIMPL_f.prototype.set = function INIMPL_f() {
        this.prt = parseFloat(arguments[0]["prt"])
        this.x = arg1;
        var graphics = arg1.graphics;
        var exprs = graphics.exprs;
        this.model = arg1.model;
        if (size(exprs,"*")==2) {
            var exprs = exprs[1-1];
        }
        while (true) {
            [ok,this.prt,exprs] = scicos_getvalue([[msprintf("Set %s block parameters","INIMPL_f")],[" "],["Implicit input port"],[" "]],"Port Number",list("vec",1),exprs);
            if (!ok) {
                break;
            }
            this.prt = int(this.prt);
            if (this.prt<=0) {
                block_parameter_error(msprintf("Wrong value for \'Port Number\' parameter: %d.",this.prt),"Strictly positive integer expected.");
            } else {
                if (this.model.ipar!=this.prt) {
                    var needcompile = 4;
                    var y = needcompile;
                }
                this.model.ipar = new ScilabDouble([this.prt]);
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new ImplicitInBlock(this.x);
    }
}
