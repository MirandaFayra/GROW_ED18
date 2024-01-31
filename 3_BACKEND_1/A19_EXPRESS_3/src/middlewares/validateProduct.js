function validateProduct(req, res, next) {
  const data = req.body;

  if (data.price <= 0 || data.price == undefined) {
    return res
      .status(400)
      .json({ success: false, msg: "O preço precisa ser maior que zero." });
  }

  if (data.name.length < 2) {
    return res
      .status(400)
      .json({ success: false, msg: "O nome é obrigatório." });
  }

  return next();
}

export default validateProduct;
