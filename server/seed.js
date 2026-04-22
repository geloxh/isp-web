const mongoose = require('mongoose');
const Product = require('./models/Product');
const Promo = require('./models/Promo');
require('dotenv').config();

const products = [
  {
    name: 'Fiber Starter',
    description: 'Perfect for small households and light browsing.',
    price: 29.99,
    category: 'Broadband',
    speed: '50 Mbps',
    dataLimit: 'Unlimited',
    features: ['Free Router', 'No Activation Fee', '24/7 Support']
  },
  {
    name: 'Fiber Pro',
    description: 'High-speed internet for gamers and streamers.',
    price: 59.99,
    category: 'Broadband',
    speed: '500 Mbps',
    dataLimit: 'Unlimited',
    features: ['Premium Router', 'Low Latency', 'Priority Support', 'Free Mesh WiFi']
  },
  {
    name: 'Mobile Unlimited',
    description: 'Stay connected everywhere with unlimited data.',
    price: 45.00,
    category: 'Mobile',
    dataLimit: 'Unlimited',
    features: ['5G Included', 'Unlimited Talk & Text', 'International Roaming']
  },
  {
    name: 'Family TV Bundle',
    description: 'Best of entertainment for the whole family.',
    price: 79.99,
    category: 'TV',
    features: ['200+ Channels', 'HD Quality', 'On-Demand Library', 'Multi-room Support']
  }
];

const promos = [
  {
    title: 'Summer Flash Sale',
    description: 'Get 20% off on all Fiber Pro plans for the first 6 months!',
    discountCode: 'SUMMER20',
    discountPercentage: 20,
    isActive: true,
    expiryDate: new Date('2026-08-31')
  },
  {
    title: 'New Customer Special',
    description: 'Join us today and get $50 credit on your first bill.',
    discountCode: 'WELCOME50',
    isActive: true
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    await Product.deleteMany({});
    await Promo.deleteMany({});

    await Product.insertMany(products);
    await Promo.insertMany(promos);

    console.log('Data seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();
