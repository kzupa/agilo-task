# agilo-task

This project is a storefront application that utilizes Medusa as its backend. Medusa is an e-commerce platform that provides a comprehensive set of APIs for managing products, collections, orders, and more. The storefront application, built using React and TypeScript, interacts with Medusa's API endpoints to fetch and display products, handle customer interactions, and facilitate the ordering process. It provides a user-friendly interface for customers to browse and purchase products from the Medusa-powered store. The project integrates frontend technologies with Medusa's backend capabilities.

<br>

## **Technical information**

### **Setup**

- Clone the repository
  - HTTPS: *git clone https://github.com/kzupa/agilo-task.git*
  - SSH: *git@github.com:kzupa/agilo-task.git*
- Navigate to medusa-store-api: *cd medusa-store-api*
  - Install packages: *npm install*
  - Create .env file in the root of medusa-store-api project and add your info for DATABASE_URL (example: localhost:5432/agilo-seeded), DB_USERNAME and DB_PASSWORD
  - Run migrations: *npx @medusajs/medusa-cli migrations run*
  - Run seeds: *npx @medusajs/medusa-cli@latest seed -f ./data/seed.json*
  - Open your database in SQL Shell and run these two blocks of code (**NOTE: YOU CAN ALSO SETUP MEDUSA ADMIN AND SET SOME COLLECTIONS THERE!**):
    - INSERT INTO product_collection (id, title, handle)
      VALUES ('pcol_winter', 'Winter', 'winter'),
            ('pcol_summer', 'Summer', 'summer'),
            ('pcol_office', 'Office', 'office');
    - UPDATE product
      SET collection_id =
          CASE
              WHEN row_number IN (1, 4) THEN 'pcol_summer'
              WHEN row_number IN (2, 3, 5, 6) THEN 'pcol_winter'
              WHEN row_number = 7 THEN 'pcol_office'
          END
      FROM (
          SELECT id, collection_id,
                ROW_NUMBER() OVER (ORDER BY id) AS row_number
          FROM product
      ) AS numbered_products
      WHERE product.id = numbered_products.id;
  - Start the server: *medusa develop* (note: server has to be running alongside frontend server)
- Navigate to frontend: *cd ../frontend*
  - Install packages: *npm install*
  - Start the server: *npm run dev*

**NOTE:** I've tried to write seed for collections, but it turned out to be extremely difficult (possibly due to product_collection's structure discrepancies between Medusa's documentation and my medusa-store-api project)

<br>

### **Usage**

After a successful setup, navigate to localhost:3000 and test the app! <br>
Hopefully you will enjoy! :)

## **Other information**

### **Time Spent**

I've spent approximately a week working on this application (About 4 hours per day).

<br>

### **Most Challenging Implementation**

The most challenging implementation was actually figuring out what is wrong with collections and how am I going to make seeding them work..? However, regarding frontend part of the app, it was implementing filter for said collections.

<br>

### **Implementation I'm Most Proud Of**

I'm the most proud of ma cute lil' spinnin' button because I think it looks interesting from customer's point of view. Also, what makes me really happy is that the whole application actually turned out responsive. I'm proud of the whole app because it is actually my first time working with typescript.

<br>

### **Project Structure and Considerations**

The project is structured within two applications; medusa store which serves as backend and frontend that is made in Next.js. Tailwind, CSS and typescript were used for building the frontend part of the app.
