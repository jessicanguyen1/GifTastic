// Giphy API key
var API_KEY = 'qmLNsA8nFrXwkZ1du7Y6SIDwklV37AaD';

// Topics array
var topics = [
    {
        search: 'Rhinos',
        url: 'rhinos.com'
    },
    {
        search: 'Whales',
        url: 'whales.com'
    },
    {
        search: 'Sharks',
        url: 'sharks.com'
    }
];

// Loop through each array item and create an image element

for (var i = 0; i < topics.length; i++) {
    $('.giphy-buttons').append('<button>' + topics[i].search)

}