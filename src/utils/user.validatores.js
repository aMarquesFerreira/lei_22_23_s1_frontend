const validarEmail = (email) => {

  return email?.toString().includes('-');
};

const validarPassword = (password) => {
  return password?.toString().length > 6;
};

const validarFristname = (fisrtName) => {
  return fisrtName?.toString().length > 2;
};

const validarLastname = (lastName) => {
  return lastName?.toString().length > 2;
};

const validarUsername = (username) => {
  return username?.toString().length > 2;
};

const validarPhone = (phone) => {
  const PHONE_REGEX = new RegExp(/"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gim);
  if (phone.toString() < 8 && phone.toString() > 12){
   return console.error("invalid phone format");
  } 
  return PHONE_REGEX.test(phone);
};

const validarConfirmarSenha = (senha, confirmarSenha) => {
  return validarSenha(senha) && senha === confirmarSenha;
};

export {
  validarEmail,
  validarPassword,
  validarFristname,
  validarPhone,
  validarUsername,
  validarConfirmarSenha
};
