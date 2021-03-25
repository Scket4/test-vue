import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      products: [
        {
          title: 'Вытяжное устройство G2H',
          description:
            '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          article: 'G2H1065',
          price: 43123,
          photo: '../../../assets/G2H.png',
          quantity: 1,
        },
        {
          title: 'Вытяжное устройство BXC',
          description:
            '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          article: 'G2H1066',
          price: 21456,
          photo: '../../../assets/BXC.png',
          quantity: 2,
        },
        {
          title: 'Вытяжное устройство GHN',
          description:
            '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          article: 'G2H1067',
          price: 9743,
          photo: '../../../assets/GNH.png',
          quantity: 1,
        },
      ],
      totalPrice: 0,
      helpInstallation: false,
    };
  },
  mutations: {
    changeTotalPrice(state) {
      let totalPrice = 0;
      state.products.forEach((product) => {
        totalPrice += product.price * product.quantity;
      });
      totalPrice > 0 ? (state.totalPrice = totalPrice) : (state.totalPrice = 0);
    },
    changeSelectedProducts(state, product) {
      if (!product) {
        state.products = [];
        state.helpInstallation = false;
      }
    },
    addQuantityProduct(state, productArticle) {
      state.products.forEach((product) => {
        if (product.article === productArticle) {
          product.quantity++;
        }
      });
    },
    subQuantityProduct(state, productArticle) {
      state.products.forEach((product) => {
        if (product.article === productArticle) {
          product.quantity = product.quantity > 0 ? product.quantity - 1 : 0;
        }
      });
    },
    changeInstallation(state, isHelp) {
      state.helpInstallation = isHelp;
      isHelp ? (state.totalPrice += 1000) : (state.totalPrice -= 1000);
    },
  },
  actions: {},
  modules: {},
});
