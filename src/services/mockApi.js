let products = [];
let saleOrders = [];
let nextProductId = 1;
let nextSaleOrderId = 1;

export const api = {
  login: (username, password) => {
    if (username === 'admin' && password === 'password') {
      return { token: 'fake-token', username };
    }
    throw new Error('Invalid username or password');
  },

  getProducts: () => {
    return [...products];
  },

  addProduct: (product) => {
    const newProduct = { id: nextProductId++, ...product };
    products.push(newProduct);
    return newProduct;
  },

  updateProduct: (id, updatedProduct) => {
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) throw new Error('Product not found');
    products[index] = { id, ...updatedProduct };
    return products[index];
  },

  deleteProduct: (id) => {
    products = products.filter((p) => p.id !== id);
  },

  getSaleOrders: () => {
    return [...saleOrders];
  },

  addSaleOrder: (saleOrder) => {
    const newSaleOrder = { id: nextSaleOrderId++, ...saleOrder };
    saleOrders.push(newSaleOrder);
    return newSaleOrder;
  },

  updateSaleOrder: (id, updatedSaleOrder) => {
    const index = saleOrders.findIndex((o) => o.id === id);
    if (index === -1) throw new Error('Sale Order not found');
    saleOrders[index] = { id, ...updatedSaleOrder };
    return saleOrders[index];
  },

  deleteSaleOrder: (id) => {
    saleOrders = saleOrders.filter((o) => o.id !== id);
  },
};
