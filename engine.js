// Track position in quiz
let position = 1;

// Check if options are selected
let optionsSelected = 0;

// Arrays to store links based on selection
let qOne = []
let qTwo = []
let qThree = []

// Objects to store information on each selection - Question one
const dryLink1 = {
    text: "Products to help dry scalp",
    links: ["https://truahair.ie/product/system-professional-balance-shampoo/", "https://truahair.ie/product/scalp-genesis-soothing-shampoo/"],
}


const oilyLink1 = {
    text: "Products to help oily scalp",
    links: ["https://truahair.ie/product/scalp-genesis-purifying-shampoo/", "https://truahair.ie/product/wella-invigo-balance-aqua-pure-shampoo/"],
}

const dandruffLink1 = {
    text: "Products to help with Dandruff",
    links: ["https://truahair.ie/product/system-professional-purify-shampoo/", "https://truahair.ie/product/scalp-genesis-anti-dandruff-shampoo/"],
}

const thinningLink1 = {
    text: "Products to help with thinning scalp",
    links: ["https://truahair.ie/product/scalp-genesis-root-activating-shampoo/", "https://truahair.ie/?s=NIOXIN"],
}

const normalLink1 = {
    text: 'Products for a normal scalp',
    links: ["https://truahair.ie/product/wella-luminous-reveal-shampoo/", "https://truahair.ie/product/system-professional-hydrate-shampoo/"],
}


// Objects to store information on each selection - Question two
const dryLink2 = {
    text: "Products to help dry hair",
    links: ["https://truahair.ie/product/wella-invigo-nutri-enrich-conditioner/", "https://truahair.ie/product/system-professional-hydrate-conditioner/"],
}

const stressedLink2 = {
    text: "Products to help stressed hair",
    links: ["https://truahair.ie/product/system-professional-smoothen-conditioner/", "https://truahair.ie/product/wella-invigo-nutri-enrich-conditioner/"],
}

const damagedLink2 = {
    text: "Products to help damaged hair",
    links: ["https://truahair.ie/product/wella-fusion-conditioner/", "https://truahair.ie/product/wella-system-professional-repair-conditioner/"],
}

const limpLink2 = {
    text: "Products to help limp hair",
    links: ["https://truahair.ie/product/wella-invigo-volume-boost-mask/", "https://truahair.ie/product/system-professional-volumize-mask/"],
}

const thinningLink2 = {
    text: "Products to help thinning hair",
    links: ["https://truahair.ie/product/wella-invigo-anti-hair-loss-serum/", "https://truahair.ie/product/nioxin-leave-in-treatment/"],
}

const lackingshineLink2 = {
    text: "Products to help hair lacking shine",
    links: ["https://truahair.ie/product/wella-luminous-smoothing-oil/", "https://truahair.ie/product/system-professional-color-save-shimmering-spray/"],
}

const curlyLink2 = {
    text: "Products to help curly hair",
    links: ["https://truahair.ie/product/wella-eimi-nutricurls-fresh-up/", "https://truahair.ie/product/wella-nutricurls-mask/"],
}



// Objects to store information on each selection - Question three 

const hottoolsLink3 = {
    text: "I use hot tools regularly!",
    links: ["https://truahair.ie/product/wella-eimi-thermal-image/"],
}

const increaseshineLink3 = {
    text: "I want to increase shine!",
    links: ["https://truahair.ie/product/wella-luminous-reboost-mask/"],
}


const deeprepairLink3 = {
    text: "My hair needs deep repair!",
    links: ["https://truahair.ie/product/nioxin-deep-repair-hair-mask/"],
}

const volumerootLink3 = {
    text: "I want volume from the root!",
    links: ["https://truahair.ie/product/wella-invigo-volume-boost-uplifting-care-spray/"],
}

const shreddingLink3 = {
    text: "My hair is prone to shredding!",
    links: ["https://truahair.ie/product/nioxin-night-density-rescue/"],
}

const knottyLink3 = {
    text: "My hair is knotty!",
    links: ["https://truahair.ie/product/wella-fusion-mask/"],
}

const dryshampooLink3 = {
    text: "I use dry shampoo regularly!",
    links: ["https://truahair.ie/product/martinsson-king-invisible-cleanse-dry-shampoo/"],
}



