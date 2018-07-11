/* autogenerated from "macros/Sources/SampleCLK.sci" */
function SampleCLK() {
    SampleCLK.prototype.define = function SampleCLK() {
        this.model = scicos_model();
        this.model.sim = new ScilabString(["sampleclk"]);
        this.model.evtout = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([1,0]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = new ScilabDouble([-1]);
        this.model.dep_ut = new ScilabDouble([false,false]);
        var exprs = [[sci2exp(1)],[sci2exp(0)]];
        this.x = standard_define([2,2],this.model,exprs," ");
        return new BasicBlock(this.x);
    }
    SampleCLK.prototype.details = function SampleCLK() {
        return this.x;
    }
    SampleCLK.prototype.get = function SampleCLK() {
        var options = {
            frequ:["Sample time",this.frequ],
            offset:["Offset",this.offset],
        }
        return options;
    }
    SampleCLK.prototype.set = function SampleCLK() {
        this.frequ = arguments[0]["frequ"]
        this.offset = arguments[0]["offset"]
        this.x = arg1;
        var graphics = arg1.graphics;
        this.model = arg1.model;
        var exprs = graphics.exprs;
        while (true) {
            [ok,this.frequ,this.offset,exprs] = scicos_getvalue("Set block parameters",["Sample time","Offset"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.frequ<0) {
                message("Frequency must be a positif number");
                var ok = false;
            }
            if (abs(this.offset)>this.frequ) {
                message("The |Offset| must be less than the Frequency");
                var ok = false;
            }
            if (ok) {
                if (or(this.model.rpar.slice()!=[[this.frequ],[this.offset]])) {
                    var needcompile = 4;
                    var y = needcompile;
                }
                this.model.rpar = new ScilabDouble([this.frequ],[this.offset]);
                this.model.evtout = new ScilabDouble([1]);
                this.model.firing = new ScilabDouble([-1]);
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        needcompile = resume(needcompile)
        return new BasicBlock(this.x);
    }
}
