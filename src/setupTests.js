// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import LoginPage from './components/LoginPage';
import {render,fireEvent} from '@testing-library/react';

describe('LoginForm', () => {
    it('submits the form with correct username and password', () => {
      const { getByLabelText, getByText } = render(<LoginPage />);
  
      const usernameInput = getByLabelText('Username');
      const passwordInput = getByLabelText('Password');
      const submitButton = getByText('Submit');
  
      fireEvent.change(usernameInput, { target: { value: 'testuser' } });
      fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
      fireEvent.click(submitButton);
  
      expect(usernameInput.value).toEqual('testuser');
      expect(passwordInput.value).toEqual('testpassword');
    });
  });