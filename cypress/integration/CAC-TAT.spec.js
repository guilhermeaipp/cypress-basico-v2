describe("Central de Atendimento ao Cliente TAT", function() {
    beforeEach(function() {
        cy.visit('src/index.html'); // Visita a página index.html
    }

    )

    it("Verifica título da aplicação", function() {
      
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT'); // Verifica se o título da página contém o texto esperado
    });
 
    it("Verifica mensagem Campos obrigatorios", function() {
      cy.get('button[type="submit"]').click()
    
      cy.get('span.error')
  .should('not.be.visible') // Verifica que o elemento está oculto inicialmente.
  .invoke('show')           // Simula a exibição do elemento, se necessário.
  .should('be.visible')     // Verifica que agora o elemento está visível.
  .and('contain.text', 'Valide os campos obrigatórios!'); // Valida o texto dentro do elemento.

      
      
    });

  it("preenche os campos obrigatórios e envia o formulário", function() {
    cy.get('#firstName').type('Guilherme').should('have.value', 'Guilherme')
    cy.get('#lastName').type("Aipp").should('have.value', 'Aipp')
    cy.get('#email').type('marques.guilherme@protonmail.com').should('have.value', 'marques.guilherme@protonmail.com')
    cy.get('#phone').type('11952439847').should('have.value', '11952439847')
    cy.get('#open-text-area').type('Teste').should('have.value', 'Teste')
    cy.get('button[type="submit"]').click()



});  
   

  });