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
           var visa = new CreditCard("4012 8888 8888 1881");
           if(window.console) {console.log(visa.isValid());}
           if(window.console) {console.log(visa.getType());}
           if(window.console) {console.log(visa.isVisa());}

           var ms = new CreditCard("5105 1051 0510 5100");
           if(window.console) {console.log(ms.isValid());}
           if(window.console) {console.log(ms.getType());}
           if(window.console) {console.log(ms.isMasterCard());}

           var am = new CreditCard("371449635398431");
           if(window.console) {console.log(am.isValid());}
           if(window.console) {console.log(am.getType());}
           if(window.console) {console.log(am.isAmericanExpress());}

           var am = new CreditCard("6011111111111117");
           if(window.console) {console.log(am.getType());}

           var card = new CreditCard("4111111111111112");
           if(card.isValid()) {
              if(window.console) { console.log('The card is valid!'); }
           }else{
              if(window.console) {console.log('the card is not valid!');}
           }
     
