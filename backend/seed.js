const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Plan = require('./models/Plan');
const Promo = require('./models/Promo');

dotenv.config();

const plans = [
  {
    name: 'GPlan Postpaid 599',
    price: 599,
    data: '6GB',
    validity: '30 Days',
    features: ['Unli All-Net Calls & Texts', 'Unli Landline Calls', 'GoWifi Access', '1-month VIP Subscription'],
    isFeatured: false
  },
  {
    name: 'GPlan Postpaid 1499',
    price: 1499,
    data: '20GB',
    validity: '30 Days',
    features: ['Unli All-Net Calls & Texts', 'Unli Landline Calls', 'Free 1-month Subscription to Disney+', 'No-Bill Shock Feature'],
    isFeatured: true
  },
  {
    name: 'GPlan Postpaid 2499',
    price: 2499,
    data: 'Unli Data',
    validity: '30 Days',
    features: ['Unli All-Net Calls & Texts', 'Unli Landline Calls', 'Priority Support', 'Exclusive Rewards'],
    isFeatured: false
  }
];

const promos = [
  {
    title: 'Double Data on G-Fiber',
    description: 'Get twice the data when you upgrade your fiber plan today. Limited time offer for new subscribers.',
    imageUrl: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    expiryDate: new Date('2026-12-31'),
    link: '/plans'
  },
  {
    title: 'Free Disney+ with GPlan',
    description: 'Subscribe to GPlan 1499 and above and get a free 1-month subscription to Disney+ on us.',
    imageUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    expiryDate: new Date('2026-06-30'),
    link: '/promos'
  },
  {
    title: 'Globe Rewards: 10% Off',
    description: 'Use your Globe Rewards points to get 10% discount on selected partner stores nationwide.',
    imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    expiryDate: new Date('2026-05-15'),
    link: '/rewards'
  }
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    await Plan.deleteMany();
    await Promo.deleteMany();
    
    await Plan.insertMany(plans);
    await Promo.insertMany(promos);
    
    console.log('Data Seeded Successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
