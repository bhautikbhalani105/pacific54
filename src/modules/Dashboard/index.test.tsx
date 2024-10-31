import { render } from '@testing-library/react';
import { describe, test } from 'vitest';

import Dashboard from '.';

describe('Dashboard', () => {
  test('Dashboard page should render correctly', () => {
    render(<Dashboard />);
  });
});
