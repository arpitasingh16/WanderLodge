# 🏕️ WanderLodge – Airbnb Clone

**WanderLodge** is a full-stack web application inspired by Airbnb that enables users to list, explore, and book lodging. It offers features like user authentication, property management, reviews, ratings, and interactive map locations.

---

## 🚀 Features

- 🔐 User authentication with Passport.js (register, login, logout)
- 🏠 Add, edit, and delete properties (owner-only access)
- 🖼️ Image uploads and cloud storage via Cloudinary
- 🗺️ Location-based listings with Mapbox integration
- ✍️ Leave reviews and ratings for properties
- 🧑‍💻 Responsive EJS-based user interface
- 📦 Scalable MongoDB data storage with Mongoose

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, EJS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: Passport.js, Express-Session
- **File Storage**: Cloudinary
- **Maps & Geocoding**: Mapbox
- **Other Tools**: Multer, Method-Override, Connect-Flash
  
---
## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/WanderLodge.git
cd WanderLodge
```
### 2️⃣ Install Dependencies
Make sure you have Node.js and MongoDB installed. Then, run:
```bash
npm install
```
### 3️⃣ Setup Environment Variables
Create a .env file in the root directory and add the following:
- CLOUDINARY_CLOUD_NAME=your_cloud_name
- CLOUDINARY_KEY=your_key
- CLOUDINARY_SECRET=your_secret
- MAPBOX_TOKEN=your_mapbox_token
- DB_URL=mongodb://localhost:27017/wanderlodge
- SESSION_SECRET=your_session_secret

### 4️⃣ Start the MongoDB Server
mongod

### 5️⃣ Run the Application
```bash
npm start
```
Then go to:
http://localhost:3000

--- 

## 🖥️ Usage

🔐 User Authentication : 
Register or log in to access full functionality.

🏠 Add or Manage Properties : 
Owners can add new properties with images, location (Mapbox), and description.

🖼️ Upload Images : 
Upload property images securely using Cloudinary.

🗺️ Explore Listings : 
View and explore properties on an interactive map with filters.

✍️ Leave Reviews & Ratings : 
Authenticated users can review and rate properties.










