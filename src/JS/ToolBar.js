var elm = document.getElementById("Canvis");
var CurrentTool = "Arrow";

function SelectTool(Tool) {
    CurrentTool = Tool;

    var els = document.getElementsByClassName("ToolBar");

    Array.prototype.forEach.call(els, function(el) {
        el.classList.remove('Active');
    });

    document.getElementById(Tool).classList.add('Active');
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (CurrentTool == "Select") {
    
        }else if (CurrentTool == "Path") {
            
        }else if (CurrentTool == "Fill") {
    
        }else if (CurrentTool == "Rect") {
            RectClick();
        }else if (CurrentTool == "Ellipse") {
            
        }
    }
});

function SelectObject(Object) {
    console.log(Object);
    if (CurrentTool == "Select") {
        SelectedElement = Object;
        document.getElementById(Object).style.borderColor = "#181818";
        document.getElementById(Object).style.borderRadius = "10px";
        document.getElementById(Object).style.borderStyle = "solid";
    }else if (CurrentTool == "Fill") {
        SelectedElement = Object;
        ChangeColor(SelectedElement);
    }
}

elm.addEventListener("click", function(e) {
    if (CurrentTool == "Select") {

    }else if (CurrentTool == "Path") {
        
    }else if (CurrentTool == "Fill") {

    }else if (CurrentTool == "Rect") {
        RectClick();
    }else if (CurrentTool == "Ellipse") {
        
    }
});

elm.addEventListener("mousemove", function(e) {
    if (CurrentTool == "Select") {

    }else if (CurrentTool == "Path") {
        
    }else if (CurrentTool == "Fill") {

    }else if (CurrentTool == "Rect") {
        RectMove();
    }else if (CurrentTool == "Ellipse") {
        
    }
});