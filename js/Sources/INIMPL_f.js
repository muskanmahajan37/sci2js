/* autogenerated from "macros/Sources/INIMPL_f.sci" */
function INIMPL_f() {
    INIMPL_f.prototype.define = function INIMPL_f() {
        model = scicos_model();
        model.sim = "inimpl";
        model.out = [-1];
        model.out2 = [1];
        model.ipar = [1];
        model.dep_ut = [false,false];
        model.blocktype = "c";
        mo = modelica();
        mo.model = "PORT";
        mo.outputs = "n";
        model.equations = mo;
        prt = 1;
        exprs = "1";
        gr_i = [];
        this.x = standard_define([1,1],model,exprs,gr_i);
        this.x.graphics.out_implicit = ["I"];
    }
    INIMPL_f.prototype.details = function INIMPL_f() {
        return this.x;
    }
    INIMPL_f.prototype.get = function INIMPL_f() {
    }
    INIMPL_f.prototype.set = function INIMPL_f() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        if (size(exprs,"*")==2) {
            exprs = exprs[1-1];
        }
        while (true) {
            [ok,prt,exprs] = scicos_getvalue([[msprintf(gettext("Set %s block parameters"),"INIMPL_f")],[" "],[gettext("Implicit input port")],[" "]],"Port Number",list("vec",1),exprs);
            if (!ok) {
                break;
            }
            prt = int(prt);
            if (prt<=0) {
                block_parameter_error(msprintf(gettext("Wrong value for \'Port Number\' parameter: %d."),prt),gettext("Strictly positive integer expected."));
            } else {
                if (model.ipar!=prt) {
                    needcompile = 4;
                    y = needcompile;
                }
                model.ipar = prt;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
    }
}
