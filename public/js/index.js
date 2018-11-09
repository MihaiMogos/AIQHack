function send() {
  var data = collectData();
  $.post("127.0.0.1:5000/attrition");
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://127.0.0.1:5000/attrition', true);

  //Send the proper header information along with the request
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function() { // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          // Request finished. Do processing here.
      }
  }
  xhr.send(data);
}

function collectData() {
  return {
    "age":$("#age-input").val(),
    "education":$("#education-input option:selected").text(),
    "jobLevel":$("#job-level-input option:selected").val(),
    "numCompaniesWorked":$("#companies-worked-input").val(),
    "trainingTimesLastYear":$("#trainings-last-year-input").val(),
    "yearsAtCompany":$("#years-company-input").val(),
    "yearsSinceLastPromotion":$("#years-since-last-promotion-input").val(),
    "distanceFromHome":$("#distance-from-home-input").val(),
    "monthlyIncome":$("#salary-input").val(),
    "totalWorkingYears":$("#working-years-input").val()
  }
}