const chai = require('chai')
const server = require("../app")
let chaiHttp = require('chai-http')
// assertion style
chai.should();

// can call API using HTTP protocol
chai.use(chaiHttp)

describe('Tasks API', ()=>{
    // test the GET ROUTE,
    describe("GET /room", ()=>{
        it("It should GET all the rooms", ()=>{
            chai.request(server)
            .get("/room")
            .end((err,response)=>{
                response.should.have.status(200);
            
            })
        })
        it("It should NOT GET all the rooms", (done)=>{
            chai.request(server)
            .get("/rooms")
            .end((err,response)=>{
                response.should.have.status(404);
            done();
            })
        })
        it("It should GET all the bookings", ()=>{
            chai.request(server)
            .get("/booking")
            .end((err,response)=>{
                response.should.have.status(200);
            })
        })
        it("It should NOT GET all the bookings", (done)=>{
            chai.request(server)
            .get("/bookings")
            .end((err,response)=>{
                response.should.have.status(404);
            done();
            })
        })
    })
})