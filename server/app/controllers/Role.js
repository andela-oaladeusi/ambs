import db from '../models';

const Role = {
  /**
   * Create a new role
   * Route: POST /api/v1/roles
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  create(req, res) {
    db.Role.create(req.body)
      .then(role => res.status(201).send({ role }));
  },
  /**
   * Retrive a role
   * Route: GET /api/v1/roles/:title
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  get(req, res) {
    db.Role.findOne({ where: { title: req.params.title } })
      .then((role) => {
        if (!role) {
          return res.status(404).send({ message: 'Role not found' });
        }
        return res.status(200).send({ role });
      });
  },
  /**
   * Retrieve all roles - Search or Get all roles
   * Route: GET /api/v1/roles
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  all(req, res) {
    db.Role.findAndCountAll()
      .then(roles => res.status(200).send(roles));
  },
  /**
   * Edit a new role
   * Route: PATCH /api/v1/roles/:title
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  edit(req, res) {
    db.Role.findOne({ where: { title: req.params.title } })
      .then((role) => {
        if (!role) {
          return res.status(404).send({ message: 'Role not found' });
        }
        role.update(req.body)
          .then(updatedRole => res.status(200).send(updatedRole));
      });
  },
  /**
   * Delete a new role
   * Route: DELETE /api/v1/roles/:title
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  delete(req, res) {
    db.Role.findOne({ where: { title: req.params.title } })
      .then((role) => {
        if (!role) {
          return res.status(404).send({ message: 'Role not found' });
        }
        role.destroy()
          .then(() => res.status(200).send({ message: 'Deleted' }));
      });
  },
  /**
   * Retrive all user's with a particular role
   * Route: GET /api/v1/roles/:title/users
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  fetchUserRole(req, res) {
    db.Role.findAndCountAll({
      where: { title: req.params.title },
      include: [db.User]
    })
    .then(roleUsers => res.status(200).send(roleUsers));
  }
};

export default Role;
