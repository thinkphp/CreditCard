/*
---
description: plugin credit card validation

authors:
  - Adrian Statescu (http://thinkphp.ro)

license:
  - MIT-style license

requires:
  core/1.3:   '*'

provides:
  - CreditCard
...
*/

var CreditCard=new Class({Implements:[Options,Events],options:{CARDS:{Visa:/^4[0-9]{12}(?:[0-9]{3})?$/,MasterCard:/^5[1-5][0-9]{14}$/,Discover:/^6(?:011|5[0-9]{2})[0-9]{12}$/,AmericanExpress:/^3[47][0-9]{13}$/,DinersClub:/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,JCB:/^(?:2131|1800|35\d{3})\d{11}$/,Maestro:/^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/},ut:"Unknown Type"},initialize:function(number){if(!number){return false}this.number=number.replace(/\s/g,"").trim();for(var card in this.options.CARDS){this._addHandler(card)}},isValid:function(){return this._verifyLuhn()},_verifyLuhn:function(){var number=this.number;var sum=0,alt=false,i=number.length-1,num;if(number.length<13||number.length>19){return false}while(i>=0){num=parseInt(number.charAt(i),10);if(isNaN(num)){return false}if(alt){num*=2;if(num>9){num=(num%10)+1}}alt=!alt;sum+=num;i--}return(sum%10==0)},getType:function(){if(this._verifyLuhn()){for(var card in this.options.CARDS){if(this["is"+card]()){return card}}return this.options.ut}else{return"The card is not valid!"}},_addHandler:function(card){return this["is"+card]=function(){return this.options.CARDS[card].test(this.number)}}});