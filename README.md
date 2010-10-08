CreditCard
==========

This plugin provides support for validation input number credit card.

![Screenshot](http://thinkphp.ro/apps/js-hacks/creditcard/card.jpg)

How to use
----------


First you must to include the JS files in the head of your HTML document.

            #HTML
            <script type="text/javascript" src="mootools.js"></script>
            <script type="text/javascript" src="creditcard.js"></script>

In your JavaScript code.

        #JS
        if(window.console) {
            var visa = new CreditCard("4012 8888 8888 1881");
                console.log(visa.isValid());
                console.log(visa.getType());
                console.log(visa.isVisa());
            var ms = new CreditCard("5105 1051 0510 5100");
                console.log(ms.isValid());
                console.log(ms.getType());
                console.log(ms.isMasterCard());
            var am = new CreditCard("371449635398431");
                console.log(am.isValid());
                console.log(am.getType());
                console.log(am.isAmericanExpress());
            var am = new CreditCard("6011111111111117");
                console.log(am.getType());
            var card = new CreditCard("4111111111111112");
            if(card.isValid()) {
               console.log('The card is valid!'); 
            }else{
               console.log('the card is not valid!');
            }
         }//end if window.console     
