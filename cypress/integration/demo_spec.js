describe('Binance Market Tests', () => {
    it('Verify_Market_Search_Add_Favorites', () => {
        cy.visit('https://esms.key2act.work/signin')
        cy.xpath(".//span [text() = 'Sign Up']").click()
        cy.get("input[id = 'firstName']").type('John')
        cy.get("input[id = 'lastName']").type('Wick')
        cy.get("input[id = 'email']").type('streembodyua@gmail.com')
        cy.get("input[id = 'phone']").type('123456')
        cy.get("input[id = 'password']").type('1q2w!Q@W')
        cy.get("input[id = 'confirmPassword']").type('1q2w!Q@W')
    })
})