// AJAX
function getActivity() {
    let activity = new XMLHttpRequest();
    activity.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let newActivity = JSON.parse(this.responseText);
            console.log(newActivity);
            document.getElementById("random-activity").innerHTML = newActivity.activity;
        } else if(this.readyState != 4) {
            document.getElementById("random-activity").innerHTML = "Loading...";
        } else {
            document.getElementById("random-activity").innerHTML = "Something went wrong..."
        }
    }

    activity.open("GET", "http://www.boredapi.com/api/activity/", true);
    activity.send();
};


// EVENT LISTENER
document.getElementById("activity-button").addEventListener("click", getActivity);