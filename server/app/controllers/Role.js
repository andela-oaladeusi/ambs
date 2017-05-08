
const Role = {
  /**
   * Create a new role
   * Route: POST /api/v1/roles
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  create(req, res) {
    res.status(200).send({ message: 'success' });
  },
  /**
   * Retrive a role
   * Route: GET /api/v1/roles/:title
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  get(req, res) {
    res.status(200).send({ message: 'success' });
  },
  /**
   * Retrieve all roles - Search or Get all roles
   * Route: GET /api/v1/roles
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  all(req, res) {
    res.status(200).send({ message: 'success' });
  },
  /**
   * Edit a new role
   * Route: PATCH /api/v1/roles/:title
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  edit(req, res) {
    res.status(200).send({ message: 'success' });
  },
  /**
   * Delete a new role
   * Route: DELETE /api/v1/roles/:title
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  delete(req, res) {
    res.status(200).send({ message: 'success' });
  },
  /**
   * Retrive all user's with a particular role
   * Route: GET /api/v1/roles/:title/users
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  fetchUserRole(req, res) {
    res.status(200).send({ message: 'success' });
  }
};

export default Role;
