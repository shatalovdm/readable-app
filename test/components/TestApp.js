import { App } from '../../src/components/App';
import { renderComponent } from '../test_helper';
import React from 'react';
import { withRouter } from 'react-router';

describe('App', () => {

	it('has app container on home page', () => {
		const component = render(renderComponent(App, '/'));
		expect(component.find('.app')).to.exist;
	});

	it('displays app container on page with filtered categories', () => {
		const component = render(renderComponent(App, '/react'));
		expect(component.find('.app')).to.exist;
	});	
});