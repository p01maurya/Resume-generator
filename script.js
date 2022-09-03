function addNewWEField()
{
    // console.log("Hello");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    //finding reference to know where to inset the above node
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

     weOb.insertBefore(newNode, weAddButtonOb);  //inserting newNode, before weAddButtonOb in weOb
}


function addNewAQField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    //finding reference to know where to inset the above node
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

     aqOb.insertBefore(newNode, aqAddButtonOb); 
}



//Generating Resume

function generateResume(){
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    document.getElementById('nameT2').innerHTML = nameField;

    document.getElementById('contactT').innerHTML = document.getElementById("contactField").value;

    // Important Links
    document.getElementById('linkedT').innerHTML = document.getElementById("LinkedInField").value;
    document.getElementById('gitT').innerHTML = document.getElementById("GitHubField").value;
    document.getElementById('leetT').innerHTML = document.getElementById("cField").value;

    //Objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    //Work Experience
    let wes = document.getElementsByClassName('weField')
    let str=''

    for(e of wes){
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById('weT').innerHTML = str;


    //Academic Qualification
    let aqs = document.getElementsByClassName('eqField')
    let str1=''

    for(e of aqs){
        str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById('aqT').innerHTML = str1;


    //Code for setting image
    let file = document.getElementById("imgField").files[0]

    let reader = new FileReader();

    reader.readAsDataURL(file);

    //Set image to template
    reader.onloadend = function(){
            document.getElementById('imgTemplate').src = reader.result;
    };


    document.getElementById('resume-form').style.display='none';
    document.getElementById('resume-template').style.display='block';
}


//Print Resume
function printResume(){
    const element = document.querySelector('body');
    const opt = {
        filename : `${personName.split(' ')[0]}-Resume.pdf`,
        margin:0,
        image:{
            type: 'PNG',
            quality: 1
        },
        jsPDF: {
            format: 'A4',
            orientation: 'portrait'
        },
    }
    document.querySelector('.print-btn').style.display ='none';
    html2pdf().set(opt).from(element).save();
}
