import argon2 from 'argon2';

async function createData() {
  const users = [
    {
      name: 'Alexis',
      email: 'malexismreyes@gmail.com',
      password: await argon2.hash('123456789'),
      isAdmin: true,
    },
    {
      name: 'customer',
      email: 'mikemanzano27@hotmail.com',
      password: await argon2.hash('123456789'),
      isAdmin: false,
    },
  ];

  const products = [
    {
      //_id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '2',
      name: 'Adidas Fit shirt',
      slug: 'nike-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '3',
      name: 'Nike Slim pants',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'Adidas Fit Pant',
      slug: 'nike-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '5',
      name: 'Puma XL Shirt Woman',
      slug: 'puma-xl-shirt-w',
      category: 'Shirt',
      image: '/images/p5.jpg',
      price: 45,
      countInStock: 10,
      brand: 'Puma',
      rating: 4.0,
      numReviews: 6,
      description: 'high quality woman cotton shirt',
    },
  ];

  return { users, products };
}

export default createData;
