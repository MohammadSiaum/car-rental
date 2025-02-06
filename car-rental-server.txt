const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const port = process.env.PORT || 3001;

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'car_rental_system',
});

// middle ware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ---------- Read ----------

app.get('/users', (req, res) => {
    const sqlSelect = "SELECT * FROM users";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
});

/* app.get('/cars/list-cars', (req, res) => {
    const sqlSelect = "SELECT * FROM cars WH";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
}); */

app.get('/cars', (req, res) => {
    const sqlSelect = "SELECT * FROM cars";
    db.query(sqlSelect,(err, result) => {
        res.send(result);
    })
});

app.get('/cars-availabe', (req, res) => {
    const availability = 'available';
    const sqlSelect = "SELECT * FROM cars WHERE availability = ?";
    db.query(sqlSelect, availability,(err, result) => {
        res.send(result);
    })
});



app.get('/drivers', (req, res) => {
    const sqlSelect = "SELECT * FROM drivers";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
});

app.get('/drivers-available', (req, res) => {
    const availability = 'available';
    const sqlSelect = "SELECT * FROM drivers WHERE availability = ?";
    db.query(sqlSelect,availability, (err, result) => {
        res.send(result);
    })
});

app.get('/cars-count', (req, res) => {
    const sqlSelect = "SELECT COUNT(*) AS total_cars FROM cars";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
});

app.get('/drivers-count', (req, res) => {
    const sqlSelect = "SELECT COUNT(*) AS total_drivers FROM drivers";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
});

app.get('/hired/drivers', (req, res) => {
    const sqlSelect = "SELECT * FROM hired_driver";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
});

app.get('/booked/cars', (req, res) => {
    const sqlSelect = "SELECT * FROM car_booking";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
});


// ---------- End Read ----------

// ---------- Insert -------------
app.post('/user/insert', (req, res) => {
    const user_name = req.body.user_name;
    const email = req.body.email;
    const phone = req.body.phone;
    const role = req.body.role;
    const user_password = req.body.user_password;

    // console.log(user_name, email, phone, role, user_password);

    const userInsert = "INSERT INTO users (user_name,email,phone,role,user_password) VALUES (?,?,?,?,?)";
    db.query(userInsert, [user_name,email,phone,role,user_password], (err, result) => {
        console.log(result);
    });

})



app.post('/car/booking', (req, res) => {
    const seeker_id = req.body.seeker_id;
    const car_id = req.body.car_id;
    const days = req.body.days;
    const start_date = req.body.start_time;

    console.log(seeker_id, car_id, days, start_date);

    const carBooking = "INSERT INTO car_booking (seeker_id, car_id, days, start_date) VALUES (?,?,?,?)";
    db.query(carBooking, [seeker_id, car_id, days, start_date], (err, result) => {
        console.log(result);
    });

})


app.post('/driver/hire', (req, res) => {
    const seeker_id = req.body.seeker_id;
    const driver_id = req.body.driver_id;
    const days = req.body.days;
    const start_date = req.body.start_time;

    const driverHire = "INSERT INTO hired_driver (seeker_id, driver_id, days, start_date) VALUES (?,?,?,?)";
    db.query(driverHire, [seeker_id, driver_id, days, start_date], (err, result) => {
        console.log(result);
    });

})

app.post('/drivers/add', (req, res) => {
    const provider_id = req.body.provider_id;
    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    const phone = req.body.phone;
    const experience = req.body.experience;
    const availability = req.body.availability;
    const rating = req.body.rating;
    const license_number = req.body.license_number;

    const driverAdd = "INSERT INTO drivers (provider_id,name,email,address,license_number,experience,rating,availability,phone) VALUES (?,?,?,?,?,?,?,?,?)";

    db.query(driverAdd, [provider_id,name,email,address,license_number,experience,rating,availability,phone], (err, result) => {
        console.log(result);
    });

    // console.log(provider_id, name, email, address, phone, experience, availability, rating);
})

app.post('/cars/add', (req, res) => {
    const provider_id = req.body.provider_id;
    const model = req.body.model;
    const seating_capacity = req.body.seating_capacity;
    const rent_price = req.body.rent_price;
    const mileage = req.body.mileage;
    const aesthetic_conditin = req.body.aesthetic_conditin;
    const oil_type = req.body.oil_type;
    const availability = req.body.availability;
    const rating = req.body.rating;

    console.log(provider_id, model, seating_capacity, rent_price, mileage, aesthetic_conditin, oil_type, availability, rating);

    
    const carAdd = "INSERT INTO cars (provider_id, model, seating_capacity,rent_price,mileage,aesthetic_condition,availability, oil_type, rating) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(carAdd, [provider_id, model, seating_capacity, rent_price, mileage, aesthetic_conditin,  availability,oil_type, rating], (err, result) => {
        console.log(result);
    })
})

// update
app.put('/driver/update', (req, res) => {
    const driver_id = req.body.driver_id;
    const availability = req.body.availability;
    // console.log(driver_id, availability);
    const driverUpdate = "UPDATE drivers SET availability = ? WHERE driver_id = ?";
    db.query(driverUpdate, [availability, driver_id], (err, result) => {
        console.log(result);
    });

})

app.put('/car/update', (req, res) => {
    const car_id = req.body.car_id;
    const availability = req.body.availability;
    console.log(car_id, availability);
    const driverUpdate = "UPDATE cars SET availability = ? WHERE car_id = ?";
    db.query(driverUpdate, [availability, car_id], (err, result) => {
        console.log(result);
    });

})



// delete
app.delete('/delete/driver-hire/:id',(req, res) => {
    const hired_id = req.params.id;
    console.log(hired_id);
    const hiredDelete = "DELETE FROM hired_driver WHERE hired_id = ?";
    db.query(hiredDelete, hired_id, (err, result) => {
        console.log(result);
    })

})

app.delete('/delete/car-booking/:id',(req, res) => {
    const car_booking_id = req.params.id;
    console.log(car_booking_id);
    const bookDelete = "DELETE FROM car_booking WHERE car_booking_id = ?";
    db.query(bookDelete, car_booking_id, (err, result) => {
        console.log(result);
    })

})


app.delete('/delete/car/:id',(req, res) => {
    const car_id = req.params.id;
    console.log(car_id);

    const carDelete = "DELETE FROM cars WHERE car_id = ?";
    db.query(carDelete, car_id, (err, result) => {
        console.log(result);
    })

})

app.delete('/delete/driver/:id',(req, res) => {
    const driver_id = req.params.id;
    console.log(driver_id);

    const driverDelete = "DELETE FROM drivers WHERE driver_id = ?";
    db.query(driverDelete, driver_id, (err, result) => {
        console.log(result);
    })

})


//------------------------

app.get('/', (req, res) => {

    res.send('car-rental server is running.');

})

app.listen(port, () => {
    console.log(`car-rental server running on ${port}`);
});

/* 

const sqlInsert = "INSERT INTO cars (car_id, provider_id, model, seating_capacity,rent_price,mileage,aesthetic_condition,availability) VALUES ('103', '203', 'BMW-2','4','4000','100k','good','available')"

db.query(sqlInsert, (err, result) => {

});

*/