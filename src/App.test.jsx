import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Main from './components/main/main.component';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

describe('App', () => {
    it('should render correctly', () => {
        const output = shallow( <App /> );
        
         expect(output.contains(
               <a className="navbar-brand" href="#">Weather Chat Bot</a>
        )).to.equal(true);

        expect(output.find(Main)).to.have.length(1);

    });
});