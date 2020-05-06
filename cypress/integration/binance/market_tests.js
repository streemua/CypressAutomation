
describe('Binance Market Tests', () => {
    it('Verify_Market_Search_Add_Functionality', () => {
        cy.visit('https://www.binance.com/en/markets')
        cy.title().should('eq','Bitcoin Exchange | Cryptocurrency Exchange | Binance')
    })
})