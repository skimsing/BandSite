let showData = [
    {
        date: "Mon Sept 06 2021",
        venue:"Ronald Lane",
        location: "San Francisco, CA",
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
    },

]


function displayShows(show){
    //add show dates to this section 
    let displayShow = document.querySelector(".showListing__details");

    show.forEach(element => {

        //get data from array
        let getDate = element.date;
        let getVenue = element.venue;
        let getLocation = element.location;

        //create new show box
        let newShow = document.createElement("div");
        newShow.classList.add("showListing__showItem");
        newShow.addEventListener("click", (e) => {
            newShow.style.backgroundColor = "#e1e1e1";
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

displayShows(showData);