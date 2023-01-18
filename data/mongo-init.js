db = db.getSiblingDB('disruptive');

db.createCollection('callcenteroperators');
db.createCollection('companies');
db.createCollection('drivers');
db.createCollection('orders');
db.createCollection('users');
db.createCollection('vehicles');
db.createCollection('warehouseemployees');
db.createCollection('warehouses');

db.callcenteroperators.insertMany([
  {
    "user_id": "000000000000000000000002"
  },
  {
    "user_id": "000000000000000000000003"
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
    "user_id": "000000000000000000000004",
    "vehicle_id": "000000000000000000000001"
  },
  {
    "user_id": "000000000000000000000005",
    "vehicle_id": "000000000000000000000002"
  },
  {
    "user_id": "000000000000000000000006",
    "vehicle_id": "000000000000000000000003"
  },
  {
    "user_id": "000000000000000000000007",
    "vehicle_id": "000000000000000000000004"
  }
]);

db.orders.insertMany([
  {
    "send_date": {
      "$date": {
        "$numberLong": "1673827200000"
      }
    },
    "price_decided": 100,
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
    "driver_id": "",
    "warehouse_id": ""
  },
  {
    "send_date": {
      "$date": {
        "$numberLong": "1673827200000"
      }
    },
    "price_decided": 100,
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
    "driver_id": "",
    "warehouse_id": ""
  },
  {
    "send_date": {
      "$date": {
        "$numberLong": "1673827200000"
      }
    },
    "price_decided": 100,
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
    "driver_id": "",
    "warehouse_id": ""
  },
  {
    "send_date": {
      "$date": {
        "$numberLong": "1673827200000"
      }
    },
    "price_decided": 100,
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
    "driver_id": "",
    "warehouse_id": ""
  },
  {
    "send_date": {
      "$date": {
        "$numberLong": "1673827200000"
      }
    },
    "price_decided": 100,
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
    "driver_id": "",
    "warehouse_id": ""
  },
  {
    "send_date": {
      "$date": {
        "$numberLong": "1673827200000"
      }
    },
    "price_decided": 100,
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
    "driver_id": "",
    "warehouse_id": ""
  },
  {
    "send_date": {
      "$date": {
        "$numberLong": "1673827200000"
      }
    },
    "price_decided": 100,
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
    "driver_id": "",
    "warehouse_id": ""
  },
  {
    "send_date": {
      "$date": {
        "$numberLong": "1673827200000"
      }
    },
    "price_decided": 100,
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
    "driver_id": "",
    "warehouse_id": ""
  },
  {
    "send_date": {
      "$date": {
        "$numberLong": "1673827200000"
      }
    },
    "price_decided": 100,
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
    "driver_id": "",
    "warehouse_id": ""
  },
  {
    "send_date": {
      "$date": {
        "$numberLong": "1673827200000"
      }
    },
    "price_decided": 100,
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
    "driver_id": "",
    "warehouse_id": ""
  }
]);

db.users.insertMany([
  {
    "email": "manager@dd.nl",
    "password": "test",
    "first_name": "Manager",
    "last_name": "Manager",
    "employee": true,
    "employee_type": "manager"
  },
  {
    "email": "callcenter@dd.nl",
    "password": "test",
    "first_name": "Trist",
    "last_name": "A",
    "employee": true,
    "employee_type": "callcenterOperator"
  },
  {
    "email": "callcenter2@dd.nl",
    "password": "test",
    "first_name": "Ana",
    "last_name": "B",
    "employee": true,
    "employee_type": "callcenterOperator"
  },
  {
    "email": "driver@dd.nl",
    "password": "test",
    "first_name": "Smith",
    "last_name": "B",
    "employee": true,
    "employee_type": "driver"
  },
  {
    "email": "driver2@dd.nl",
    "password": "test",
    "first_name": "Tray",
    "last_name": "C",
    "employee": true,
    "employee_type": "driver"
  },
  {
    "email": "driver3@dd.nl",
    "password": "test",
    "first_name": "Tray",
    "last_name": "C",
    "employee": true,
    "employee_type": "driver"
  },
  {
    "email": "driver4@dd.nl",
    "password": "test",
    "first_name": "Josh",
    "last_name": "D",
    "employee": true,
    "employee_type": "driver"
  },
  {
    "email": "warehouse@dd.nl",
    "password": "test",
    "first_name": "Emma",
    "last_name": "E",
    "employee": true,
    "employee_type": "warehouseEmployee"
  },
  {
    "email": "user@dd.nl",
    "password": "test",
    "first_name": "Cristian",
    "last_name": "F",
    "employee": false
  },
]);

db.vehicles.insertMany([
  {
    "type": "bike",
    "capacity": 1,
    "capacity_used": 1,
    "width": 1,
    "height": 1,
    "length": 1,
    "fragile": false,
    "license_plate": "TL-01-DVD",
    "availability": false,
    "needsMaintanance": false
  },
  {
    "type": "van",
    "capacity": 16,
    "capacity_used": 5,
    "width": 2,
    "height": 2,
    "length": 4,
    "fragile": false,
    "license_plate": "TL-02-DVD",
    "availability": false,
    "needsMaintanance": false
  },
  {
    "type": "car",
    "capacity": 8,
    "capacity_used": 7,
    "width": 2,
    "height": 2,
    "length": 2,
    "fragile": false,
    "license_plate": "TL-03-DVD",
    "availability": false,
    "needsMaintanance": false
  },
  {
    "type": "van",
    "capacity": 16,
    "capacity_used": 5,
    "width": 2,
    "height": 2,
    "length": 4,
    "fragile": true,
    "license_plate": "TL-04-DVD",
    "availability": false,
    "needsMaintanance": false
  },
  {
    "type": "van",
    "capacity": 16,
    "capacity_used": 0,
    "width": 2,
    "height": 2,
    "length": 4,
    "fragile": true,
    "license_plate": "TL-05-DVD",
    "availability": true,
    "needsMaintanance": true
  },
  {
    "type": "bike",
    "capacity": 1,
    "capacity_used": 0,
    "width": 1,
    "height": 1,
    "length": 1,
    "fragile": false,
    "availability": true,
    "needsMaintanance": false
  }
]);

db.warehouseemployees.insertMany([
  {
    "user_id": "000000000000000000000009",
    "warehouse_id": "000000000000000000000001"
  }
]);

db.warehouses.insertMany([
  {
    "street_and_number": "Art 12",
    "zipcode": "9775AC",
    "city": "Groningen",
    "country": "Netherlands",
    "capacity": 1000,
    "capacity_used": 94,
    "x_in_m": 10,
    "y_in_m": 10,
    "z_in_m": 10
  },
  {
    "street_and_number": "Art 13",
    "zipcode": "9774AC",
    "city": "Groningen",
    "country": "Netherlands",
    "capacity": 60,
    "capacity_used": 49,
    "x_in_m": 5,
    "y_in_m": 4,
    "z_in_m": 3
  }
]);

db.reviews.insertMany([
  {
    "product_id": "000000000000000000000002",
    "rating": 3,
    "review": "Good service!"
  },
  {
    "product_id": "000000000000000000000001",
    "rating": 5,
    "review": "Great service!"
  }
]);
