const chai = require("chai");
const expect = chai.expect;

const sinon = require("sinon");

const indexPage = require("../../controllers/app.controller");

const user = {
    addUser: (name) => {
        this.name = name;
    }
}

describe("AppController", ()=> {
    //Definición variables..
    let user = {
        isLoggedIn: ()=>{}
    };
    let req = {
        user: user
    };
    let res = {
        send: sinon.spy()
    };
  

    describe("getIndexPageSpies", ()=> {
        it("should send hey", ()=> {
        

            indexPage.getIndexPageSpy(req,res);
            //console.log(res.send);
            expect(res.send.calledOnce).to.be.true;
            expect(res.send.firstCall.args[0]).to.equal("Hey");
            

        });
    });

    describe("getindexpageStub", ()=>{
        it("Should send hey when user is lgged in", ()=>{
            const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);          
            expect(isLoggedInStub.calledOnce).to.be.true;
        });
    });
});

describe("User", ()=>{
    describe("addUser", ()=>{
        it("Should add a user", ()=>{
            sinon.spy(user, "addUser");
            user.addUser('John Doe');

            //console.log(user.addUser);
            expect(user.addUser.calledOnce).to.be.true;
        });
    });
});