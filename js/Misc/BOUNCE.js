/* autogenerated from "macros/Misc/BOUNCE.sci" */
function BOUNCE() {
    BOUNCE.prototype.define = function BOUNCE() {
        n = 2;
        k = 1;
        ipar = [];
        for (i=1;i<=n;i+=1) {
            for (j=i+1;j<=n;j+=1) {
                ipar[k-1] = i;
                k = k+1;
                ipar[k-1] = j;
                k = k+1;
            }
        }
        walls = [[0],[5],[0],[5]];
        this.x = [[2],[2.5]];
        xd = [[0],[0]];
        y = [[3],[5]];
        yd = [[0],[0]];
        g = 9.81;
        C = 0;
        rpar1 = ones(n,1);
        rpar2 = rpar1;
        state = [this.x,xd,y,yd];
        state = transpose(state);
        model = scicos_model();
        model.sim = list("bounce_ball",4);
        model.in1 = [];
        model.out = [[n],[n]];
        model.state = state.slice();
        model.rpar = [[rpar1],[rpar2],[walls],[g],[C]];
        model.ipar = ipar;
        model.nzcross = n*(n-1)/2+4*n;
        model.blocktype = "c";
        model.dep_ut = [false,true];
        exprs = [[strcat(sci2exp(rpar1))],[strcat(sci2exp(rpar2))],[strcat(sci2exp(walls))],[strcat(sci2exp(this.x))],[strcat(sci2exp(xd))],[strcat(sci2exp(y))],[strcat(sci2exp(yd))]];
        gr_i = [];
        this.x = standard_define([3,2],model,exprs,gr_i);
    }
    BOUNCE.prototype.details = function BOUNCE() {
        return this.x;
    }
    BOUNCE.prototype.get = function BOUNCE() {
    }
    BOUNCE.prototype.set = function BOUNCE() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        if (size(exprs,"*")<9) {
            exprs[8-1] = "9.81";
            exprs[9-1] = "0";
        }
        while (true) {
            [ok,rpar1,rpar2,walls,xt,xd,y,yd,g,C,exprs] = scicos_getvalue(["Set Bounce Block"],[["Mass"],["Radius"],["[xmin,xmax,ymin,ymax]"],["xpos"],["xdpos"],["ypos"],["ydpos"],["g (gravity)"],["C (aerodynamic coeff"]],list("vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            xt = xt.slice();
            y = y.slice();
            xd = xd.slice();
            yd = yd.slice();
            rpar1 = rpar1.slice();
            rpar2 = rpar2.slice();
            n = size(xt,"*");
            walls = walls.slice();
            if (walls[1-1]>walls[2-1]) {
                walls = walls[[2,1]-1];
            }
            if (walls[3-1]>walls[3-1]) {
                walls = walls[[3,4]-1];
            }
            if (n!=size(y,"*")||n!=size(rpar1,"*")||n!=size(rpar2,"*")||n!=size(xd,"*")||n!=size(yd,"*")) {
                message("All vectors must have equal size");
                ok = false;
            } else if (!(min([[rpar1],[rpar2]])>0)) {
                message("Mass and radius must be >0");
                ok = false;
            }
            if (!ok) {
                break;
            }
            [model,graphics,ok] = check_io(model,graphics,[],[n,n],[],[]);
            if (ok) {
                k = 1;
                ipar = [];
                for (i=1;i<=n;i+=1) {
                    for (j=i+1;j<=n;j+=1) {
                        ipar[k-1] = i;
                        k = k+1;
                        ipar[k-1] = j;
                        k = k+1;
                    }
                }
                model.rpar = [[rpar1],[rpar2],[walls],[g],[C]];
                model.ipar = ipar;
                state = [xt,xd,y,yd];
                state = transpose(state);
                model.state = state.slice();
                model.nzcross = n*(n-1)/2+4*n;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
    }
}
