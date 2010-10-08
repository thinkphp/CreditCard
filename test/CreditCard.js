var CreditCard = new Class({

              /* Implements */
              implements: [Options,Events],

              /* Set options */
              options: {
                  //credit cards you accept
                  CARDS: {
                    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,                          
                    MasterCard: /^5[1-5][0-9]{14}$/,
                    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
                    AmericanExpress: /^3[47][0-9]{13}$/,
                    DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
                    JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
                    Maestro: /^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/
                  },
                  ut: "Unknown Type"
              },

              /* 
               * Constructor of class CreditCard
               * @param (String) number credit card
               * @return none.
               * @public
               */
              initialize: function(number){
                  //if not number then return false
                  if(!number) {
                        return false;
                  }                  
                  //the given number is automatically stripped of whitespace/
                  this.number = number.replace(/\s/g,'').trim();

                  //for every card from CARDS create a boolean 
                  //method to tell us is exists that type or not
                  for(var card in this.options.CARDS) {
                          this._addHandler(card); 
                  }
              },
              /** 
                * Check whether if the card valid or not.
                *
                * @public 
                */
              isValid: function() {
                  return this._verifyLuhn();  
              },

               /** Does the Luhn validation   
                 *
                 * @private 
                 */
              _verifyLuhn: function() {
                    var number = this.number;
                    var sum = 0, alt = false, i = number.length - 1, num;
                    if(number.length < 13 || number.length > 19) {  
                              return false;  
                    }//end if

                    while(i>=0) {

                     //get the next digit 
                     num = parseInt(number.charAt(i),10);
 
                     //if it`s not a valid number then abort 
                     if(isNaN(num)) {
                       return false;  
                     } 

                     //if it`s an alternate number then double 
                     if(alt) {
                       num *= 2;
                       if(num > 9) {
                          num = (num%10) + 1; 
                       }//endif
                      }//end if

                     //flip the alternate bit
                     alt = !alt;

                     //add to the rest of the sum
                     sum += num;            

                    //go to the next digit
                    i--;

                   }//end while 

                return (sum%10 == 0);                        
              },
              /** 
                * Card identification . Works for all cards given in options.CARDS
                * 
                * @return (String) return "Visa","MasterCard" etc.
                * @public 
                */
              getType: function() {
                 //first, test whether the card is valid 
                 //if valid then
                 if(this._verifyLuhn()) {
                    //loop through the object this.options.CARDS
                    for(var card in this.options.CARDS) {
                            //if one of them then return the card
                            if(this['is'+card]()) {
                               return card; 
                            }
                    }
                    //return unknown card
                    return this.options.ut;
                 //otherwise the card isn't valid
                 } else {
                   return "The card is not valid!";
                 }
              },

              /*
               * Attachs methods to this object 
               * @param (String) card given in this.options.CARDS
               * @return (Function) if card == 'Visa' then create method isVisa() 
               *                    that return (true/false)(Boolean) etc.
               * @private
               */
              _addHandler: function(card) {
                        return this['is'+card] = function() {
                              return this.options.CARDS[card].test(this.number);
                        };
              }
});//end class CreditCard