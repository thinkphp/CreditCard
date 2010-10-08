Class: CreditCard (#CreditCard)
==============================

### Implements:

Options, Events


CreditCard Method: constructor(#CreditCard: constructor)
--------------------------------------------------------

###Syntax:

var creditcard = new CreditCard(number);

####Arguments:

1. number (String) input , the given string which represent the credit card number

###Returns:

A CreditCard instance.


CreditCard Method: isValid (#CreditCard: isValid)
----------------------------------------------------

Determines whether the input card number is valid or not.

### Syntax:
         var cc = new CreditCard(number);
         cc.isValid();

### Arguments:

none.

### Returns:

* (*Boolean*) true/false => if the card number is valid return true, otherwise return false;


CreditCard Method: getType (#CreditCard: getType)
----------------------------------------------------

Provides the type of the input card.

### Syntax:
         var cc = new CreditCard(number);
         cc.getType();

### Arguments:

none.

### Returns:

* (*String*) return 'Visa','MasterCard', 'Diner', etc.

