// Define variables 

var dataObject = {
    'event': 'Completed_consultation',
    'category': 'click',
    'label': 'GA_Completed'
  };
  if(typeof dataLayer != 'undefined'){
    dataLayer.push(dataObject);
    console.log(dataObject); // For debugging
  }

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

    // Scroll to top of page when it is clicked
    scroll(0,0);

    if (position == 2) {

    // Check if email is valid 
    let email = $('#mce-EMAIL').val();
   
    // Pass the email to the validator
    let check = validEmail(email);

    if (!check) {
        $('#email-message').text("Please enter a valid email address!")
        return;
        }
    }



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


        let linknormal = '<a href="https://bondhairhealth.ie/normal-hair-shop/"><div class="btn-style ml-auto">NORMAL HAIR PLAN</div></a>';
        let linkdry = '<a href="https://bondhairhealth.ie/dry-hair-shop/"><div class="btn-style ml-auto">DRY HAIR PLAN</div></a>';
        let linkoily = '<a href="https://bondhairhealth.ie/oily-hair-shop/"><div class="btn-style ml-auto">OILY HAIR PLAN</div></a>';
        let linkcombo = '<a href="https://bondhairhealth.ie/combination-hair-shop/"><div class="btn-style ml-auto">COMBINATION HAIR PLAN</div></a>';

        let normalDes = 'Based on your hair analysis, we suggest you treat your hair with our normal hair treatment plan. To purchase a treatment plan and find out more information, follow the link below!';

        if (essentialResults.length > 1) {
            document.getElementById('contain-essential-categories').innerHTML += "combination hair";
            document.getElementById('treatment-button').innerHTML = linkcombo;

        } else {

            if (essentialResults.includes("normal")) {
                document.getElementById('contain-essential-categories').innerHTML += "normal hair";
                document.getElementById('treatment-button').innerHTML = linknormal;
            }

            if (essentialResults.includes("dry")) {
                document.getElementById('contain-essential-categories').innerHTML += "dry hair";
                document.getElementById('treatment-button').innerHTML = linkdry;
            }

            if (essentialResults.includes("oily")) {
                document.getElementById('contain-essential-categories').innerHTML += "oily hair";
                document.getElementById('treatment-button').innerHTML = linkoily;
            }
            if (essentialResults.includes("combo")) {
                document.getElementById('contain-essential-categories').innerHTML += "combination hair";
                document.getElementById('treatment-button').innerHTML = linkcombo;
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


function validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
