var fx;
var fy;

var lx;
var ly;

var isRectCreating;

//Create Reckt
function RectClick() {
    var bnds = document.getElementById("Canvis").getBoundingClientRect();
    color = document.getElementById("ColorPicker").value;

    var x = event.clientX - bnds.left;
    var y = event.clientY - bnds.top;

    if (fx != null) {
        lx = x;
        ly = y;

        var tx, ty;

        tx = fx;
        if (lx < fx) {
            tx = lx;
        }

        ty = fy;
        if (ly < fy) {
            ty = ly;
        }

        var element = {'type': "rect", 'x' : tx, 'y' : ty, 'width': Math.abs(lx - fx), 'height': Math.abs(ly - fy), 'fill': color};

        addElement(element);
        RemoveTMPElements();

        fx = null;
        fy = null;

        DrawWorkspace();

        console.log("Secound Click");
    }else {
        fx = x;
        fy = y;
        console.log("First Click");
    }
}

//Draw Preview
function RectMove() {
    var bnds = document.getElementById("Canvis").getBoundingClientRect();
    color = document.getElementById("ColorPicker").value;

    var x = event.clientX - bnds.left;
    var y = event.clientY - bnds.top;

    if (fx != null) {
        lx = x;
        ly = y;

        var tx, ty;

        tx = fx;
        if (lx < fx) {
            tx = lx;
        }

        ty = fy;
        if (ly < fy) {
            ty = ly;
        }

        var element = {'type': "rect", 'x' : tx, 'y' : ty, 'width': Math.abs(lx - fx), 'height': Math.abs(ly - fy), 'fill': color};

        
        RemoveTMPElements();
        DrawTMPElement(element);
    }
}