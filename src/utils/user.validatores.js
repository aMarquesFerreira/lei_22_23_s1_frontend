const validarEmail = (email) => {
  return email?.toString().includes('@') && email?.toString().includes('.');
};

const validarPassword = (password) => {
  return password?.toString().length > 8;
};

const validarFristname = (fisrtName) => {
  return fisrtName?.toString().length > 2;
};

const validarLastname = (lastName) => {
  return lastName?.toString().length > 2;
};


const validarPhone = (phone) => {
  const PHONE_REGEX = new RegExp(/"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gim);
  if (phone.toString() < 8 && phone.toString() > 12) {
    return console.error("invalid phone format");
  }
  return PHONE_REGEX.test(phone);
};

const validarConfirmarPassword = (password, confirmarPassword) => {
  return validarPassword(password) && password === confirmarPassword;
};

export {
  validarEmail,
  validarPassword,
  validarFristname,
  validarLastname,
  validarPhone,
  validarConfirmarPassword
};
