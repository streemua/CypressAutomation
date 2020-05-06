
describe('Binance Market Tests', () => {
    it('Verify_Market_Search_Add_Favorites', () => {
        cy.visit('https://www.binance.com/en/markets')
        cy.get('input[placeholder="Search coin name"]').clear().type('ETH')
        cy.get('input[placeholder="Search coin name"]').clear()
        cy.xpath(".//a [@href='/en/trade/ETH_BTC']//* [name()='svg']").click()
        cy.xpath(".//a [@href='/en/trade/BNB_BTC']//* [name()='svg']").click()
        cy.xpath(".//div [text()='Favorites']").click()
    })
})