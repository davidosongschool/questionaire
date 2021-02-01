// Define variables 
let position;

// Stores score for essential 
let essential = {
    normal: 0,
    dry: 0,
    oily: 0,
    combo: 0,
}

let scalp = 0;
let numSelected = 0;

position = 1; //welcome screen

$(".contain-quiz").on("click", ".select-options", function () {
    $(this).toggleClass("bg-grey");
    $(this).toggleClass("selected-option");


    // Add to the score if selected 
    if ($(this).hasClass("selected-option")) {

        if ($(this).hasClass("addoily-selected")) {
            essential['oily'] = essential['oily'] + 1;
            numSelected++;
        } else if ($(this).hasClass("adddry-selected")) {
            essential['dry'] = essential['dry'] + 1;
            numSelected++;
        } else if ($(this).hasClass("addnormal-selected")) {
            essential['normal'] = essential['normal'] + 1;
            numSelected++;
        } else if ($(this).hasClass("addcombo-selected")) {
            essential['combo'] = essential['combo'] + 1;
            numSelected++;
        }
        else if ($(this).hasClass("addscalp")) {
            scalp++;
            numSelected++;
        }
        else if ($(this).hasClass("addnothing")) {
            numSelected++;
            }
    }
    // Take away from the score if deselected 
    else {

        if ($(this).hasClass("addoily-selected")) {
            essential['oily'] = essential['oily'] - 1;
            numSelected--;
        } else if ($(this).hasClass("adddry-selected")) {
            essential['dry'] = essential['dry'] - 1;
            numSelected--;
        } else if ($(this).hasClass("addnormal-selected")) {
            essential['normal'] = essential['normal'] - 1;
            numSelected--;
        } else if ($(this).hasClass("addcombo-selected")) {
            essential['combo'] = essential['combo'] - 1;
            numSelected--;
        }
        else if ($(this).hasClass("addscalp")) {
            scalp--;
            numSelected--;
        } 
        else if ($(this).hasClass("addnothing")) {
            numSelected--;
        }

    }


    // Reveal continue button
    if (numSelected > 0) {
        $(".continue-multi-select").removeClass("d-none");
    } else {
        $(".continue-multi-select").addClass("d-none");
    }



});


$(".continue-btn").click(function () {
    numSelected = 0;
    $(".continue-multi-select").addClass("d-none");
    console.log("clicked")
    $(".position" + position).fadeIn(1000).addClass("d-none");
    position++;

    // Results 

    if (position == 9) {

        if (scalp > 0) {
            $(".contain-kickstart-results").removeClass("d-none");
        }

        console.log("Essential Scores: " + JSON.stringify(essential));

        // Calculate Results 
        const getMax = object => {
            return Object.keys(object).filter(x => {
                return object[x] == Math.max.apply(null,
                    Object.values(object));
            });
        };

        // Store array of highest values in resultArr  
        let essentialResults = getMax(essential);

        console.log(essentialResults);


        let linknormal = "/normal-hair-shop";
        let linkdry = "/dry-hair-shop";
        let linkoily = "/oily-hair-shop";
        let linkcombo = "/combination-hair-shop";
        let linkblonde = "/blonde-products"
        let linkscalp = "/scalp-care-products"


        if (essentialResults.length > 1) {
            document.getElementById('contain-essential-categories').innerHTML += "COMBO RESULT <br/>";

        } else {

            if (essentialResults.includes("normal")) {
                document.getElementById('contain-essential-categories').innerHTML += "NORMAL RESULT <br/>";
            }

            if (essentialResults.includes("dry")) {
                document.getElementById('contain-essential-categories').innerHTML += "DRY RESULT <br/>";
            }

            if (essentialResults.includes("oily")) {
                document.getElementById('contain-essential-categories').innerHTML += "OILY RESULT <br/>";
            }
            if (essentialResults.includes("combo")) {
                document.getElementById('contain-essential-categories').innerHTML += "COMBO RESULT <br/>";
            }
        }

    }

// Go to next position
$(".position" + position).fadeIn(1000).removeClass("d-none");

});



// Double Weighted (Q3, Q4)
$(".addnormal2").click(function () {
    essential['normal'] = essential['normal'] + 2;
});

$(".addcombo2").click(function () {
    essential['combo'] = essential['combo'] + 2;
});

$(".adddry2").click(function () {
    essential['dry'] = essential['dry'] + 2;
});

$(".addoily2").click(function () {
    essential['oily'] = essential['oily'] + 2;
});



// NOrmal Weighted (Q5, Q6)
$(".addnormal").click(function () {
    essential['normal'] = essential['normal'] + 1;
});

$(".addcombo").click(function () {
    essential['combo'] = essential['combo'] + 1;
});

$(".adddry").click(function () {
    essential['dry'] = essential['dry'] + 1;
});

$(".addoily").click(function () {
    essential['oily'] = essential['oily'] + 1;
});


// Scalp Kickstart
$(".addscalp").click(function () {
    scalp = scalp + 1;
});



$(".restart-btn").click(function () {
    $(".position" + position).addClass("d-none");

    // clear results div 
    document.getElementById('contain-essential-categories').innerHTML = "";

    position = 1;

    essential = {
        normal: 0,
        dry: 0,
        oily: 0,
        combo: 0,
    };

    numSelected = 0;
    scalp = 0;

    $(".position" + position).removeClass("d-none");
    $(".continue-multi-select").addClass("d-none");
    $(".select-options").removeClass("bg-grey");
    $(".select-options").removeClass("selected-option");
    $(".contain-kickstart-results").addClass("d-none");
})