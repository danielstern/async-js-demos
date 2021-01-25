const createMockAPI = function(value){

    return {

        makeRequest(args){

            return new Promise((resolve) => {

                setTimeout(
                    function(){

                        resolve(
                            value
                        );

                    }, 500
                )
                

            })

        }
    }
}

window.paymentAPI = createMockAPI({
    success: true,
    transactionID: 1234
});

window.supplierAPI = createMockAPI({
    success: true,
    orderID: 5678
});