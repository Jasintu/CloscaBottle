"use strict";
let body = document.querySelector("body");
let btnNext = document.querySelector("#nextImg");
let btnBack = document.querySelector("#backImg");
let bottle = document.querySelector("#showBottle");
let h4 = document.querySelector("h4");
let h3 = document.querySelector("h3");
let main = document.querySelector("main");
let img = document.querySelector("#imgbottle");
let imgBackground = document.querySelector("#imgBackground");
let mark = document.querySelector("#mark");
let swithBottle = 1;
btnNext.addEventListener("click", function () {
    img.style.animation = "ImageInto 0.5s normal";
    main.style.animation = "animarionInto 0.5s normal";
    setTimeout(() => {
        img.style.removeProperty("animation");
        main.style.removeProperty("animation");
    }, 490);
    if (swithBottle === 1 || swithBottle === -3) {
        savanna();
        swithBottle = 2;
    }
    else if (swithBottle === 2 || swithBottle === -2) {
        glacier();
        swithBottle = 3;
    }
    else if (swithBottle === 3 || swithBottle === -1) {
        coral();
        swithBottle = 4;
    }
    else if (swithBottle === 4 || swithBottle === 0) {
        beach();
        swithBottle = 1;
    }
    mark.innerText = `${swithBottle} / 4`;
});
btnBack.addEventListener("click", function () {
    img.style.animation = "ImageInto 0.3s normal";
    main.style.animation = "animarionInto 0.5s normal";
    setTimeout(() => {
        img.style.removeProperty("animation");
        main.style.removeProperty("animation");
    }, 290);
    swithBottle -= 1;
    if (swithBottle === 4 || swithBottle === 0) {
        coral();
        mark.innerText = `4 / 4`;
    }
    else if (swithBottle === 3 || swithBottle === -1) {
        glacier();
        mark.innerText = `3 / 4`;
    }
    else if (swithBottle === 2 || swithBottle === -2) {
        savanna();
        mark.innerText = `2 / 4`;
    }
    else if (swithBottle === 1 || swithBottle === -3) {
        beach();
        swithBottle = 1;
        mark.innerText = `1 / 4`;
    }
});
function savanna() {
    body.style.backgroundColor = "rgb(233, 191, 139)";
    bottle.innerText = "SAVANNA";
    h4.innerHTML = "The Earth’s area affected by desertification is approx 11 times India’s size.";
    h3.innerHTML = "The Savannas act as a carbon sink, absorbing CO2 from the atmosphere and helping to maintain the balance of global temperatures";
    img.src = "https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/savanna_OK.png?v=4783820813181844557";
    imgBackground.style.background = "url(https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)";
    imgBackground.style.backgroundSize = "cover";
}
function glacier() {
    body.style.backgroundColor = "rgb(182, 214, 200)";
    bottle.innerText = "GLACIER";
    h4.innerHTML = "Glaciers contain 75% of the World's freshwater.";
    h3.innerHTML = "The effects of melting ice glaciers are biodiversity loss, the rising of the sea level and the deficiency of freshwater, among others.";
    img.src = "https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Glacier_OK.png?v=7185877315400411030";
    imgBackground.style.background = "url(https://www.discover-the-world.com/app/uploads/2018/05/chile-patagonia-calving-glacier-is-1150x863-c-default.jpg)";
    imgBackground.style.backgroundSize = "cover";
}
function coral() {
    body.style.backgroundColor = "rgb(232, 99, 87)";
    bottle.innerText = "CORAL";
    h4.innerHTML = "We will have lost 60% of our coral reefs by 2030.";
    h3.innerHTML = "Coral reefs are essential to humans, as they protect the shorelines and are a source of nutrients and habitat for thousands of marine species.";
    img.src = "https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Coral_OK.png?v=145969";
    imgBackground.style.background = "url(https://images.unsplash.com/photo-1546500840-ae38253aba9b?ixid=MnwxMjA3…90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3260&q=80)";
    imgBackground.style.backgroundSize = "cover";
}
function beach() {
    body.style.backgroundColor = "rgb(230, 222, 208)";
    bottle.innerText = "BEACH";
    h4.innerHTML = "In 20 years, there could be more plastic in our oceans than fish.";
    h3.innerHTML = "Plastic pollution injures more than 100.000 marine animals every year.It takes around 450 years for one plastic bottle to decompos.";
    img.src = "https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=1178426";
    imgBackground.style.background = "url(https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Beach_1920.jpg?v=1029210661698833530)";
    imgBackground.style.backgroundSize = "cover";
}
