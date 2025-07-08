
describe('Verifying Login flow', () => {
    it('Users should be able to visit the OrangeHRM Page', () => {
        cy.get('[alt=orangehrm-logo]').should('be.visible')

    })

    it('Users should be able to type in details and click the button', () => {
        cy.get("[name='username']").should('be.exist').type('Admin')
        cy.get("[name='password']").should('be.exist').type('admin123')
        cy.get("[type='submit']").should('be.exist').click()
        .log("Login successful")
    })

    it('Login using custom command action', () => {
        cy.typeInlogindetails()
    })
    it('Login using custom command action for each step', () => {
        cy.typeInUsername()
        cy.typeInPassword()
        cy.clickAnyButtonWithText('Login')
    })
});
            