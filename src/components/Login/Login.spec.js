import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login'

describe('Login', () => {

    it('should set user in store (setUser Action)', () => {
        const props = {
            setUserInStore: jest.fn(),
            history: {
                push: jest.fn()
            },

            user: {
                name: '',
                surname: '',
                email: '',
                tag: '',
            },

        }

        const wrapper = shallow(<Login {...props} />);

        wrapper.find('FormEnhanced').props().handleSubmit(props.user);
        expect(props.setUserInStore).toHaveBeenCalledWith(props.user)

    });

});
