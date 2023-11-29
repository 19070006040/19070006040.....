"use strict";

const CITY_URL = "https://run.mocky.io/v3/aa687762-3389-457a-a34c-c64e991a13e9";

fetch(CITY_URL)
    .then(res => res.json())
    .then(data => optionsList(data))

const optionsList = (data) => 
{
    const courseOptions = document.querySelector("#courseSelect")
    const cityOptions = document.querySelector("#citySelect");

    for(let dt of data) 
    {
        let course_type = dt.course_type
        const option_course = document.createElement("option")
        option_course.innerText = course_type
        option_course.value = course_type
        courseOptions.appendChild(option_course)
        
        let cityName = dt.city_name
        const option_city = document.createElement("option")
        option_city.innerText = cityName
        option_city.value = cityName
        cityOptions.appendChild(option_city)
    }
}


function validatePhoneNumber(phoneNumber) 
{
    
    const turkishPhoneNumber = /^\90[0-9]{10}$/;
    const isValid = turkishPhoneNumber.test(phoneNumber);

    return isValid;
}

document.getElementById("appointmentForm").addEventListener("submit", function (event) 
{
    const phoneNumberInput = document.getElementById("PhoneNumber");
    const phoneNumber = phoneNumberInput.value;

    if (phoneNumber.length !== 12 || !validatePhoneNumber(phoneNumber)) 
    {
        alert("Invalid Turkish phone number. Please enter a valid, complete phone number with your area code without +.");
        event.preventDefault(); 
    }
}
);

