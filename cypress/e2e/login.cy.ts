describe('Login', () => {
    it('Digitar apenas o EMAIL, apresentar mensagem de Login ou Senha Invalido', () => {
        cy.visit('/');
        cy.get('[formControlName="email"]').type('g@g.com');
        cy.get('button').click();
        cy.contains('Login ou Senha inválido')
    });

    it('Digitar EMAIL Invalido e Senha, apresentar mensagem de Login ou Senha Invalido', () => {
        cy.visit('/');
        cy.get('[formControlName="email"]').type('g');
        cy.get('[formControlName="senha"]').type('teste');
        cy.get('button').click();
        cy.contains('Login ou Senha inválido')
    });

    it('Digitar EMAIL e Senha, apresentar mensagem de sucesso', () => {
        cy.visit('/');
        cy.get('[formControlName="email"]').type('g@g.com');
        cy.get('[formControlName="senha"]').type('teste');
        cy.get('button').click();
        cy.on('window:alert', (messageAlert) => {
            expect(messageAlert).to.equal('Login Valido')
        })
    });
});