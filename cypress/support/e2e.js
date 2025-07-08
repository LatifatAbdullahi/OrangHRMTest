
// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-mochawesome-reporter/register';
import './customcommands/customcommand';
        beforeEach (()=>{
    cy.on('uncaught:exception', ()=>{
        return false
        })
        cy.visit('/');
})
   