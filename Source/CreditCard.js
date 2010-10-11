/*
---
description: plugin credit card validation

authors:
- Adrian Statescu (http://thinkphp.ro)
- Maksim Horbachevsky

license:
- MIT-style license

requires:
- core/1.2.1: '*'

provides:
- CreditCard
...
*/

var CreditCard = new Class({

    options: {
        cards: {
            Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            MasterCard: /^5[1-5][0-9]{14}$/,
            Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            AmericanExpress: /^3[47][0-9]{13}$/,
            DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            JCV: /^(?:2131|1800|35\d{3})\d{11}$/,
            Maestro: /^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/
        },
        unknown: "Unknown type"
    },

    /**
     * @constructor
     * @param number {String} - Credit card number
     */
    initialize: function(number) {
        this.number = number.replace(/\s/g, '');
    },

    /**
     * @method isValid
     * @return {Boolean} - true if credit card number is valid
     */
    isValid: function() {
        return this.validate();
    },

    /**
     * @method getType
     * @return {String} - credit card type based on its number
     */
    getType: function() {
        if (this.validate()) {
            for (var type in this.options.cards) {
                if (this.is(type)) {
                    return type;
                }
            }
        }

        return this.options.unknown;
    },

    /**
     * @method is
     * @param type {String}
     * @return {Boolean} - true if card's type equals to passed
     */
    is: function(type) {
        return this.options.cards[type].test(this.number);
    },

    /**
     * @private
     * @method validate
     * @return {Boolean} - true if credit card number is valid
     */
    validate: function() {
        var result = 0,
                odd = false,
                length = this.number.length;


        if (length < 13 || length > 19) {
            return false;
        }

        while(length--) {
            var digit = parseInt(this.number.charAt(length), 10);

            if (isNaN(digit)) {
                return false;
            }

            if (odd) {
                digit *= 2;
                digit > 9 && (digit = digit % 10 + 1)
            }

            odd = !odd;

            result += digit;
        }

        return result % 10 == 0;
    }.protect()
});
