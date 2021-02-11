var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

    button.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=2c49af19f2541e199c58cba3b79339cd')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue =  data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = 'Temperature is: ' +''+tempValue;
            desc.innerHTML = 'Weather type is:' +''+ descValue;
        })
        .catch(err => alert('Sorry check the city name'))
    })


 
    
