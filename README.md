CreditCard
==========

This plugin provides support for validation input number credit card.

How to use
----------


First you must to include the JS files in the head of your HTML document:

    #HTML
    <script type="text/javascript" src="mootools.js"></script>
    <script type="text/javascript" src="creditcard.js"></script>


In your JavaScript code:

    #JS
    var card = new CreditCard("4012 8888 8888 1881");

    card.isValid()  // => true
    card.getType()  // => 'Visa'
    card.is('Visa') // => true


Supported card types
----------

* Visa
* MasterCard
* Discover
* AmericanExpress
* DinersClub
* JCV
* Maestro
