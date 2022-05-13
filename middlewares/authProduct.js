function data_valida(date) { 
  const result = /(\d{2})[-.\/](\d{2})[-.\/](\d{4})/.exec(date);
  return result;
} 


const authProduct = (request, response, next) => {
  const { productName, infos } = request.body;

  if (!productName) {
    return response.status(400).json({ "message": "O campo productName é obrigatório" });
  }
  if (productName.length < 4) {
    return response.status(400).json({ "message": "O campo productName deve ter pelo menos 4 caracteres" });
  }
  if (!infos.saleDate) {
    return response.status(400).json({ "message": "O campo infos é obrigatório" });
  }
  if (!data_valida(infos.saleDate)) {
    return response.status(400).json({ "message": "O campo saleDate não é uma data válida" });
  }
  if(!infos.warrantyPeriod) {
    return response.status(400).json({ "message": "O campo warrantyPeriod é obrigatório" });
  }
  if (infos.saleDate.warrantyPeriod >= 1 && infos.saleDate.warrantyPeriod <= 3) {
    return response.status(400).json({ "message": "O campo warrantyPeriod precisa estar entre 1 e 3" });
  }

    next();
}

module.exports = authProduct;