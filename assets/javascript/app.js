// Giphy API key
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newGif + "&api_key=qmLNsA8nFrXwkZ1du7Y6SIDwklV37AaD&limit=5";

// Topics array
var topics = [
    'rhinos',
    'whales',
    'sharks',
    'dogs',
    'elephants'
];

// Loop through each array item and create an button element

for (var i = 0; i < topics.length; i++) {
    $('.giphy-buttons').append('<button>' + topics[i]);
}

// Attach an on click handler to the different buttons

var addButton = $('.add-button');

// When the add button is clicked we want to grab the value of the new-gif input
var newGif = $('.new-gif').val();

// Attach click handler for add button

addButton.on('click', function () {
    console.log('add button clicked!');

    // Add the new gif search and append it to a button
    $('.giphy-buttons').append('<button>' + newGif);

})

function giphyAPI() {

    // When the giphyAPI function is called, let's make an AJAX request

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Store an array of results in a variable
        var results = response.data

        // Loop over every result

        for (var i = 0; i < results.length; i++) {

            // Conditional to retrieve only appropriate rated gifs
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

                // Create a div for the gif
                var gifDiv = $('.giphy-results');

                // Store the result rating
                var rating = results[i].rating;

                // Create a p tag to hold the result's rating
                var p = $('<p>').text("Rating: " + rating);

                // Create an image tag for the gifs
                var animalGif = $('<img>');

                // Give tag an attribute of a property of the result
                animalGif.attr('src', results[i].images.fixed_height.url);

                // Append the p and animalGif to the gifDiv
                gifDiv.append(p);
                gifDiv.append(animalGif);

                $('.giphy-results').prepend(gifDiv);



            }

        }



        console.log(results[i].images.fixed_height.url)
    })
}

giphyAPI();