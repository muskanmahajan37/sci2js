/* autogenerated from "macros/Sinks/CMSCOPE.sci" */
function CMSCOPE() {
    CMSCOPE.prototype.define = function CMSCOPE() {
        this.win = -1;
        this.in1 = [[1],[1]];
        this.wdim = [[-1],[-1]];
        this.wpos = [[-1],[-1]];
        this.clrs = [[1],[3],[5],[7],[9],[11],[13],[15]];
        this.N = 20;
        this.ymin = [[-1],[-5]];
        this.ymax = [[1],[5]];
        this.per = [[30],[30]];
        var yy = [[transpose(this.ymin.slice())],[transpose(this.ymax.slice())]];
        var period = transpose(this.per.slice());
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["cmscope"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble(this.in1);
        this.model.in2 = new ScilabDouble([1],[1]);
        this.model.intyp = new ScilabDouble([1],[1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([0],[period.slice()],[yy.slice()]);
        this.model.ipar = new ScilabDouble([this.win],[size(this.in1,"*")],[this.N],[this.wpos.slice()],[this.wdim.slice()],[this.in1.slice()],[this.clrs.slice(1-1,sum(this.in1))]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = [[strcat(string(this.in1)," ")],[strcat(string(this.clrs)," ")],[string(this.win)],[sci2exp([])],[sci2exp([])],[strcat(string(this.ymin)," ")],[strcat(string(this.ymax)," ")],[strcat(string(this.per)," ")],[string(this.N)],[string(0)],[emptystr()]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CMSCOPE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    CMSCOPE.prototype.details = function CMSCOPE() {
        return this.x;
    }
    CMSCOPE.prototype.get = function CMSCOPE() {
        var options = {
            in1:["Input ports sizes",this.in1.toString().replace(/,/g," ")],
            clrs:["Drawing colors (>0) or mark (<0)",this.clrs.toString().replace(/,/g," ")],
            win:["Output window number (-1 for automatic)",this.win],
            wpos:["Output window position",this.wpos.toString().replace(/,/g," ")],
            wdim:["Output window sizes",this.wdim.toString().replace(/,/g," ")],
            ymin:["Ymin vector",this.ymin.toString().replace(/,/g," ")],
            ymax:["Ymax vector",this.ymax.toString().replace(/,/g," ")],
            per:["Refresh period",this.per.toString().replace(/,/g," ")],
            N:["Buffer size",this.N],
            heritance:["Accept herited events 0/1",this.heritance],
            nom:["Name of Scope (label&Id)",this.nom],
        }
        return options;
    }
    CMSCOPE.prototype.set = function CMSCOPE() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.in1 = inverse(arguments[0]["in1"]);
            this.clrs = inverse(arguments[0]["clrs"]);
            this.win = parseFloat(arguments[0]["win"]);
            this.wpos = inverse(arguments[0]["wpos"]);
            this.wdim = inverse(arguments[0]["wdim"]);
            this.ymin = inverse(arguments[0]["ymin"]);
            this.ymax = inverse(arguments[0]["ymax"]);
            this.per = inverse(arguments[0]["per"]);
            this.N = parseFloat(arguments[0]["N"]);
            this.heritance = arguments[0]["heritance"];
            this.nom = arguments[0]["nom"];
            if (!ok) {
                break;
            }
            var mess = [];
            if (size(this.in1,"*")<=0) {
                var mess = [[mess],["Block must have at least one input port"],[" "]];
                var ok = false;
            }
            if (min(this.in1)<=0) {
                var mess = [[mess],["Port sizes must be positive"],[" "]];
                var ok = false;
            }
            if (size(this.clrs,"*")<sum(this.in1)) {
                var mess = [[mess],["Not enough colors defined (at least "+string(sum(this.in1))+")"],[" "]];
                var ok = false;
            }
            if (size(this.wpos,"*")!=0&&size(this.wpos,"*")!=2) {
                var mess = [[mess],["Window position must be [] or a 2 vector"],[" "]];
                var ok = false;
            }
            if (size(this.wdim,"*")!=0&&size(this.wdim,"*")!=2) {
                var mess = [[mess],["Window dim must be [] or a 2 vector"],[" "]];
                var ok = false;
            }
            if (this.win<-1) {
                var mess = [[mess],["Window number can\'t be  < -1"],[" "]];
                var ok = false;
            }
            if (size(this.per,"*")!=size(this.ymin,"*")) {
                var mess = [[mess],["Size of Refresh Period must equal size of Ymin/Ymax vector"],[" "]];
                var ok = false;
            }
            for (i=1;i<=size(this.per,"*");i+=1) {
                if ((this.per[i-1]<=0)) {
                    var mess = [[mess],["Refresh Period must be positive"],[" "]];
                    var ok = false;
                }
            }
            if (this.N<2) {
                var mess = [[mess],["Buffer size must be at least 2"],[" "]];
                var ok = false;
            }
            if (or(this.ymin>=this.ymax)) {
                var mess = [[mess],["Ymax must be greater than Ymin"],[" "]];
                var ok = false;
            }
            if (!or(this.heritance==[0,1])) {
                var mess = [[mess],["Accept herited events must be 0 or 1"],[" "]];
                var ok = false;
            }
            if (!ok) {
                message([["Some specified values are inconsistent:"],[" "],[mess]]);
            }
            if (ok) {
                this.in1 = this.in1.slice();
                var a = size(this.in1,1);
                var in2 = ones(a,1);
                var tmpvar0 = set_io(this.model,this.graphics,list([this.in1,in2],ones(a,1)),list(),ones(1-this.heritance,1),[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
            }
            if (ok) {
                if (this.wpos==[]) {
                    this.wpos = [[-1],[-1]];
                }
                if (this.wdim==[]) {
                    this.wdim = [[-1],[-1]];
                }
                if (ok) {
                    var period = transpose(this.per.slice());
                    var yy = [[transpose(this.ymin.slice())],[transpose(this.ymax.slice())]];
                    var rpar = [[0],[period.slice()],[yy.slice()]];
                    this.clrs = this.clrs.slice(1-1,sum(this.in1));
                    var ipar = [[this.win],[size(this.in1,"*")],[this.N],[this.wpos.slice()],[this.wdim.slice()],[this.in1.slice()],[this.clrs.slice()],[this.heritance]];
                    this.model.evtin = new ScilabDouble([ones(1-this.heritance,1)]);
                    this.model.dstate = new ScilabDouble([]);
                    this.model.rpar = new ScilabDouble(rpar);
                    this.model.ipar = new ScilabDouble(ipar);
                    this.model.label = new ScilabDouble([this.nom]);
                    this.graphics.id = new ScilabDouble([this.nom]);
                    this.graphics.exprs = new ScilabDouble([this.exprs]);
                    this.x.graphics = this.graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
