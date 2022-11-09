describe('payments test', function () {
    it('should return undefined when negative', function () {
        expect(createCurPayment(-2)).toBeUndefined();
    })
})
/*it('should create a new element with calculated sum', function () {
    let paymentTotal = {
        billAmt: 50,
        tipAmt: 25,
        tipPercent: 10,
    }
        expect(createCurPayment()).toEqual(paymentTotal);
});*/