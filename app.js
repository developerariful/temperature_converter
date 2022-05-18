const submit = document.querySelector(".btn");
const celcius = document.querySelector(".celcuis");
const fahrenheit = document.querySelector(".far");
const kelven = document.querySelector(".kelven");
const weather_img = document.querySelector(".weather_img");

const conditionImag = {
  extraCold:
    "https://images.unsplash.com/photo-1519832064761-bbc1d76d4ef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  cold: "https://images.unsplash.com/photo-1577457943926-11193adc0563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80",
  normalCold:
    "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  normal:
    "https://images.unsplash.com/photo-1561553590-267fc716698a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
  sunny:
    "https://images.unsplash.com/photo-1462524500090-89443873e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  desert:
    "https://images.unsplash.com/photo-1515581247767-d78687bf2254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  muri: "https://images.unsplash.com/photo-1593483112335-b341b2e748d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWdnfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
};

let lastEdit = "celcius";

const updateLastEdit = () => {
  celcius.addEventListener("keyup", (e) => {
    lastEdit = "celcius";
  });
  fahrenheit.addEventListener("keyup", (e) => {
    lastEdit = "fahrenheit";
  });
  kelven.addEventListener("keyup", (e) => {
    lastEdit = "kelven";
  });
};

updateLastEdit();

const convert = (lastEdit, temp) => {
  if (lastEdit === "celcius") {
    const fvlue = parseInt(celcius.value) * (9 / 5) + 32 ;
    const kvlue = parseInt(celcius.value) + 273 ;

    kelven.value = Math.floor(kvlue)+ " °K";
    fahrenheit.value = Math.floor(fvlue)+ " °F";

  } else if (lastEdit === "fahrenheit") {
    const cvlue = (parseInt(fahrenheit.value) - 32) * (5 / 9) ;
    const kvlue = (parseInt(fahrenheit.value) - 32) * (5 / 9) + 273 ;

    celcius.value = Math.floor(cvlue)+ " °C";
    kelven.value = Math.floor(kvlue)+ " °K";
  } else if (lastEdit === "kelven") {
    const cvlue = parseInt(kelven.value) - 273 ;
    const fvlue = parseInt(kelven.value) - 273 * (5 / 9) + 32 ;

    celcius.value = Math.floor(cvlue)+ " °C";
    fahrenheit.value = Math.floor(fvlue)+ " °F";
  }
};

const lastUpdateImg = (temp) => {
  if (temp < -10) {
    weather_img.setAttribute("src", conditionImag.extraCold);
  } else if (temp > -10 && temp <= 0) {
    weather_img.setAttribute("src", conditionImag.cold);
  } else if (temp > 0 && temp <= 15) {
    weather_img.setAttribute("src", conditionImag.normalCold);
  } else if (temp > 15 && temp <= 25) {
    weather_img.setAttribute("src", conditionImag.normal);
  } else if (temp > 25 && temp <= 35) {
    weather_img.setAttribute("src", conditionImag.sunny);
  } else if (temp > 35) {
    weather_img.setAttribute("src", conditionImag.desert);
  } else {
    weather_img.setAttribute("src", conditionImag.muri);
  }
};

submit.addEventListener("click", () => {
  convert(lastEdit);
  let = 0;
  if (lastEdit === "celcius") {
    temp = celcius.value;
  } else if (lastEdit === "fahrenheit") {
    temp = parseInt(fahrenheit.value) - 32 * (5 / 9);
  } else if (lastEdit === "kelven") {
    temp = parseInt(kelven.value) - 273;
  }
  lastUpdateImg(temp);
});
