import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure  } from 'enzyme';
import Main from './main.component';
import Session  from '../session/session.component';
import Chat  from '../chat/chat.component';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';

configure({ adapter: new Adapter() });

describe('Main', () => {
    it('should render correctly', () => {
        const output = shallow(<Main />);
        
 
    });
});