// When an option is selected 
$('.contain-quiz').on("click", ".select-option", function () {
    $(this).toggleClass("selected");
    if ($(this).hasClass("selected")) {
        optionsSelected++;
    } else {
        optionsSelected--;
    }
    if (optionsSelected > 0) {
        // Reveal continue btn
        $('.continue-btn').removeClass("d-none");
    } else {
        $('.continue-btn').addClass("d-none");
    }

});


// When continue is clicked 
$('.contain-quiz').on("click", ".continue-btn", function () {
    console.log("Position: " + position)
    // Hide Current Question 
    $('.position' + position).addClass("d-none");
    position++;
    // Clear options selected
    $('.continue-btn').addClass("d-none");


    if (position == 5) {

        // Results for Q1
        for (i = 0; i < qOne.length; i++) {
            document.getElementById("results").innerHTML += '<div class="col-12"><p>Result: ' + qOne[i].text + '</p></div>';
        }

        // Results for Q2
        for (i = 0; i < qTwo.length; i++) {
            document.getElementById("results").innerHTML += '<div class="col-12"><p>Result: ' + qTwo[i].text + '</p></div>';
        }

        // Results for Q3
        for (i = 0; i < qThree.length; i++) {
            document.getElementById("results").innerHTML += '<div class="col-12"><p>Result: ' + qThree[i].text + '</p></div>';
        }

    }
    

    optionsSelected = 0;
    $('.position' + position).removeClass("d-none");




});


// Question1 Clicks 
$('.contain-quiz').on("click", ".selected-dry-q1", function () {
    if ($(this).hasClass("selected")) {
        qOne.push(dryLink1);
        console.log("Added to array");
        console.log(qOne);
    } else {
        const index = qOne.indexOf(dryLink1);
        if (index > -1) {
            qOne.splice(index, 1);
        }
        console.log(qOne);
    }
});


$('.contain-quiz').on("click", ".selected-oily-q1", function () {
    if ($(this).hasClass("selected")) {
        qOne.push(oilyLink1);
        console.log("Added to array");
        console.log(qOne);
    } else {
        const index = qOne.indexOf(oilyLink1);
        if (index > -1) {
            qOne.splice(index, 1);
        }
        console.log(qOne);
    }
});


$('.contain-quiz').on("click", ".selected-dandruff-q1", function () {
    if ($(this).hasClass("selected")) {
        qOne.push(dandruffLink1);
        console.log("Added to array");
        console.log(qOne);
    } else {
        const index = qOne.indexOf(dandruffLink1);
        if (index > -1) {
            qOne.splice(index, 1);
        }
        console.log(qOne);
    }
});

$('.contain-quiz').on("click", ".selected-thinning-q1", function () {
    if ($(this).hasClass("selected")) {
        qOne.push(thinningLink1);
        console.log("Added to array");
        console.log(qOne);
    } else {
        const index = qOne.indexOf(thinningLink1);
        if (index > -1) {
            qOne.splice(index, 1);
        }
        console.log(qOne);
    }
});


$('.contain-quiz').on("click", ".selected-normal-q1", function () {
    if ($(this).hasClass("selected")) {
        qOne.push(normalLink1);
        console.log("Added to array");
        console.log(qOne);
    } else {
        const index = qOne.indexOf(normalLink1);
        if (index > -1) {
            qOne.splice(index, 1);
        }
        console.log(qOne);
    }
});


// Question2 Clicks 
$('.contain-quiz').on("click", ".selected-dry-q2", function () {
    if ($(this).hasClass("selected")) {
        qTwo.push(dryLink2);
        console.log("Added to array");
        console.log(qTwo);
    } else {
        const index = qTwo.indexOf(dryLink2);
        if (index > -1) {
            qTwo.splice(index, 1);
        }
        console.log(qTwo);
    }
});


$('.contain-quiz').on("click", ".selected-stressed-q2", function () {
    if ($(this).hasClass("selected")) {
        qTwo.push(stressedLink2);
        console.log("Added to array");
        console.log(qTwo);
    } else {
        const index = qTwo.indexOf(stressedLink2);
        if (index > -1) {
            qTwo.splice(index, 1);
        }
        console.log(qTwo);
    }
});


$('.contain-quiz').on("click", ".selected-damaged-q2", function () {
    if ($(this).hasClass("selected")) {
        qTwo.push(damagedLink2);
        console.log("Added to array");
        console.log(qTwo);
    } else {
        const index = qTwo.indexOf(damagedLink2);
        if (index > -1) {
            qTwo.splice(index, 1);
        }
        console.log(qTwo);
    }
});

