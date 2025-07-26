E-commerce Customer Support Chatbot
A modern, AI-powered customer support chatbot for e-commerce clothing websites. Built with React.js frontend and Node.js backend.
🚀 Features

Smart Query Processing: Natural language understanding for customer queries
Order Status Tracking: Real-time order status and tracking information
Product Search & Discovery: Search products by name, category, or description
Inventory Management: Check stock levels and availability
Top Products: Display best-selling and popular items
Responsive Design: Works seamlessly on desktop and mobile devices
Real-time Chat Interface: Modern, intuitive chat experience

🏗️ Project Structure
ecommerce-chatbot/
├── backend/                 # Node.js Express Server
│   ├── package.json
│   ├── server.js           # Main server file
│   ├── routes/            # API routes
│   │   ├── products.js    # Product endpoints
│   │   ├── orders.js      # Order endpoints
│   │   └── chatbot.js     # Chatbot endpoints
│   ├── data/              # Mock data
│   │   ├── products.json  # Product catalog
│   │   └── orders.json    # Order database
│   └── controllers/       # Business logic
│       └── chatbotController.js
├── frontend/               # React Application
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js         # Main app component
│       ├── App.css        # App styles
│       ├── components/    # React components
│       │   ├── Chatbot.js
│       │   ├── MessageList.js
│       │   ├── MessageInput.js
│       │   └── ProductCard.js
│       └── services/      # API services
│           └── api.js
└── README.md
🛠️ Setup Instructions
Prerequisites

Node.js (v14 or higher)
npm or yarn
Git

1. Clone the Repository
bashgit clone <your-repository-url>
cd ecommerce-chatbot
2. Backend Setup
bash# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm start
The backend server will start on http://localhost:5000
3. Frontend Setup
Open a new terminal window:
bash# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
The frontend will start on http://localhost:3000
4. Verify Setup

Backend: Visit http://localhost:5000/api/health
Frontend: Visit http://localhost:3000
Test the chatbot with sample queries

📋 Example Queries
Try these sample queries with the chatbot:
Order Status

"What's the status of order 12345?"
"Track my order 12346"
"Where is order 12347?"

Product Stock

"How many Classic T-Shirts are left in stock?"
"Is the Denim Jeans available?"
"Check stock for Running Shoes"

Top Products

"Show me the top 5 most sold products"
"What are the best selling items?"
"Top 3 popular products"

Product Search

"Find summer dresses"
"Show me running shoes"
"Search for jackets"

🔧 API Endpoints
Chatbot Endpoints

POST /api/chatbot/query - Process natural language queries
GET /api/chatbot/help - Get help information
GET /api/chatbot/suggestions - Get query suggestions

Product Endpoints

GET /api/products - Get all products
GET /api/products/:id - Get product by ID
GET /api/products/top/:limit - Get top selling products
GET /api/products/search/:query - Search products
GET /api/products/stock/:productName - Check stock

Order Endpoints

GET /api/orders - Get all orders
GET /api/orders/:id - Get order by ID
GET /api/orders/:id/track - Get tracking information

🎨 Customization
Adding New Products
Edit backend/data/products.json to add or modify products:
json{
  "id": "11",
  "name": "New Product",
  "category": "category",
  "price": 99.99,
  "stock": 50,
  "sold": 100,
  "description": "Product description",
  "sizes": ["S", "M", "L"],
  "colors": ["Black", "White"],
  "rating": 4.5
}
Adding New Orders
Edit backend/data/orders.json to add test orders.
Styling

Frontend styles are in src/App.css and component CSS files
Uses modern CSS with gradients, animations, and responsive design

🔍 Chatbot Intelligence
The chatbot uses natural language processing to understand:

Intent Recognition: Identifies what the user wants (order status, product search, etc.)
Entity Extraction: Extracts relevant information (order IDs, product names, quantities)
Context Awareness: Provides relevant responses based on query type
Error Handling: Graceful handling of unrecognized queries

📱 Responsive Design

Desktop: Full-featured chat interface with product cards
Tablet: Optimized layout for medium screens
Mobile: Touch-friendly interface with stacked layouts

🚀 Deployment
Backend Deployment

Set environment variables for production
Use PM2 or similar for process management
Configure reverse proxy (nginx)

Frontend Deployment

Build the React app: npm run build
Deploy build folder to static hosting (Netlify, Vercel, etc.)
Update API URLs for production

🧪 Testing
Manual Testing

Start both backend and frontend
Test all example queries
Verify product cards display correctly
Check responsive design on different screen sizes

API Testing
Use tools like Postman or curl to test API endpoints:
bash# Test chatbot query
curl -X POST http://localhost:5000/api/chatbot/query \
  -H "Content-Type: application/json" \
  -d '{"message": "Show me top 5 products"}'

# Test order status
curl http://localhost:5000/api/orders/12345
🤝 Contributing

Fork the repository
Create a feature branch
Make your changes
Test thoroughly
Submit a pull request

📄 License
MIT License - see LICENSE file for details
🆘 Support
For questions or issues:

Check this README
Review the code comments
Test with provided examples
Create an issue in the repository
