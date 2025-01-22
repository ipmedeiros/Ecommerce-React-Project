export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Xbox Series S', price: 2500, image: '/imagens/console.jpg', stock: 100 },
        { id: 2, name: 'PS5', price: 5000, image: '/imagens/game.jpg', stock: 400 },
        { id: 3, name: 'PSP', price: 1500, image: '/imagens/accessory.jpg', stock: 200 },
      ]);
    }, 2000);
  });
};