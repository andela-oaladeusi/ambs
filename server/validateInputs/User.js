
const User = {
  input(data, status) {
    const errors = {};
    const userName = /\w+/g.test(data.userName);
    const fullName = /\w+/g.test(data.fullName);
    const email = /\S+@\S+\.\S+/.test(data.email);
    const password = data.password ? /\w+/g.test(data.password)
                        && data.password.trim().length > 5 : false;
    const about = /\w+/g.test(data.about);

    if (status === 'create') {
      if (!data.userName || !userName) {
        errors.userName = 'This field cannot be empty';
      }
      if (!data.fullName || !fullName) {
        errors.fullName = 'This field cannot be empty';
      }
      if (!data.email || !email) {
        errors.email = 'This field cannot be empty';
      }
      if (!data.password || !password) {
        errors.password = 'Minimum of 6 characters is required';
      }
    } else {
      if (data.userName && !userName) {
        errors.userName = 'This field cannot be empty';
      }
      if (data.fullName && !fullName) {
        errors.fullName = 'This field cannot be empty';
      }
      if (data.email && !email) {
        errors.email = 'This field cannot be empty';
      }
      if (data.password && !password) {
        errors.password = 'Minimum of 6 characters is required';
      }
      if (data.about && !about) {
        errors.about = 'This field cannot be empty';
      }
      if (!data.about && !data.userName
        && !data.fullName && !data.email && !data.password) {
        errors.error = 'Nothing to update';
      }
    }
    const isValid = Object.keys(errors).length === 0;
    return { isValid, errors };
  },
};

export default User;
