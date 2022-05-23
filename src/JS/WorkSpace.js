var OpenFile = "";
var SelectedElement = "";
var Elements = [];
const svgns = "http://www.w3.org/2000/svg";



//Add an Element to the List.
function addElement(element) {
    if (element["type"] != null) {
        element["id"] = Elements.length + 1;
        Elements.push(element);
        return true;
    }
    console.error("Invaild Element Type.");
    return false;
}

//Convert all Elements to SVG and Draw it on the Screen.
function DrawWorkspace() {
    var innerText = "";
    document.getElementById("Canvis").innerHTML = '';

    Elements.forEach(element => {
        console.log(element["type"]);
        if (element["type"] == "rect") {
            //Create Rect
            innerText += "<rect onClick='SelectObject(this.id)' id='" + element["id"] + "' x='" + element["x"] + "' y='" + element["y"] + "' width='" + element["width"] + "' height='" + element["height"] + "' fill='" + element["fill"] + "' />";
        }else if (element["type"] == "circle") {
            //Create Ellipse
            innerText += "<ellipse onClick='SelectObject(this.id)' id='" + element["id"] + "' cx='" + element["cx"] + "' cy='" + element["cy"] + "' rx='" + element["rx"] + "' ry='" + element["ry"] + "' fill='" + element["fill"] + "' />";
        }else if (element["type"] == "path") {
            //Create Path
            var d = "";
            for (var i = 0; i < element["points"].length;i++) {
                if (i == 0) {
                    d += "M" + element["points"][i]["x"] + " " + element["points"][i]["y"];
                }else if (i == (element["points"].length + 1)) {
                    d += " Z";
                }else {
                    d += " L" + element["points"][i]["x"] + " " + element["points"][i]["y"];
                }
            }
            innerText += "<path onClick='SelectObject(this.id)' id='" + element["id"] + "' d='" + d + "' fill='" + element["fill"] + "' />";
        }
    });

    document.getElementById("Canvis").innerHTML += innerText;
}

//Draw an Temporary Element.
function DrawTMPElement(element) {
    var innerText = "";

    if (element["type"] == "rect") {
        //Create Rect
        innerText += "<rect Name='TMP' x='" + element["x"] + "' y='" + element["y"] + "' width='" + element["width"] + "' height='" + element["height"] + "' fill='" + element["fill"] + "' />";
    }else if (element["type"] == "circle") {
        //Create Ellipse
        innerText += "<ellipse  Name='TMP' cx='" + element["cx"] + "' cy='" + element["cy"] + "' rx='" + element["rx"] + "' ry='" + element["ry"] + "' fill='" + element["fill"] + "' />";
    }else if (element["type"] == "path") {
        //Create Path
        var d = "";
        for (var i = 0; i < element["points"].length;i++) {
            if (i == 0) {
                d += "M" + element["points"][i]["x"] + " " + element["points"][i]["y"];
            }else if (i == (element["points"].length + 1)) {
                d += " Z";
            }else {
                d += " L" + element["points"][i]["x"] + " " + element["points"][i]["y"];
            }
        }

        innerText += "<path Name='TMP' d='" + d + "' fill='" + element["fill"] + "'/>";
    }

    document.getElementById("Canvis").innerHTML += innerText;
}

//Rempve all Temporary Element.
function RemoveTMPElements() {
    var elements = document.getElementsByName("TMP");
    elements.forEach(element => {
        element.remove();
    });
}

//Convert all elements to SVG.
function WorkspaceToSVG() {
    var innerText = "";
    Elements.forEach(element => {
        if (element["type"] == "rect") {
            //Convert Rect
            innerText += "<rect x='" + element["x"] + "' y='" + element["y"] + "' width='" + element["width"] + "' height='" + element["height"] + "' fill='" + element["fill"] + "' />";
        }else if (element["type"] == "circle") {
            //Convert Ellipse
            innerText += "<ellipse cx='" + element["cx"] + "' cy='" + element["cy"] + "' rx='" + element["rx"] + "' ry='" + element["ry"] + "' fill='" + element["fill"] + "' />";
        }else if (element["type"] == "path") {
            //Create Path
            var d = "";
            for (var i = 0; i < element["points"].length;i++) {
                if (i == 0) {
                    d += "M" + element["points"][i]["x"] + " " + element["points"][i]["y"];
                }else if (i == (element["points"].length + 1)) {
                    d += " Z";
                }else {
                    d += " L" + element["points"][i]["x"] + " " + element["points"][i]["y"];
                }
            }
    
            innerText += "<path Name='TMP' d='" + d + "'/>";
        }
    });

    return "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>" + innerText + "</svg>";
}
