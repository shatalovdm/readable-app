import chai, { expect } from 'chai';
import { sinon, spy } from 'sinon';
import { mount, render, shallow } from 'enzyme';
import jsdom from 'jsdom';
import jquery from 'jquery';
import React from 'react';
import thunk from 'redux-thunk';
import TestUtils from 'react-addons-test-utils';
import chaiJquery from 'chai-jquery';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../src/reducers';
import { MemoryRouter, Route } from 'react-router-dom';

global.expect = expect;
global.sinon = sinon;
global.spy = spy;

global.mount = mount;
global.render = render;
global.shallow = shallow;


global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

function renderComponent(ComponentClass, path, props = {}, state) {
	const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    return (
        <Provider store={createStoreWithMiddleware(reducers, state)}>
        	<MemoryRouter initialEntries={[path]}>
        		<div>
        			<Route component={() => <ComponentClass {...props} />} exact path='/' /> 
        			<Route component={() => <ComponentClass {...props} />} exact path='/:category' /> 
        		</div>
            </MemoryRouter>
        </Provider>
    );
}

export { renderComponent };