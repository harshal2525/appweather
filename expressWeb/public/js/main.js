const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === "")
    {
       city_name.innerText = `Plz Write The Name Before Search`;
    }

    else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ec29c13794b1148786c8ed165da72cae`
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        temp_status.innerText = arrData[0].weather[0].main;
        }
        catch{
            city_name.innerText = `Plz Enter The City Name Properly`;
        }

    }


}

submitBtn.addEventListener('click',getInfo);