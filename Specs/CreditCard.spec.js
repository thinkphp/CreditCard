describe('CreditCard', {
    'should recognize Visa': function() {
        var card = new CreditCard('4012 8888 8888 1881');

        value_of(card.isValid()).should_be_true();
        value_of(card.getType()).should_be('Visa');
        value_of(card.is('Visa')).should_be_true();
        value_of(card.is('AmericanExpress')).should_be_false();
    },

    'should recognize MasterCard': function() {
        var card = new CreditCard('5105 1051 0510 5100');

        value_of(card.isValid()).should_be_true();
        value_of(card.getType()).should_be('MasterCard');
        value_of(card.is('MasterCard')).should_be_true();
        value_of(card.is('Visa')).should_be_false();
    },

    'should recognize AmericanExpress': function() {
        var card = new CreditCard('371449635398431');

        value_of(card.isValid()).should_be_true();
        value_of(card.is('AmericanExpress')).should_be_true();
        value_of(card.is('Visa')).should_be_false();
        value_of(card.getType()).should_be('AmericanExpress');
    },

    'should return "Unknown type" for invalid card': function() {
        var card = new CreditCard('1111 3333 2222 0000');

        value_of(card.isValid()).should_be_false();
        value_of(card.getType()).should_be('Unknown type');
    }
});