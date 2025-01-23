import type {} from 'cypress';

const modal = '[data-cy=modal]';
const modal_overlay = '[data-cy=modal_overlay]';
const bun_1 = '[data-cy=bun_1]';
const ingredient_2 = '[data-cy=ingredient_2]';
const ingredient_6 = '[data-cy=ingredient_6]';

describe('cypress modal test', function () {
	beforeEach(() => {
		cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
		cy.viewport(1400, 800);
		cy.visit('http://localhost:8080');
	});

	it('selection bun', function () {
		cy.wait(500);
		cy.get(bun_1).click();
		cy.wait(500);
		cy.contains('Детали ингредиента').should('exist');
		cy.contains('Калории, ккал').should('exist');
		cy.contains('420').should('exist');
		cy.get(modal).should('exist');
	});

	it('selection ingredient and close button', function () {
		cy.wait(500);
		cy.get(ingredient_2).click();
		cy.wait(500);
		cy.contains('Детали ингредиента').should('exist');
		cy.contains('Калории, ккал').should('exist');
		cy.contains('424').should('exist');
		cy.get(modal).should('exist');
		cy.get('[class^=modal-module__closeIcon]').click();
		cy.wait(500);
		cy.get(modal).should('not.exist');
	});

	it('selection ingredient and close overlay', function () {
		cy.wait(500);
		cy.get(ingredient_6).click();
		cy.wait(500);
		cy.contains('Детали ингредиента').should('exist');
		cy.contains('Жиры, г').should('exist');
		cy.contains('244').should('exist');
		cy.get(modal_overlay).should('exist');
		cy.get(modal_overlay).click(10, 10, { force: true });
		cy.wait(500);
		cy.get(modal).should('not.exist');
	});
});
