import React from 'react';
import { shallow, mount } from 'enzyme';
import Portal from './portal';

beforeEach(() => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
});

it('should require children', () => {
  expect(Portal.propTypes.children).toEqual(React.PropTypes.element.isRequired);
});

it('should render nothing', () => {
  const wrapper = shallow(
    <Portal>
      <h1>Hello World</h1>
    </Portal>
  );
  expect(wrapper.html()).toEqual(null);
});

it('should append children to document.body if portal is open', () => {
  const wrapper = mount(
    <Portal isOpen>
      <h1>Hello World</h1>
    </Portal>
  );
  expect(document.body.childElementCount).toEqual(1);
  expect(document.body.lastElementChild).toEqual(wrapper.instance().node);
  expect(document.body.lastElementChild.textContent).toEqual('Hello World');
});

it('should not append children to document.body if portal is closed', () => {
  const wrapper = mount(
    <Portal>
      <h1>Hello World</h1>
    </Portal>
  );
  expect(document.body.childElementCount).toEqual(0);
});

it('should append children to document.body if props.isOpen is changed from false to true', () => {
  const wrapper = mount(
    <Portal>
      <h1>Hello World</h1>
    </Portal>
  );
  expect(document.body.childElementCount).toEqual(0);

  wrapper.setProps({ isOpen: true });
  expect(document.body.childElementCount).toEqual(1);
  expect(document.body.lastElementChild).toEqual(wrapper.instance().node);
  expect(document.body.lastElementChild.textContent).toEqual('Hello World');
});

it('should remove children from document.body if props.isOpen is changed from true to false', () => {
  const wrapper = mount(
    <Portal isOpen>
      <h1>Hello World</h1>
    </Portal>
  );
  expect(document.body.childElementCount).toEqual(1);

  wrapper.setProps({ isOpen: false });
  expect(document.body.childElementCount).toEqual(0);
});

it('should only append child to document.body once', () => {
  const wrapper = mount(
    <Portal>
      <h1>Hello World</h1>
    </Portal>
  );
  wrapper.setProps({ isOpen: true });
  expect(document.body.childElementCount).toEqual(1);

  wrapper.setProps({ isOpen: true });
  expect(document.body.childElementCount).toEqual(1);
});

it('should not do anything if closing a portal with no childappended to document.body', () => {
  const wrapper = mount(
    <Portal isOpen>
      <h1>Hello World</h1>
    </Portal>
  );
  wrapper.setProps({ isOpen: false });
  expect(document.body.childElementCount).toEqual(0);

  wrapper.setProps({ isOpen: false });
  expect(document.body.childElementCount).toEqual(0);
});
