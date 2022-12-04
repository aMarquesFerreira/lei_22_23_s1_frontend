import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';
import { Route } from '../../route';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

test('full app rendering/navigating', async () => {
  render(<Route />, { wrapper: BrowserRouter });

});