/* autogenerated from "macros/Branching/EXTRACTOR.sci" */
function EXTRACTOR() {
    EXTRACTOR.prototype.define = function EXTRACTOR() {
        this.ind = 1;
        this.model = scicos_model();
        this.model.sim = list("extractor",4);
        this.model.in1 = new ScilabDouble(-1);
        this.model.out = new ScilabDouble(1);
        this.model.blocktype = new ScilabString("c");
        this.model.dep_ut = [true,false];
        this.model.ipar = new ScilabDouble(this.ind);
        exprs = [sci2exp(this.ind)];
        gr_i = [];
        this.x = standard_define([3,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    EXTRACTOR.prototype.details = function EXTRACTOR() {
        return this.x;
    }
    EXTRACTOR.prototype.get = function EXTRACTOR() {
        var options = {
            ind:["indices to extract",this.ind],
        }
        return options;
    }
    EXTRACTOR.prototype.set = function EXTRACTOR() {
        this.ind = parseFloat(arguments[0]["ind"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.ind,exprs] = scicos_getvalue("Set block parameters",["indices to extract"],list("vec",-1),exprs);
            if (!ok) {
                break;
            }
            this.ind = int(this.ind);
            this.ind = this.ind.slice();
            [model,graphics,ok] = check_io(this.model,graphics,[-1],size(this.ind,1),[],[]);
            if (ok) {
                this.model.ipar = this.ind;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
