/* autogenerated from "macros/IntegerOp/BITSET.sci" */
function BITSET() {
    BITSET.prototype.define = function BITSET() {
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["bit_set_32"]), new ScilabDouble([4]));
        this.model.in1 = new ScilabDouble([1]);
        this.model.in2 = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.out2 = new ScilabDouble([1]);
        this.model.intyp = new ScilabDouble([3]);
        this.model.outtyp = new ScilabDouble([3]);
        this.model.opar = list(new ScilabDouble([uint32(0)]));
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = [true,false];
        exprs = [[sci2exp(3)],[sci2exp(0)]];
        gr_i = [];
        this.x = standard_define([4,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    BITSET.prototype.details = function BITSET() {
        return this.x;
    }
    BITSET.prototype.get = function BITSET() {
        var options = {
            Datatype:[msprintf("Data Type %s","(3:int32, 4:int16, 5:int8, ...)"),this.Datatype],
            bit:["Index of Bit (0 is least significant)",this.bit],
        }
        return options;
    }
    BITSET.prototype.set = function BITSET() {
        this.Datatype = arguments[0]["Datatype"]
        this.bit = parseFloat(arguments[0]["bit"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.Datatype,this.bit,exprs] = scicos_getvalue([[msprintf("Set %s block parameters","BITSET")],[" "],["Set a bit"],[" "]],[msprintf("Data Type %s","(3:int32, 4:int16, 5:int8, ...)"),"Index of Bit (0 is least significant)"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            in1 = [this.model.in1,this.model.in2];
            if (floor(this.bit)!=this.bit) {
                block_parameter_error(msprintf("Wrong type for \'%s\' parameter: %5.1f.","Index of Bit",this.bit),"Must be integer.");
                ok = false;
            }
            if ((this.Datatype==3)||(this.Datatype==6)) {
                if (this.bit>31||this.bit<0) {
                    block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Index of Bit",this.bit),msprintf("Must be in the interval %s.","[0, 31]"));
                    ok = false;
                }
                this.bit = uint32(this.bit);
                n = 2^this.bit;
                n = uint32(n);
                this.model.sim = list(new ScilabString(["bit_set_32"]), new ScilabDouble([4]));
            } else if ((this.Datatype==4)||(this.Datatype==7)) {
                if (this.bit>15||this.bit<0) {
                    block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Index of Bit",this.bit),msprintf("Must be in the interval %s.","[0, 15]"));
                    ok = false;
                }
                this.bit = uint16(this.bit);
                n = 2^this.bit;
                n = uint16(n);
                this.model.sim = list(new ScilabString(["bit_set_16"]), new ScilabDouble([4]));
            } else if ((this.Datatype==5)||(this.Datatype==8)) {
                if (this.bit>7||this.bit<0) {
                    block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Index of Bit",this.bit),msprintf("Must be in the interval %s.","[0, 7]"));
                    ok = false;
                }
                this.bit = uint8(this.bit);
                n = 2^this.bit;
                n = uint8(n);
                this.model.sim = list(new ScilabString(["bit_set_8"]), new ScilabDouble([4]));
            } else {
                block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Data Type",this.Datatype),msprintf("Must be in the interval %s.","[3, 8]"));
                ok = false;
            }
            if (ok) {
                it = this.Datatype;
                ot = this.Datatype;
                out = [1,1];
                [this.model,graphics,ok] = set_io(this.model,graphics,list(in1,it),list(out,ot),[],[]);
            }
            if (ok) {
                graphics.exprs = exprs;
                this.model.opar = list(new ScilabDouble([n]));
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
