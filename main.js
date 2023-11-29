const month = document.querySelector("#month")
const day = document.querySelector("#day")
const year = document.querySelector("#year")
const daynames =[ "Sunday", "Monday", "Tusday", "Wedesday", "Thursday", "Friday","Sturday"]


function  clock () {

const dateTime = new Date()

const monthNames = ["jan", "feb", "mar", "apr", "may", "june","julay", "agust", "sepm","oct","nov","decem"]


month.innerHTML = dateTime.getDate()
day.innerHTML = monthNames[dateTime.getMonth()]
year.innerHTML = dateTime .getFullYear() 


const amorpm = document.querySelector("#AMORPM")

if(dateTime.getHours() > 12)
    amorpm.innerHTML = "PM"


else{
    amorpm.innerHTML = "AM"
}

///selecting hours

const hour = document.querySelector("#hour")
const mint = document.querySelector("#mint")
const secon = document.querySelector("#secon")

if(dateTime.getHours() < 10){
    hour.innerHTML = `0 ${dateTime.getHours()}:`



}
else{
    hour.innerHTML = dateTime.getHours() + ":"


}

mint.innerHTML = dateTime.getMinutes()+ ":"
secon.innerHTML = dateTime.getSeconds()

}

setInterval(clock)