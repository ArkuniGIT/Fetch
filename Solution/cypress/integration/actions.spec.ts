describe('Actions', () =>
{
    it('Pins and unpins a Retriever.', () =>
    {
        cy.get("#startButton").click();
        cy.get("#retriever", { timeout: 10000 }).click();
        cy.get("#dog_1", { timeout: 10000 }).click();
        cy.get("#pinForm__comment").type("Who is a good doggy?!");
        cy.get("#pinForm__submit").click();
        cy.get("#drawerToggle").click();
        cy.get("#pin_0 .deleteButton").click();
        cy.contains("You have no pinned pictures.")
    })
})