const displayName = {
  id: 'display_name',
  name: 'displayName',
  label: 'Display Name',
  type: 'text',
  required: true,
};

const email = {
  id: 'email_sign_up',
  name: 'email',
  label: 'Email',
  type: 'email',
  required: true,
};

const password = {
  id: 'password_sign_up',
  name: 'password',
  label: 'Password',
  type: 'password',
  required: true,
};

const passwordConfirm = {
  id: 'password_confirm_sign_up',
  name: 'passwordConfirm',
  label: 'Confirm password',
  type: 'password',
  required: true,
};

export default {
  displayName,
  email,
  password,
  passwordConfirm,
};
