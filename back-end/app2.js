const express = require('express') 
const bodyparser = require('body-parser') 
const path = require('path') 
const app = express() 

var Publishable_Key = 'pk_test_51Jaa8aSIASHXTZNFZNxsuyR3iche2dLPDyYIow9eTFtg9YQHbdkJ479V5PPePXztNjEBMVq08cBfMhakGmoYcnwz00c5HlYTKt'
var Secret_Key = 'sk_test_51Jaa8aSIASHXTZNFh6vvMHAOsk78Os0ICrrrV3ZrcQjD17dHgbSK0sa0Y6qPMyAMv0TnAkUHogDHKBJR88uJCxxq00BgwULMuF'

const stripe = require('stripe')(Secret_Key) 

const port = process.env.PORT || 3002 

app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json()) 

// View Engine Setup 
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs') 

app.get('/', function(req, res){ 
    res.render('Home', { 
    key: Publishable_Key 
    }) 
}) 

app.post('/payment', function(req, res){ 

    // Moreover you can take more details from user 
    // like Address, Name, etc from form 
    stripe.customers.create({ 
        email: req.body.stripeEmail, 
        source: req.body.stripeToken, 
        name: 'Hotel Payment', 
        address: { 
            line1: 'TC 9/4 Old MES colony', 
            postal_code: '110092', 
            city: 'New Delhi', 
            state: 'Delhi', 
            country: 'India', 
        } 
    }) 
    .then((customer) => { 
        res.redirect('http://localhost:4200/showbooking');
        return stripe.charges.create({ 
            amount: 7000,    // Charing Rs 25 
            description: 'Card Payment', 
            currency: 'INR', 
            customer: customer.id 
        }); 
    }) 
    .then((charge) => { 
        //res.send("Success") // If no error occurs 
        //window.location.href = "http://localhost:4200/showbooking";
        //res.redirect('http://localhost:4200/showbooking');
    }) 
    .catch((err) => { 
        res.send(err)    // If some error occurs 
    }); 
}) 

app.listen(port, function(error){ 
    if(error) throw error 
    console.log("Server created Successfully") 
})