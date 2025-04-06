import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Star, Music, Tag } from 'lucide-react';
import '../styles/ProductDetails.css'
const products = {
    1: {
      name: 'Kendrick Lamar Hoodie (Grand National Tour)',
      price: 59.99.toFixed(2),
      description: 'Officially licensed Kendrick Lamar hoodie featuring exclusive Grand National Tour artwork. Made for ultimate comfort and style.',
      image: 'https://kendricklamarstore.com/wp-content/uploads/2025/02/Kendrick-SZA-Merch-Album-Hoodie-768x768.jpg',
      category: 'Streetwear',
      features: ['80% Cotton, 20% Polyester', 'Premium screen-printed graphics', 'Kangaroo pocket & adjustable drawstrings', 'Unisex fit'],
      rating: 4.5,
      reviews: 128
    },
    2: {
      name: 'Eminem Arrest Hooded Sweatshirt',
      price: 64.99.toFixed(2),
      description: 'Iconic Eminem "Arrest" hoodie inspired by his legendary album artwork. Heavyweight fabric with bold graphics.',
      image: 'https://rockabilia.com/cdn/shop/files/418512F_1024x1024.jpg?v=1701533113',
      category: 'Streetwear',
      features: ['Thick 100% cotton fleece', 'Double-needle stitching for durability', 'Front graphic print & embroidered details', 'Machine washable'],
      rating: 4.8,
      reviews: 96
    },
    3: {
      name: 'Rap Music Streetwear Hoodie',
      price: 73.50.toFixed(2),
      description: 'Trendy oversized hoodie perfect for hip-hop fans. Features a bold rap-inspired design with a relaxed fit.',
      image: 'https://i.etsystatic.com/20701597/r/il/160c7d/6762464595/il_1588xN.6762464595_e4if.jpg',
      category: 'Streetwear',
      features: ['Oversized fit for streetwear style', 'High-quality digital print', 'Ribbed cuffs & hem', 'Unisex sizing'],
      rating: 4.3,
      reviews: 89
    },
    4: {
      name: 'Kanye West T-shirt (Red Edition Tour 2025)',
      price: 45.99.toFixed(2),
      description: 'Limited-edition Kanye West tour tee with vibrant red colorway and exclusive 2025 tour graphics.',
      image: 'https://kayne-west.b-cdn.net/wp-content/uploads/2021/09/ssrcoclassic_teemensfafafaca443f4786front_altsquare_product600x600-7.jpg',
      category: 'T-Shirts',
      features: ['100% soft cotton', 'Tour-exclusive design', 'Regular fit', 'Screen-printed artwork'],
      rating: 4,
      reviews: 13
    },
    5: {
      name: 'Kanye West T-shirt (Black Edition)',
      price: 34.99.toFixed(2),
      description: 'Classic black Kanye West tee with minimalist branding. Perfect for casual wear or layering.',
      image: 'https://i.ibb.co/kWKz9bx/9.jpg',
      category: 'T-Shirts',
      features: ['Breathable cotton fabric', 'Subtle logo print', 'Slim fit', 'Machine washable'],
      rating: 5,
      reviews: 28
    },
    6: {
      name: 'Kendrick Lamar T-Shirt (Grand National Tour)',
      price: 29.99.toFixed(2),
      description: 'Official Kendrick Lamar concert tee celebrating the Grand National Tour. Lightweight and stylish.',
      image: 'https://kendricklamarstore.com/wp-content/uploads/2025/01/GNX-Kendrick-Lamar-Tour-2025-T-Shirt-768x768.jpg',
      category: 'T-Shirts',
      features: ['100% preshrunk cotton', 'Tour dates on back', 'Vintage wash effect', 'Unisex sizing'],
      rating: 5,
      reviews: 509
    },
    7: {
      name: '2PAC LA Skyline Kids Tee',
      price: 29.99.toFixed(2),
      description: 'Adorable kids’ tee featuring 2PAC’s iconic LA skyline artwork. Soft and safe for children.',
      image: 'https://rockabilia.com/cdn/shop/products/422192F_1024x1024.jpg?v=1654705707',
      category: 'T-Shirts',
      features: ['100% child-safe cotton', 'Vibrant print that lasts', 'Comfortable fit for active kids', 'Easy to wash'],
      rating: 4.6,
      reviews: 122
    },
    8: {
      name: 'Eminem Detroit Portrait T-shirt',
      price: 29.99.toFixed(2),
      description: 'Tribute to Eminem’s Detroit roots with a striking portrait graphic. A must-have for Slim Shady fans.',
      image: 'https://rockabilia.com/cdn/shop/products/140182F_1024x1024.jpg?v=1672981387',
      category: 'T-Shirts',
      features: ['Classic crewneck design', 'High-definition print', 'Breathable fabric', 'True to size'],
      rating: 1,
      reviews: 11
    },
    9: {    
      name: 'Dollar Sign Gold Ring',
      price: 929.99.toFixed(2),
      description: 'Bling-inspired 18K gold-plated dollar sign ring. A statement piece for hip-hop fashion lovers.',
      image: 'https://static-01.daraz.com.bd/p/4c603b2c35a9ad44562172081604eb02.jpg',
      category: 'Accessories',
      features: ['18K gold plating', 'Adjustable sizing', 'Hypoallergenic metal', 'Signature hip-hop style'],
      rating: 2,
      reviews: 142
    },
    10: {
      name: 'Eminem Slim Shady Cap',
      price: 20.99.toFixed(2),
      description: 'Classic snapback featuring Eminem’s Slim Shady logo. Adjustable for a perfect fit.',
      image: 'https://rockabilia.com/cdn/shop/products/418956F_1024x1024.jpg?v=1654786552',
      category: 'Accessories',
      features: ['Structured 6-panel design', 'Adjustable snapback closure', 'Embroidered logo', 'One size fits most'],
      rating: 3.2,
      reviews: 86
    }
  }
  
;

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products[id as keyof typeof products];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          className="relative"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full">
            {product.category}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
            <div className="flex items-center mt-2 space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="text-2xl font-bold text-purple-600">${product.price}</div>

          <p className="text-gray-600 dark:text-gray-300">{product.description}</p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Music className="w-4 h-4 text-purple-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={addToCart}
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Tag className="w-5 h-5" />
            <span>Add to Cart</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProductDetails;