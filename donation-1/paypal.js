paypal.Buttons({
createOrder: function(data, actions) {
//This function sets up the details of the transaction, including the amount and line item details.
  return actions.order.create({
     purchase_units:[{
      amount: {
        value:'00.10'
     }
     }]
   });
   }
}).render('#paypal-button-container');