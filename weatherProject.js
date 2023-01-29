
/*
fetch('https://api.api-ninjas.com/v1/weather?lat=28.2096&lon=83.9856', {
  method: "GET",
  headers: {"X-Api-Key":"hqoej/yhv8nQ1TMtFUxqKA==ueZKH16xBESbKNnT"}
})
.then(response => response.json()) 
.then(json => console.log(json)).catch((err) => console.log(err));



fetch(`https://api.openweathermap.org/data/2.5/weather?lat=28.2096&lon=83.9856&appid=9b9bf16f283cb6deb18e61a86b10c2a9`).then(response => response.json()) 
.then(json => console.log(json)).catch((err) => console.log(err));
*/
/*const weather=document.querySelector('.weather')
const btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
    weather.style.backgroundImage="url(cold.jpg)"
})
*/
const body=document.querySelector('body')
const weather=document.querySelector('.weather')
const cloud=document.querySelector('.cloud')
const heading=document.querySelector('.heading')


console.log(body);
window.addEventListener('DOMContentLoaded',()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((myPosition)=>{
    
            const lat=myPosition.coords.latitude
            const lon=myPosition.coords.longitude
            console.log(myPosition.coords.latitude);
            fetch(`https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lon}`, {
      method: "GET",
      headers: {"X-Api-Key":"hqoej/yhv8nQ1TMtFUxqKA==ueZKH16xBESbKNnT"}
    })
    .then(response => response.json()) 
    .then(json => {
        console.log(json)
    const humidity=json.humidity
    const temperature=json.temp
    const windSpeed=json.wind_speed
    const minTemp=json.min_temp
    const maxTemp=json.max_temp
    const cloud=json.cloud_pct
    showTable(humidity,temperature,windSpeed,minTemp,maxTemp,cloud)
    heading.style.position="relative"
    heading.style.top="50px"
   /* if(temperature>28){
        weather.style.background="url(slightSun1.jpg)"
    }
    else if(temperature>35){
        weather.style.background="url(extreme-hot1.jpg.jpg)"
    }
    else if(temperature<20){
        weather.style.background="url(cold.jpg)"
    }
    else if(temperature<10){
        
        const newElement=document.createElement('h1')
        newElement.classList.add("cold-icon")
        newElement.innerText="jniuhy7ght76g"
        weather.append(newElement)
        weather.style.background="url(pleasant.jpg)"
    }*/
    changeBackground(temperature)
    console.log(temperature);
    
    }).catch((err) => console.log(err));
    
        })
    }
function changeBackground(temperature){
    if(temperature<=10){
        weather.style.background="url(freezing.jpg)"
        weather.style.backgroundPosition="center"
        weather.style.backgroundRepeat="no-repeat"
        weather.style.backgroundSize="cover"
        weather.style.margin="0"
        weather.style.padding="0"
        weather.style.overflow="hidden"
        cloud.style.display="none"
        weather.marginTop="20px"
       // weather.style.backgroundPosition="center"

const imgNow=document.createElement('div')
imgNow.innerHTML="<img src='freezing3.jpg'><h1 class='cold-heading'>Must be Freezing</>"
imgNow.classList.add('diff-images')
weather.appendChild(imgNow)

    }
    else if(temperature>10&& temperature<=20){
        weather.style.background="url(cold.jpg)"
        weather.style.backgroundPosition="center"
        weather.style.backgroundRepeat="no-repeat"
        weather.style.backgroundSize="cover"
        weather.style.margin="0"
        weather.style.padding="0"
        weather.style.overflow="hidden"
        cloud.style.display="none"
        weather.marginTop="20px"
       // weather.style.backgroundPosition="center"

const imgNow=document.createElement('div')
imgNow.innerHTML="<img src='freezing2.jpg'><h1 class='cold-heading'>It's freaking Cold</>"
imgNow.classList.add('diff-images')
weather.appendChild(imgNow)

    }
    else if(temperature>20&& temperature<=25){
        weather.style.background="url(freezing2.jpg)"
        weather.style.backgroundPosition="center"
        weather.style.backgroundRepeat="no-repeat"
        weather.style.backgroundSize="cover"
        weather.style.margin="0"
        weather.style.padding="0"
        weather.style.overflow="hidden"
        cloud.style.display="none"
        weather.marginTop="20px"
        const imgNow=document.createElement('div')
imgNow.innerHTML="<img src='pleasant.jpg'><h1 class='cold-heading'>It's nice and pleasant</>"
imgNow.classList.add('diff-images')
weather.appendChild(imgNow)
   
}
    else if(temperature>25&& temperature<=30){
        weather.style.background="url(slightSun1.jpg)"
        weather.style.backgroundPosition="center"
        weather.style.backgroundRepeat="no-repeat"
        weather.style.backgroundSize="cover"
        weather.style.margin="0"
        weather.style.padding="0"
        weather.style.overflow="hidden"
        cloud.style.display="none"
        weather.marginTop="20px"
        const imgNow=document.createElement('div')
imgNow.innerHTML="<img src='slightSun2.jpg'><h1 class='cold-heading'>T's bit sunny.Feels like Summer</>"
imgNow.classList.add('diff-images')
weather.appendChild(imgNow)
   
}
    else if(temperature>30){
        weather.style.background="url(extreme-hot1.jpg)"
        weather.style.backgroundPosition="center"
        weather.style.backgroundRepeat="no-repeat"
        weather.style.backgroundSize="cover"
        weather.style.margin="0"
        weather.style.padding="0"
        weather.style.overflow="hidden"
        cloud.style.display="none"
        weather.marginTop="20px"
        const imgNow=document.createElement('div')
imgNow.innerHTML="<img src='extreme-hot2.jpg'><h1 class='cold-heading'>It's burning me !!! Freaking Hot</>"
imgNow.classList.add('diff-images')
weather.appendChild(imgNow)
   
}
}
function showTable(humidity,temperature,windSpeed,minTemp,maxTemp,cloud){
    const table=document.createElement('div')
    table.classList.add('table')
    table.innerHTML=`<table border=1 title="WEATHER TABLE"><tr><th colspan=6 style="background-color:grey;color:white;padding:10px;font-size:30px">Weather_Report</th></tr><tr><th  style="font-size:25px;padding:5px;background-color:powderblue">Humidity</th>
    <th  style="font-size:25px;padding:5px;background-color:powderblue">Temperature</th><th  style="font-size:25px;padding:5px;background-color:powderblue">Wind-Speed</th><th  style="font-size:25px;padding:5px;background-color:powderblue">Min-Temperature</th><th  style="font-size:25px;padding:5px;background-color:powderblue">Max-Temperature</th><th  style="font-size:25px;padding:5px;background-color:powderblue">Cloud</th></tr>
    <tr><td>${humidity}</td><td>${temperature}</td><td>${windSpeed}</td><td>${minTemp}</td><td>${maxTemp}</td><td>${cloud}</td></tr></table>`
    weather.appendChild(table)
}
})
