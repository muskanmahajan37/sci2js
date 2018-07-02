/* autogenerated from "macros/NonLinear/TrigFun.sci" */
function TrigFun() {
    TrigFun.prototype.define = function TrigFun() {
        model = scicos_model();
        model.sim = list("sin_blk",4);
        model.in1 = -1;
        model.out = -1;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = "sin";
        gr_i = [];
        this.x = standard_define([4,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    TrigFun.prototype.details = function TrigFun() {
        return this.x;
    }
    TrigFun.prototype.get = function TrigFun() {
        var options = {
        }
        return options;
    }
    TrigFun.prototype.set = function TrigFun() {
        this.fun = parseFloat((arguments[0]["fun"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        PREVAR_FF = [["sin"],["cos"],["tan"],["asin"],["acos"],["atan"],["sinh"],["cosh"],["tanh"],["asinh"],["acosh"],["atanh"]];
        PREVAR_GG = [["Choose among "+strcat(PREVAR_FF.slice(1-1,4),", ")],[strcat(PREVAR_FF.slice(5-1,$),", ")]];
        while (true) {
            [ok,this.fun,exprs] = scicos_getvalue(PREVAR_GG,"Function",list("str",1),exprs);
            if (!ok) {
                break;
            }
            if (find(PREVAR_FF==this.fun)==[]) {
                message("Sorry but "+this.fun+" is not in the list!");
            } else {
                graphics.exprs = exprs;
                execstr("model.sim=list(\'"+this.fun+"_blk\',4)");
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
