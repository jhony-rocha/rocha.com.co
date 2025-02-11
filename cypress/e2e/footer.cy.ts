describe('Footer E2E Test', () => {
  it('Debe mostrar el footer con el año actual y el nombre de desarrollo', () => {
    cy.visit('http://localhost:3000'); // Cambia la URL si es diferente

    const currentYear = new Date().getFullYear();
    const expectedText = `© ${currentYear} Jhony Rocha. All rights reserved.`; // Ajusta según tu código

    // Verifica que el footer contiene el texto esperado
    cy.get('footer').should('contain.text', expectedText);
  });
});
