import type {} from 'cypress';

const bun_1 = '[data-cy=bun_1]';
const bun_8 = '[data-cy=bun_8]';
const ingredient_2 = '[data-cy=ingredient_2]';
const ingredient_7 = '[data-cy=ingredient_7]';
const bun_list_top = '[data-cy=bun_list_top]';
const bun_list_bottom = '[data-cy=bun_list_bottom]';
const ingredients_list = '[data-cy=ingredients_list]';

describe('cypress constructor test', function () {
	beforeEach(() => {
		cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
		cy.viewport(1400, 800);
		cy.visit('http://localhost:8080');
	});

	it('add bun in top', function () {
		cy.wait(500);
		cy.get(bun_1).trigger('dragstart');
		cy.get(bun_list_top).trigger('drop');
		cy.wait(1000);
		cy.get(bun_list_bottom).contains('Краторная булка').should('exist');
		cy.wait(500);
	});

	it('add bun in bottom', function () {
		cy.wait(500);
		cy.get(bun_8).trigger('dragstart');
		cy.get(bun_list_bottom).trigger('drop');
		cy.wait(500);
		cy.get(bun_list_top).contains('Флюоресцентная').should('exist');
		cy.wait(500);
	});

	it('add ingredients', function () {
		cy.wait(500);
		cy.get(ingredient_2).trigger('dragstart');
		cy.get(ingredients_list).trigger('drop');
		cy.wait(500);
		cy.get(ingredient_7).trigger('dragstart');
		cy.get(ingredients_list).trigger('drop');
		cy.wait(500);
		cy.get(ingredients_list).contains('Говяжий метеорит').should('exist');
		cy.get('[data-cy^=ingredient_item_]').should('have.length', 2);
		cy.wait(500);
	});

	it('add bun and ingredients, and change bun', function () {
		cy.wait(500);
		cy.get(bun_1).trigger('dragstart');
		cy.get(bun_list_top).trigger('drop');
		cy.wait(500);
		cy.get(ingredient_2).trigger('dragstart');
		cy.get(ingredients_list).trigger('drop');
		cy.wait(500);
		cy.get(bun_8).trigger('dragstart');
		cy.get(bun_list_bottom).trigger('drop');
		cy.wait(500);
		cy.get(bun_list_top).contains('Флюоресцентная').should('exist');
		cy.get(ingredients_list).contains('марсианской Магнолии').should('exist');
		cy.wait(500);
	});

	it('add ingredients and ingredients moving', function () {
		cy.wait(500);
		cy.get(ingredient_2).trigger('dragstart');
		cy.get(ingredients_list).trigger('drop');
		cy.wait(500);
		cy.get(ingredient_7).trigger('dragstart');
		cy.get(ingredients_list).trigger('drop');
		cy.wait(500);

		cy.get('[data-cy^=ingredient_item_]').first().as('firstItem');
		cy.get('[data-cy^=ingredient_item_]').last().as('lastItem');
		cy.wait(500);
		cy.get('@firstItem').trigger('dragstart').trigger('dragleave');
		cy.get('@lastItem')
			.trigger('dragenter')
			.trigger('dragover')
			.trigger('drop')
			.trigger('dragend');
		cy.wait(500);

		cy.get('[data-cy^=ingredient_item_]').should('have.length', 2);
		cy.get('[data-cy^=ingredient_item_]')
			.first()
			.contains('Говяжий метеорит')
			.should('exist');
		cy.wait(500);
	});
});
