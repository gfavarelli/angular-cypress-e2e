describe('My First Test', () => {
  it('Visitar página inicial e verificar mensagem Ola', () => {
    cy.visit('/')
    cy.contains('Olá, tudo bem?')
  })
})
