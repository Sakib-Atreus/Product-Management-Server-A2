# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=33&pause=1000&color=174DCD&width=435&lines=Product+Management+API+Application;Create+your+task+today!;React+Application)](https://git.io/typing-svg)

## Introduction

This Product Management API is built with Express and TypeScript, integrating MongoDB through Mongoose for efficient data handling. It ensures data accuracy with Zod validation. The API supports CRUD operations for both products and orders, providing a robust and scalable solution for managing product and order data.

## Tech Stack

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Zod](https://zod.dev/)

## Features

### 1. Product Management

- **Create a New Product** 
- **GET All Products** 
- **GET Specific Product by ID** 
- **Update Product Information** 
- **Delete a Product** 
- **Search for Products**

### 2. Order Management

- **Create a New Order** 
- **Retrieve All Orders** 
- **Retrieve Orders by User Email**

## Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [**Node.js**](https://nodejs.org/en) installed on your machine (v14 or higher recommended)
- [**MongoDB**](https://www.mongodb.com/) installed and running on your local machine
- [**VSCode**](https://code.visualstudio.com/) code editor
- [**TypeScript**](https://www.typescriptlang.org/) installed
- [**npm**](https://www.npmjs.com/) installed

### 📂 Clone the Repository

```bash
git clone https://github.com/Sakib-Atreus/Product-Management-Server-A2
cd Product-Management-Server-A2
```

### 📦 Install Dependencies

```bash
npm install
```

### ⚙️ Configure Environment Variables

Create a `.env` file in the root of your project and add essential environment variables, follow these steps:

```bash
PORT="setup a port"  // example: PORT: 5000
DB_URI="setup your mongo url"
```

### 🛠️ Compile TypeScript

```bash
npm run build
```

### 🚀 Start the Application

```bash
npm run start:dev
```


## 📧 Contact

If you have any questions or need further assistance, please contact sakibatreus@gmail.com

---

By following these steps, you can set up and run the Product Management API application locally on your machine.