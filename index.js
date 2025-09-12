const currentDate = new Date();

function createContentElement(contentDescription,contentDate)
    {
        let contentElement = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let l = document.createElement("label");
        l.innerHTML = "Target Date" + " " + contentDate;
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

content1Description = "This is Task 1";
content1Date = "2023-07-04"

content2Description = "This is Task 2";
content2Date = "2023-07-12"

content3Description = "This is Task 3";
content3Date = "2024-01-01"

displayContents(content1Description,content1Date);
