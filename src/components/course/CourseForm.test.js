import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

const setup = () => {
  let props = {
    course: {}, saving: false, errors: {},
    onSave: () => {},
    onChange: () => {}
  }
  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  }
}

describe('CourseForm via React Test Utils', () => {
  it('renders a form and a h1', () => {

  })
});
