import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';

import Signup from '../../src/js/components/Signup';
import Input from '../../src/js/components/Input';

const user = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}
configure ({ adapter: new Adapter() });

describe('<Signup />', () => {
    it('Should render four <Input /> elements', () => {
        const wrapper = shallow(<Signup user = {user}/> );
        expect(wrapper.find(Input)).toHaveLength(4);
    });
})