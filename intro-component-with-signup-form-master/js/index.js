function validation() {
  let name = document.form.name.value;
  let lastname = document.form.lastname.value;
  let password = document.form.password.value;

  if (name == null || name == "") {
    alert("Name Cant't Be Blank");
    return false;
  } else if (lastname == null || lastname == "") {
    alert("Last Name Cant't Be Blank");
    return false;
  } else if (password.length < 6) {
    alert("Password Msut be grater then Six Words");
    return false;
  }
}
