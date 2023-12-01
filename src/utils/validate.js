export const validate = (email, password) => {
  const isEmailValidate = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValidate = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

  if (!isEmailValidate) return "Email id is not valid!";
  if (!isPasswordValidate) return "Password is not valid!";
  return null;
};
