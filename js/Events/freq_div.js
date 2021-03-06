/* autogenerated from "macros/Events/freq_div.sci" */
function freq_div() {
    freq_div.prototype.define = function freq_div() {
        var scs_m_1 = scicos_diagram();
        scs_m_1.objs[1-1] = Modulo_Count("define");
        scs_m_1.objs[2-1] = CLKINV_f("define");
        scs_m_1.objs[3-1] = CLKOUTV_f("define");
        scs_m_1.objs[4-1] = IFTHEL_f("define");
        scs_m_1.objs[5-1] = CLKSPLIT_f("define");
        scs_m_1.objs[6-1] = scicos_link();
        scs_m_1.objs[7-1] = scicos_link();
        scs_m_1.objs[8-1] = scicos_link();
        scs_m_1.objs[9-1] = scicos_link();
        scs_m_1.objs[10-1] = scicos_link();
        var blk = scs_m_1.objs[1-1];
        this.graphics = blk.graphics;
        this.model = blk.model;
        this.graphics.orig = new ScilabDouble([0,-100]);
        this.graphics.sz = new ScilabDouble([60,40]);
        this.graphics.exprs = new ScilabDouble(["0"],["3"]);
        this.model.dstate = new ScilabDouble([3]);
        this.model.ipar = new ScilabDouble([3]);
        this.graphics.pout = new ScilabDouble([7]);
        this.graphics.pein = new ScilabDouble([10]);
        blk.graphics = this.graphics;
        blk.model = this.model;
        scs_m_1.objs[1-1] = blk;
        var blk = scs_m_1.objs[2-1];
        this.graphics = blk.graphics;
        this.model = blk.model;
        this.graphics.orig = new ScilabDouble([120,0]);
        this.graphics.sz = new ScilabDouble([20,20]);
        this.graphics.exprs = new ScilabString(["1"]);
        this.model.ipar = new ScilabDouble([1]);
        this.graphics.peout = new ScilabDouble([6]);
        blk.graphics = this.graphics;
        blk.model = this.model;
        scs_m_1.objs[2-1] = blk;
        var blk = scs_m_1.objs[3-1];
        this.graphics = blk.graphics;
        this.model = blk.model;
        this.graphics.orig = new ScilabDouble([130,-160]);
        this.graphics.sz = new ScilabDouble([20,20]);
        this.graphics.exprs = new ScilabString(["1"]);
        this.model.ipar = new ScilabDouble([1]);
        this.graphics.pein = new ScilabDouble([8]);
        blk.graphics = this.graphics;
        blk.model = this.model;
        scs_m_1.objs[3-1] = blk;
        var blk = scs_m_1.objs[4-1];
        this.graphics = blk.graphics;
        this.model = blk.model;
        this.graphics.orig = new ScilabDouble([100,-100]);
        this.graphics.sz = new ScilabDouble([60,40]);
        this.graphics.exprs = new ScilabDouble(["1"],["0"]);
        this.model.ipar = new ScilabDouble([1]);
        this.graphics.pin = new ScilabDouble([7]);
        this.graphics.pein = new ScilabDouble([9]);
        this.graphics.peout = new ScilabDouble([0],[8]);
        blk.graphics = this.graphics;
        blk.model = this.model;
        scs_m_1.objs[4-1] = blk;
        var blk = scs_m_1.objs[5-1];
        this.graphics = blk.graphics;
        this.model = blk.model;
        this.graphics.orig = new ScilabDouble([127,-33]);
        this.graphics.sz = new ScilabDouble([7,7]);
        this.graphics.pein = new ScilabDouble([6]);
        this.graphics.peout = new ScilabDouble([9],[10]);
        blk.graphics = this.graphics;
        blk.model = this.model;
        scs_m_1.objs[5-1] = blk;
        var lnk = scs_m_1.objs[6-1];
        lnk.ct = [5,-1];
        lnk.from = [2,1,0];
        lnk.to = [5,1,1];
        scs_m_1.objs[6-1] = lnk;
        var lnk = scs_m_1.objs[7-1];
        lnk.from = [1,1,0];
        lnk.to = [4,1,1];
        scs_m_1.objs[7-1] = lnk;
        var lnk = scs_m_1.objs[8-1];
        lnk.ct = [5,-1];
        lnk.from = [4,2,0];
        lnk.to = [3,1,1];
        scs_m_1.objs[8-1] = lnk;
        var lnk = scs_m_1.objs[9-1];
        lnk.ct = [5,-1];
        lnk.from = [5,1,0];
        lnk.to = [4,1,1];
        scs_m_1.objs[9-1] = lnk;
        var lnk = scs_m_1.objs[10-1];
        lnk.xx = [0,30,1];
        lnk.yy = [0,-30,1];
        lnk.ct = [5,-1];
        lnk.from = [5,2,0];
        lnk.to = [1,1,1];
        scs_m_1.objs[10-1] = lnk;
        blk={};
        lnk={};
        this.model = scicos_model();
        this.model.sim = new ScilabString(["csuper"]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.evtout = new ScilabDouble([1]);
        this.model.rpar = scs_m_1;
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"freq_div\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,new ScilabDouble([]),gr_i);
        return new BasicBlock(this.x);
    }
    freq_div.prototype.details = function freq_div() {
        return this.x;
    }
    freq_div.prototype.get = function freq_div() {
        for (i=1;i<=length(this.model.rpar.objs);i+=1) {
            var o = this.model.rpar.objs[i-1];
            if (typeof(o)=="Block"&&o.gui=="Modulo_Count") {
                var path = i;
                break;
            }
        }
        var newpar = list();
        var y = 0;
        var spath = list();
        spath[$+1-1] = "model";
        spath[$+1-1] = "rpar";
        spath[$+1-1] = "objs";
        spath[$+1-1] = path;
        var xx = getObjectFromKeyList(this, spath);
        var xxn = xx;
        this.graphics = xx.graphics;
        var exprs = this.graphics.exprs;
        this.model = xx.model;
        this.set_param_popup_title = "Set frequency division block parameters";
        var options = {
            %ph:["Phase (0 to division factor -1)",this.%ph],
            %df:["Division factor",this.%df],
        }
        return options;
    }
    freq_div.prototype.set = function freq_div() {
        for (i=1;i<=length(this.model.rpar.objs);i+=1) {
            var o = this.model.rpar.objs[i-1];
            if (typeof(o)=="Block"&&o.gui=="Modulo_Count") {
                var path = i;
                break;
            }
        }
        var newpar = list();
        var y = 0;
        var spath = list();
        spath[$+1-1] = "model";
        spath[$+1-1] = "rpar";
        spath[$+1-1] = "objs";
        spath[$+1-1] = path;
        var xx = getObjectFromKeyList(this, spath);
        var xxn = xx;
        this.graphics = xx.graphics;
        var exprs = this.graphics.exprs;
        this.model = xx.model;
        while (true) {
            var ok = true;
            this.%ph = parseFloat(arguments[0]["%ph"]);
            this.%df = parseFloat(arguments[0]["%df"]);
            var exprs = [arguments[0]["%ph"], arguments[0]["%df"]];
            if (!ok) {
                break;
            }
            if (ok) {
                if (%df<1) {
                    %df = 1;
                }
                %ph = abs(%ph);
                if (%ph>%df-1) {
                    %ph = %df-1;
                }
                this.graphics.exprs = new ScilabDouble(exprs);
                this.model.ipar = new ScilabDouble([%df]);
                this.model.dstate = new ScilabDouble([%ph]);
                xxn.graphics = this.graphics;
                xxn.model = this.model;
                break;
            }
        }
        if (diffobjs(xxn,xx)) {
            this.model = xx.model;
            var model_n = xxn.model;
            if (!is_modelica_block(xx)) {
                var modified = or(this.model.sim!=model_n.sim)||!isequal(this.model.state,model_n.state)||!isequal(this.model.dstate,model_n.dstate)||!isequal(this.model.rpar,model_n.rpar)||!isequal(this.model.ipar,model_n.ipar)||!isequal(this.model.label,model_n.label);
                if (or(this.model.in!=model_n.in)||or(this.model.out!=model_n.out)) {
                    var needcompile = 1;
                }
                if (or(this.model.firing!=model_n.firing)) {
                    var needcompile = 2;
                }
                if (this.model.sim=="input"||this.model.sim=="output") {
                    if (this.model.ipar!=model_n.ipar) {
                        var needcompile = 4;
                    }
                }
                if (or(this.model.blocktype!=model_n.blocktype)||or(this.model.dep_ut!=model_n.dep_ut)) {
                    var needcompile = 4;
                }
                if ((this.model.nzcross!=model_n.nzcross)||(this.model.nmode!=model_n.nmode)) {
                    var needcompile = 4;
                }
                if (prod(size(model_n.sim))>1) {
                    if (model_n.sim[2-1]>1000) {
                        if (this.model.sim[1-1]!=model_n.sim[1-1]) {
                            var needcompile = 4;
                        }
                    }
                }
            } else {
                var modified = or(model_n!=this.model);
                var eq = this.model.equations;
                var eqn = model_n.equations;
                if (or(eq.model!=eqn.model)||or(eq.inputs!=eqn.inputs)||or(eq.outputs!=eqn.outputs)) {
                    var needcompile = 4;
                }
            }
            getObjectFromKeyList(this, spath) = xxn;
            newpar[size(newpar)+1-1] = 1;
            var y = max(y,needcompile);
        }
        var typ = newpar;
        return new BasicBlock(this.x);
    }
    freq_div.prototype.get_popup_title = function freq_div() {
        return this.set_param_popup_title;
    }
    freq_div.prototype.importset = function freq_div() {
        var graphics = this.x.graphics;
        var ary = getData(graphics.exprs);
        this.%ph = ary[0];
        this.%df = ary[1];
    }
    freq_div.prototype.getContainer = function freq_div() { return new BasicBlock(this.x); }
}
