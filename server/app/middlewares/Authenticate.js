import { Role, User } from '../../validateInputs';

const Auth = {

  roleInput(req, res, next) {
    const { isValid, errors } = Role.input(req.body, 'create');
    if (!isValid) {
      return res.status(400).send(errors);
    }
    next();
  },

  roleUpdate(req, res, next) {
    const { isValid, errors } = Role.input(req.body, 'update');
    if (!isValid) {
      return res.status(400).send(errors);
    }
    next();
  },

  userInput(req, res, next) {
    const { isValid, errors } = User.input(req.body, 'create');
    if (!isValid) {
      return res.status(400).send(errors);
    }
    next();
  },

  userUpdate(req, res, next) {
    const { isValid, errors } = User.input(req.body, 'update');
    if (!isValid) {
      return res.status(400).send(errors);
    }
    next();
  },
};

export default Auth;
