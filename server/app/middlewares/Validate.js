import { Role } from '../../validateInputs';

const ValidateInput = {
  roleInput(req, res, next) {
    const { isValid, errors } = Role.input(req.body);
    if (!isValid) {
      return res.status(400).send(errors);
    }
    next();
  }
};

export default ValidateInput;
