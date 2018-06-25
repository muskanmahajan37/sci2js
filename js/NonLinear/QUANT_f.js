/* autogenerated from "macros/NonLinear/QUANT_f.sci" */
function QUANT_f() {
    QUANT_f.prototype.define = function QUANT_f() {
        pas = 0.1;
        meth = 1;
        model = scicos_model();
        model.sim = "qzrnd";
        model.in1 = -1;
        model.out = -1;
        model.rpar = pas;
        model.ipar = meth;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = [[string(pas)],[string(meth)]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
    }
    QUANT_f.prototype.details = function QUANT_f() {
        return this.x;
    }
    QUANT_f.prototype.get = function QUANT_f() {
    }
    QUANT_f.prototype.set = function QUANT_f() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,pas,meth,exprs] = scicos_getvalue("Set parameters",[["Step"],["Quantization Type (1-4)"]],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (meth<1||meth>4) {
                message("Quantization Type must be from 1 to 4");
            } else {
                rpar = pas;
                model.rpar = rpar;
                model.ipar = meth;
                switch (meth) {
                case 1:
                    model.sim = "qzrnd";
                case 2:
                    model.sim = "qztrn";
                case 3:
                    model.sim = "qzflr";
                case 4:
                    model.sim = "qzcel";
                }
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
    }
}
