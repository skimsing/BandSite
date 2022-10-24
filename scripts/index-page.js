let commented = [
    {
        name: "Connor Walton",
        date: "02/17/2021",
        yourComment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        name:"Emilie Beach",
        date:"01/09/2021",
        yourComment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        name:"Miles Acosta",
        date:"12/20/2020",
        yourComment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",

    }
];

//get comments in form
let formBox = document.querySelector(".comments__form");
formBox.addEventListener("submit",getComments);

//get date
const dateNow = new Date();
const dateString = dateNow.toLocaleDateString("en-GB");

function getComments(form){
    form.preventDefault();
    
    let comment ={
        name: form.target.commentName.value,
        date: dateString,
        yourComment: form.target.commentText.value,
    }
    
    commented.unshift(comment);
    displayComment(commented);
};

function displayComment(comment){

    //clear all current comments
    //find comment area
    let display = document.querySelector(".displayed");

    display.innerText = "";

    //create comment
    for(let i = 0; i <comment.length; i++){
        //grab from array
        let arrName = comment[i].name;
        let arrDate = comment[i].date;
        let arrText = comment[i].yourComment;
           

        //make new comment area 
        let comContainer = document.createElement("div");
        comContainer.classList.add("displayed__container");

        let newCom = document.createElement("div");
        newCom.classList.add("displayed__comment");

        
        //make comment section
        let icon = document.createElement("img");
        icon.classList.add("displayed__icon");

        let comArea = document.createElement("div");
        comArea.classList.add("displayed__box");
        
        let label = document.createElement("div");
        label.classList.add("displayed__label");
        
        let newName = document.createElement("p");
        newName.classList.add("displayed__name");
        
        let newDate = document.createElement("p");
        newDate.classList.add("displayed__date");
        
        let text = document.createElement('p');
        text.classList.add("displayed__text");
        
        //add text to boxes 
        newName.innerText = arrName;
        newDate.innerText = arrDate;
        text.innerText = arrText;
        
        //append children
        display.appendChild(comContainer);
        comContainer.appendChild(newCom);
        newCom.appendChild(icon);
        newCom.appendChild(comArea);
        comArea.appendChild(label);
        label.appendChild(newName);
        label.appendChild(newDate);
        comArea.appendChild(text);
    }

};

displayComment(commented);