$('.contain-quiz').on("click", ".selected-limp-q2", function () {
    if ($(this).hasClass("selected")) {
        qTwo.push(limpLink2);
        console.log("Added to array");
        console.log(qTwo);
    } else {
        const index = qTwo.indexOf(limpLink2);
        if (index > -1) {
            qTwo.splice(index, 1);
        }
        console.log(qTwo);
    }
});


$('.contain-quiz').on("click", ".selected-thinning-q2", function () {
    if ($(this).hasClass("selected")) {
        qTwo.push(thinningLink2);
        console.log("Added to array");
        console.log(qTwo);
    } else {
        const index = qTwo.indexOf(thinningLink2);
        if (index > -1) {
            qTwo.splice(index, 1);
        }
        console.log(qTwo);
    }
});


$('.contain-quiz').on("click", ".selected-lackingShine-q2", function () {
    if ($(this).hasClass("selected")) {
        qTwo.push(lackingshineLink2);
        console.log("Added to array");
        console.log(qTwo);
    } else {
        const index = qTwo.indexOf(lackingshineLink2);
        if (index > -1) {
            qTwo.splice(index, 1);
        }
        console.log(qTwo);
    }
});

$('.contain-quiz').on("click", ".selected-curly-q2", function () {
    if ($(this).hasClass("selected")) {
        qTwo.push(curlyLink2);
        console.log("Added to array");
        console.log(qTwo);
    } else {
        const index = qTwo.indexOf(curlyLink2);
        if (index > -1) {
            qTwo.splice(index, 1);
        }
        console.log(qTwo);
    }
});


// Question3 Clicks 


$('.contain-quiz').on("click", ".selected-hottools-q3", function () {
    if ($(this).hasClass("selected")) {
        qThree.push(hottoolsLink3);
        console.log("Added to array");
        console.log(qThree);
    } else {
        const index = qThree.indexOf(hottoolsLink3);
        if (index > -1) {
            qThree.splice(index, 1);
        }
        console.log(qThree);
    }
});



$('.contain-quiz').on("click", ".selected-increate-shine-q3", function () {
    if ($(this).hasClass("selected")) {
        qThree.push(increaseshineLink3);
        console.log("Added to array");
        console.log(qThree);
    } else {
        const index = qThree.indexOf(increaseshineLink3);
        if (index > -1) {
            qThree.splice(index, 1);
        }
        console.log(qThree);
    }
});


$('.contain-quiz').on("click", ".selected-deep-repair-q3", function () {
    if ($(this).hasClass("selected")) {
        qThree.push(deeprepairLink3);
        console.log("Added to array");
        console.log(qThree);
    } else {
        const index = qThree.indexOf(deeprepairLink3);
        if (index > -1) {
            qThree.splice(index, 1);
        }
        console.log(qThree);
    }
});



$('.contain-quiz').on("click", ".selected-volume-root-q3", function () {
    if ($(this).hasClass("selected")) {
        qThree.push(volumerootLink3);
        console.log("Added to array");
        console.log(qThree);
    } else {
        const index = qThree.indexOf(volumerootLink3);
        if (index > -1) {
            qThree.splice(index, 1);
        }
        console.log(qThree);
    }
});


$('.contain-quiz').on("click", ".selected-shredding-q3", function () {
    if ($(this).hasClass("selected")) {
        qThree.push(shreddingLink3);
        console.log("Added to array");
        console.log(qThree);
    } else {
        const index = qThree.indexOf(shreddingLink3);
        if (index > -1) {
            qThree.splice(index, 1);
        }
        console.log(qThree);
    }
});


$('.contain-quiz').on("click", ".selected-knotty-q3", function () {
    if ($(this).hasClass("selected")) {
        qThree.push(knottyLink3);
        console.log("Added to array");
        console.log(qThree);
    } else {
        const index = qThree.indexOf(knottyLink3);
        if (index > -1) {
            qThree.splice(index, 1);
        }
        console.log(qThree);
    }
});




$('.contain-quiz').on("click", ".selected-dry-shampoo-q3", function () {
    if ($(this).hasClass("selected")) {
        qThree.push(dryshampooLink3);
        console.log("Added to array");
        console.log(qThree);
    } else {
        const index = qThree.indexOf(dryshampooLink3);
        if (index > -1) {
            qThree.splice(index, 1);
        }
        console.log(qThree);
    }
});