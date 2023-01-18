db = db.getSiblingDB('disruptive');

db.createCollection('callcenterOperators');
db.createCollection('companies');
db.createCollection('drivers');
db.createCollection('orders');
db.createCollection('users');
db.createCollection('vehicles');
db.createCollection('warehouseEmployees');
db.createCollection('warehouses');

db.callcenterOperators.insertMany([
  {
    "user_id": "63c59cba906cd41642733357"
  }
]);

db.companies.insertMany([
  {
    "name": "eShop",
    "api": "https://pasd-webshop-api.onrender.com/api/",
    "key": "xEB4mjSSJGsLJZE24xyM"
  }
]);

db.drivers.insertMany([
  {
    "user_id": "63c59ba3906cd41642733353",
    "vehicle_id": "63c5997c906cd41642733337"
  }
]);

db.orders.insertMany([
  {
    "send_date": {
      "$date": {
        "$numberLong": "1673827200000"
      }
    },
    "x_in_mm": 10,
    "y_in_mm": 10,
    "z_in_mm": 10,
    "is_breakable": true,
    "is_perishable": true,
    "sender_info": {
      "name": "Alex Cirlan",
      "street_and_number": "Peizerweg 132",
      "zipcode": "9727AN",
      "city": "Groningen",
      "country": "Nethelands"
    },
    "receiver_info": {
      "name": "Andrei",
      "street_and_number": "Trottle 23",
      "zipcode": "9725CV",
      "city": "Groningen",
      "country": "Netherlands"
    },
    "id_order": 1,
    "id_company": "63c59606906cd41642733300",
    "price_decided": {
      "$numberLong": "100"
    },
    "state": 1,
    "get_date": {
      "$date": {
        "$numberLong": "1673913600000"
      }
    },
    "driver_id": ""
  }
]);

db.users.insertMany([
  {
    "email": "john@gmail.com",
    "password": "john123",
    "salary": 1923.12,
    "first_name": "John",
    "last_name": "A",
    "employee": true
  },
  {
    "email": "smith@gmail.com",
    "password": "smith123",
    "salary": 1217.34,
    "first_name": "Smith",
    "last_name": "B",
    "employee": true
  },
  {
    "email": "tray@gmail.com",
    "password": "tray123",
    "salary": 1512.75,
    "first_name": "Tray",
    "last_name": "C",
    "employee": true
  }
]);

db.vehicles.insertMany([
  {
    "type": "van",
    "capacity": 100,
    "width": 10,
    "height": 11,
    "length": 12,
    "fragile": true,
    "license_plate": "TL-12-PAS",
    "availability": true,
    "capacity_used": 12,
    "needsMaintanance": false
  }
]);

db.warehouseEmployees.insertMany([
  {
    "user_id": "63c59c9e906cd41642733356",
    "warehouse_id": "63c59ab4906cd41642733341"
  }
]);

db.warehouses.insertMany([
  {
    "street_and_number": "Art 12",
    "zipcode": "9775AC",
    "city": "Groningen",
    "country": "Netherlands",
    "capacity": 1000,
    "x_in_m": 10,
    "y_in_m": 10,
    "z_in_m": 10
  }
]);