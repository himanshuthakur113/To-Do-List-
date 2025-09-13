const currentDate = new Date();

function createContentElement(contentDescription,contentDate)
    {
        let contentElement = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let l = document.createElement("label");
        l.innerHTML = contentDescription + "(Target Date" + " " + contentDate + ")";
        contentElement.appendChild(checkbox);
        contentElement.appendChild(l);
        return contentElement;
    }

function displayContents(contentDescription,contentDate)
    {
        if(new Date(contentDate).getTime() <= currentDate.getTime())
        {
            let container1 = document.getElementById("highPriorityContainer");
            let contentItem1 = createContentElement(contentDescription,contentDate);
            container1.appendChild(contentItem1);
        }
        else
        { 
            let container2 = document.getElementById("lowPriorityContainer"); 
            let contentItem2 = createContentElement(contentDescription,contentDate);
            container2.appendChild(contentItem2);
        }
    }

const textInput = document.getElementById("taskInput");
const button = document.getElementById("addButton");
const dateInput = document.getElementById("deadlineInput");
const del_button = document.getElementById("deleteButton");
const str_button = document.getElementById("strikeButton");

button.addEventListener("click", () => {
    const CD = textInput.value;
    const D = dateInput.value;
    displayContents(CD,D);
});

del_button.addEventListener("click", () => {             
    let h = document.getElementById("highPriorityContainer");         
    let l = document.getElementById("lowPriorityContainer");             
    h.innerHTML = "";
    l.innerHTML = "";
});

str_button.addEventListener("click", () => {             
    let h = document.getElementById("highPriorityContainer");         
    let l = document.getElementById("lowPriorityContainer");             
    h.style.textDecoration = "line-through";
    l.style.textDecoration = "line-through";
});




