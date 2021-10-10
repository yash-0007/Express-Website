const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById('submitBtn');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = 'Please enter the city name';
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `http://api.weatherapi.com/v1/current.json?key=dd0f917562914813b7691021210109&q=${cityVal}`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].location.name}, ${arrData[0].location.country}`;
            temp_real_val.innerText = arrData[0].current.temp_c;
            datahide.classList.remove('data_hide');
        } catch {
            city_name.innerText = 'Please enter valid city name';
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);