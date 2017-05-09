
const Role = {
  input(data, status) {
    const errors = {};
    const title = /\w+/g.test(data.title);
    const description = /\w+/g.test(data.description);
    if (status === 'create') {
      if (!data.title || !title) {
        errors.title = 'This field cannot be empty';
      }
      if (!data.description || !description) {
        errors.description = 'This field cannot be empty';
      }
    } else {
      if (data.title && !title) {
        errors.title = 'This field cannot be empty';
      }
      if (data.description && !description) {
        errors.description = 'This field cannot be empty';
      }
      if (!data.title && !data.description) {
        errors.error = 'Nothing to update';
      }
    }
    const isValid = Object.keys(errors).length === 0;
    return { isValid, errors };
  },
};

export default Role;
