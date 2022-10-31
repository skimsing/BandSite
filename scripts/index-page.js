//get data from API
const api_key = "7fd7419a-b417-4492-89b9-bfafe5a493bf";
const commentsApi = "https://project-1-api.herokuapp.com/comments?api_key=" + api_key;

//get comments in form
let formBox = document.querySelector(".comments__form");
formBox.addEventListener("submit", e => {
    e.preventDefault();
    postComments(e);
});

function postComments(form){

    axios.post(commentsApi,{
        name: `${form.target.commentName.value}`,
        comment: `${form.target.commentText.value}`,
    
    }).then(res =>{
        loadComment();
        form.target.commentName.value= "";
        form.target.commentText.value = "";
    
    }).catch(error => {
        console.log("Something is broken");
    });
}

function loadComment(){
    axios.get(commentsApi).then(e => {

        let raw = e.data;
        raw.sort((a,b) => {
            return b.timestamp - a.timestamp;
        });
        displayComment(raw);

    
    }).catch(error => {
        console.log("Couldn't get comments. Something went wrong");
    });
}


function displayComment(commentArray){

    //find comment area
    let display = document.querySelector(".displayed");
    
    //clear all current comments
    display.innerText = "";

    //create comment
    commentArray.forEach(element => {
            
        //grab from array
        let arrName = element.name;
        let arrDate = new Date(element.timestamp).toLocaleDateString("en-US");
        let arrText = element.comment;
        let id = element.id;  
        let likes = element.likes;

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
        
        let likeBtn = document.createElement("button");
        let likesDisplay = document.createElement("p");
        likesDisplay.innerText = `${likes}`;
        likeBtn.innerText="like";
        likeBtn.classList.add("displayed__likeBtn");
        likeBtn.addEventListener('click', event => {
            axios.put(`https://project-1-api.herokuapp.com/comments/${id}/like?api_key=7fd7419a-b417-4492-89b9-bfafe5a493bf`)
            .then(e => {
                likesDisplay.innerText = "";
                likesDisplay.innerText = `${likes}`;
            })
        });
        
        
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
        //button
        comArea.appendChild(likeBtn);
        likeBtn.appendChild(likesDisplay);
    });

};


loadComment();