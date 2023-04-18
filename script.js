function addRecommendation() {
  // Get new recommendation message
  let mssg = document.getElementById("new_recommendation");

  // If user left a recommendation, display pop-up
  if (mssg.value != null && mssg.value.trim() != "") {
    console.log("New recommendation added");

    // Calling showPopup
    showPopup(true);

    // Create new recommendation element
    var newRecmmndtn = document.createElement("div");
    newRecmmndtn.setAttribute("class", "recommendation");
    newRecmmndtn.innerHTML =
      "<span>&#8220;</span>" + mssg.value + "<span>&#8221;</span>";

    // Add the new recommendation to the list of recommendations
    document.getElementById("all_recommendations").appendChild(newRecmmndtn);

    //Reset value of the text area
    mssg.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById("popup").style.visibility = "visible";
  } else {
    document.getElementById("popup").style.visibility = "hidden";
  }
}
