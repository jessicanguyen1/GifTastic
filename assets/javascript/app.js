// Giphy API key
var API_KEY = 'qmLNsA8nFrXwkZ1du7Y6SIDwklV37AaD';

// Topics array
var topics = [
    'rhinos',
    'whales',
    'sharks'
];

// Loop through each array item and create an button element

for (var i = 0; i < topics.length; i++) {
    $('.giphy-buttons').append('<button>' + topics[i].search)
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

    var newGif = $('.new-gif').val();

    // When the giphyAPI function is called, let's make an AJAX request

    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search?q=' + 'dog' + '&api_key=qmLNsA8nFrXwkZ1du7Y6SIDwklV37AaD&limit=5',
        method: 'GET',
    }).then(function (response) {
        console.log(response.data[0].images.fixed_height.url)
    })
}

giphyAPI();