import {createRouter, createWebHistory} from 'vue-router'
import NProgress from "nprogress"
import Index from '@/views/pages/Index.Vue'
import Shop from '@/views/pages/Shop.Vue'
import SingleProduct from '@/views/pages/SingleProduct.Vue'
import Checkout from '@/views/pages/Checkout.Vue'


const routes =[	
    { 
        path: '/',
        name: 'home.page',
        component: Index,
        meta: { title: "Rodela | Home" },
    },
    { 
      path: '/shop',
      name: 'shop.page',
      component: Shop,
      meta: { title: "Rodela | Shop" },
    },
    { 
      path: '/single-product',
      name: 'product.details',
      component: SingleProduct,
      meta: { title: "Rodela | Single Product" },
    },
    { 
      path: '/checkout',
      name: 'checkout.page',
      component: Checkout,
      meta: { title: "Rodela | Checkout" },
    },
  ];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
const DEFAULT_TITLE=404; 

  router.beforeEach((to, from, next) => {
    document.title=to.meta.title || DEFAULT_TITLE;
    NProgress.start();
    next();
  })

  router.afterEach(() => {
    NProgress.done();
  })


export default router;


