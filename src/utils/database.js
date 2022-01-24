const getFillable = (model, exclusions = []) => {
  return Object.keys(model.rawAttributes).filter((s) => !exclusions.includes(s));
};

const paginateOptions = (req) => {
  const page = req.query.page || 1;
  const perPage = req.query.perPage || 12;
  return {
    limit: perPage,
    offset: (page - 1) * perPage,
  };
};
module.exports = { getFillable, paginateOptions };
