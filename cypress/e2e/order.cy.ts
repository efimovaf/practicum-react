import type {} from 'cypress';

const profile_link = '[data-cy=profile_link]';
const create_order_btn = '[data-cy=create_order_btn]';
const modal = '[data-cy=modal]';
const bun_8 = '[data-cy=bun_8]';
const ingredient_3 = '[data-cy=ingredient_3]';
const ingredient_14 = '[data-cy=ingredient_14]';
const ingredient_15 = '[data-cy=ingredient_15]';
const ingredient_9 = '[data-cy=ingredient_9]';
const bun_list_top = '[data-cy=bun_list_top]';
const ingredients_list = '[data-cy=ingredients_list]';

describe('cypress order test', function () {
	beforeEach(() => {
		cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
		cy.intercept('GET', '/api/auth/user', { fixture: 'user.json' });
		cy.intercept('POST', '/api/orders', {
			fixture: 'order.json',
			delay: 10000,
		});

		cy.viewport(1400, 800);
		cy.visit('http://localhost:8080');

		localStorage.setItem('accessToken', 'testAccessToken');
		localStorage.setItem('refreshToken', 'testRefreshToken');
	});

	it('check auth user', function () {
		cy.wait(500);
		cy.get(profile_link).contains('Test').should('exist');
		cy.wait(500);
	});

	it('create order, get number order and close modal', function () {
		// наполнение заказа
		cy.wait(500);
		cy.get(bun_8).trigger('dragstart');
		cy.get(bun_list_top).trigger('drop');
		cy.wait(500);
		cy.get(ingredient_3).trigger('dragstart');
		cy.get(ingredients_list).trigger('drop');
		cy.wait(500);
		cy.get(ingredient_14).trigger('dragstart');
		cy.get(ingredients_list).trigger('drop');
		cy.wait(500);
		cy.get(ingredient_15).trigger('dragstart');
		cy.get(ingredients_list).trigger('drop');
		cy.wait(500);
		cy.get(ingredient_9).trigger('dragstart');
		cy.get(ingredients_list).trigger('drop');
		cy.wait(500);

		cy.get(ingredients_list)
			.contains('Сыр с астероидной плесенью')
			.should('exist');
		cy.get('[data-cy^=ingredient_item_]').should('have.length', 4);
		cy.wait(500);

		// оформление заказа
		cy.wait(500);
		cy.get(create_order_btn).contains('Оформить заказ').should('exist').click();
		cy.wait(1000);
		cy.contains('Оформляем заказ').should('exist');
		cy.wait(9000);
		cy.wait(500);
		cy.get(modal).should('exist');
		cy.contains('66175').should('exist');
		cy.contains('Ваш заказ начали готовить').should('exist');
		cy.wait(500);
		cy.get('[class^=modal-module__closeIcon]').click();
		cy.wait(500);
		cy.get(modal).should('not.exist');
		cy.wait(500);
		cy.get('[data-cy^=ingredient_item_]').should('have.length', 0);
		cy.wait(500);
	});
});
