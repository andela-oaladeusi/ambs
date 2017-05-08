import validator from 'validator';

const Role = {
  input(data) {
    const errors = {};
    if (!data.title || validator.isEmpty(data.title)) {
      errors.title = 'This field cannot be empty';
    }
    if (!data.description || validator.isEmpty(data.description)) {
      errors.description = 'This field cannot be empty';
    }
    const isValid = Object.keys(errors).length === 0;
    return { isValid, errors };
  },
};

export default Role;
