import { Title } from '../Title';
import { render } from '@testing-library/react';

test('renders a message', () => {
  const { getByText } = render(<Title type="h1">Hello Worldd</Title>);
  expect(getByText('Hello World')).toBeInTheDocument();
});
