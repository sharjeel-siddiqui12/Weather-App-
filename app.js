





    let doGetWeather = () => {

        let input = document.querySelector("#input_txt").value;
        let main = document.getElementById("main")
        main.style.display = 'flex'
        axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=b4cee5364b20ed4235d4be591ec07e21&q=${input}`)
            .then(function (response) {
                const weather = response.data
                switch (weather.weather[0].main) {
                    case 'Clear':
                        main.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtUoAazsXbDED7i2phtMq4f6tnr5jjCRrnlX-8o3E&s')"
                        break;
                    case 'Smoke':
                        main.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0s5cwZo-5jjyS8q9NaDAHhFoKSH35hFkwOQ&usqp=CAU')"
                        break;
                    case 'Rain':
                        main.style.backgroundImage = "url('https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjBkYXl8ZW58MHx8MHx8&w=1000&q=80')"
                        break;
                    case 'Clouds':
                        main.style.backgroundImage = "url('https://scied.ucar.edu/sites/default/files/styles/half_width/public/2021-10/cumulus-clouds.jpg?itok=qsNXhfWh')"
                        break;
                    case 'Haze':
                        main.style.backgroundImage = "url('https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FQPQPJX64AI6TA2BZQ644UXH3Y.jpg')"
                        break;

                    default:
                        main.style.backgroundImage = "url('https://static01.nyt.com/images/2014/12/11/technology/personaltech/11machin-illo/11machin-illo-superJumbo-v3.jpg')"
                        break;
                }

                document.querySelector("#name").innerHTML = `<h1>Name:</h1><h2>${weather.name}</h2>`;
                document.querySelector("#temp").innerHTML = `<h1>Temperature:</h1><h2>${weather.main.temp}°C</h2 >`;
                document.querySelector("#weather").innerHTML = `<h1>Weather:</h1><h2>${weather.weather[0].main}</h2 > 
                                                        <img width="50" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"/>`;
                document.querySelector("#feel").innerHTML = `<h1>Feels Like:</h1><h2>${weather.main.feels_like}°C</h2>`;
                document.querySelector("#humidity").innerHTML = `<h1>Humidity:</h1><h2>${weather.main.humidity}%</h2>`;
                document.querySelector("#pressure").innerHTML = `<h1>Pressure:</h1><h2>${weather.main.pressure} hPa</h2> <h3>Normal 1000 hPa</h3>`;
                document.querySelector("#visibility").innerHTML = `<h1>Visibility:</h1><h2>${weather.visibility} m</h2> <h3>Maximum 10000 m</h3>`;
                document.querySelector("#wind_deg").innerHTML = `<h1>Wind Direction:</h1><h2>${weather.wind.deg}°</h2>`;
                document.querySelector("#wind_speed").innerHTML = `<h1>Wind Speed:</h1><h2>${weather.wind.speed} m/s</h2>`;
                let sec = weather.sys.sunrise;
                let date = new Date(sec * 1000);
                let timestring = date.toLocaleTimeString();
                let ssec = weather.sys.sunset;
                let sdate = new Date(ssec * 1000);
                let stimestring = sdate.toLocaleTimeString();
                document.querySelector("#sunrise").innerHTML = `<h1>Sunrise:</h1><h2>${timestring} </h2>`;

                document.querySelector("#sunset").innerHTML = `<h1>Sunset:</h1><h2>${stimestring} </h2>`;


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }