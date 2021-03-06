const Product = require("../models/product");
const Cart = require("../models/cart");
const { clearCache } = require("ejs");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("shop/product-detail", {
      product: product,
      pageTitle: product.title,
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    const cartProducts = [];
    Product.fetchAll((products) => {
      if (cart) {
        for (product of products) {
          const cartProduct = cart.products.find(
            (prod) => prod.id === product.id
          );
          if (cartProduct) {
            cartProducts.push({
              productData: product,
              quantity: cartProduct.qty,
            });
          }
        }
      }
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      });
    });
  });
};

exports.addToCart = async (req, res, next) => {
  var prodId = req.body.productId;

  await Product.findById(prodId, (product) => {
    if (product !== undefined && product !== null) {
      Cart.addProduct(prodId, product.price);
      res.json({ isSuccess: true });
    } else {
      res.json({ isSuccess: false });
    }
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.deleteCartItem = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    if (product !== undefined && product !== null) {
      Cart.deleteProduct(prodId, product.price);
      res.json({ isSuccess: true });
    } else {
      res.json({ isSuccess: false });
    }
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
