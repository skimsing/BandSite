//get data from API
const api_key = "7fd7419a-b417-4492-89b9-bfafe5a493bf";
const showsApi = "https://project-1-api.herokuapp.com/showdates?api_key=" + api_key;

axios.get(showsApi).then(e => {
    //get shows
    let showy = e.data;
    displayShows(showy);
  

}).catch(error => {
    console.log("Couldn't get shows, something went wrong")
});

function displayShows(show){
    //add show dates to this section 
    let displayShow = document.querySelector(".showListing__details");

    show.forEach(element => {

        //get data from array
        let getDate = new Date(element.date).toDateString("en-US");
        let getVenue = element.place;
        let getLocation = element.location;

        //create new show box
        let newShow = document.createElement("div");
        newShow.classList.add("showListing__showItem");
        newShow.addEventListener("click", (e) => {

            let selected = document.querySelector(".selected");
            if(selected !== null){
                selected.classList.remove("selected");
            }
            
            e.currentTarget.classList.add("selected");
        });
        displayShow.appendChild(newShow);

        let showHolder = document.createElement("ul");
        showHolder.classList.add("showListing__infoList");
        newShow.appendChild(showHolder);

        //add items
        //dates
        let dateLabel = document.createElement("li");
        dateLabel.classList.add("showListing__date");
        dateLabel.innerText = "date";
        showHolder.appendChild(dateLabel);

        let showDate = document.createElement("li");
        showDate.classList.add("showListing__showDate");
        showDate.innerText = getDate;
        showHolder.appendChild(showDate);
        
        //venue
        let venueLabel = document.createElement("li");
        venueLabel.classList.add("showListing__venue");
        venueLabel.innerText = "venue";
        showHolder.appendChild(venueLabel);

        let showVenue = document.createElement("li");
        showVenue.classList.add('showListing__showVenue');
        showVenue.innerText = getVenue;
        showHolder.appendChild(showVenue);

        //location
        let locationLabel = document.createElement("li");
        locationLabel.classList.add("showListing__location");
        locationLabel.innerText = "location";
        showHolder.appendChild(locationLabel);

        let showLocation = document.createElement("li");
        showLocation.classList.add("showListing__showLocation");
        showLocation.innerText = getLocation;
        showHolder.appendChild(showLocation);

        //buy ticket button
        let buyTic = document.createElement("button");
        buyTic.classList.add("showListing__buyBtn");
        buyTic.innerText = "Buy Tickets";
        newShow.appendChild(buyTic);
    });
}

// displayShows(showData);