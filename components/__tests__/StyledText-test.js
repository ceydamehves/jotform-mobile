/* eslint-disable node/no-extraneous-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable node/no-unsupported-features/es-syntax */

import * as React from 'react';
import renderer from 'react-test-renderer';

import { MonoText } from '../StyledText.tsx';

it(`renders correctly`, () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
