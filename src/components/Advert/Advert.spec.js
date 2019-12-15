import React from 'react';
import { shallow } from 'enzyme';
import Advert from './Advert'

describe('Advert', () => {

    it('should render Advert component', () => {
        const props = {
            key: 0,

            advert: {
                _id: "5db5cd0a0a16ec2c68e2d96d",
                description: "Soy el del apartamento. Con eso lo digo todo.",
                name: "BMW X6 M",
                photo: "/images/anuncios/x6.jpg",
                price: 40000,
                tags: [{
                    0: "lifestyle",
                    1: "motor",
                }],
                type: "sell"
            }

        }
        const wrapper = shallow(<Advert.WrappedComponent {...props} />);

        expect(wrapper).toMatchSnapshot();

    });

});
