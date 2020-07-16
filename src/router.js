import Vue from "vue";
import Router from "vue-router";
import Home from "./../src/pages/home";
import Index from "./../src/pages/index";
import Product from "./../src/pages/product";
import Detail from "./../src/pages/detail";
import Cart from "./../src/pages/cart";
import Order from "./../src/pages/order";
import OrderList from "./../src/pages/orderList";
import OrderConfirm from "./../src/pages/orderConfirm";
import OrderPay from "./../src/pages/orderPay";
import AliPay from "./../src/pages/aliPay";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/index",
      children: [
        {
          path: "index",
          name: "index",
          component: Index,
        },
        {
          path: "product/:id",
          name: "product",
          component: Product,
        },
        {
          path: "index",
          name: "detail/:id",
          component: Detail,
        },
      ],
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/order",
      name: "order",
      component: Order,
      children: [
        {
          path: "list",
          name: "order-list",
          component: OrderList,
        },
        {
          path: "confirm",
          name: "order-confirm",
          component: OrderConfirm,
        },
        {
          path: "pay",
          name: "order-pay",
          component: OrderPay,
        },
        {
          path: "alipay",
          name: "alipay",
          component: AliPay,
        },
      ],
    },
  ],
});
