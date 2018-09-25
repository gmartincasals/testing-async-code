const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const indexPage = require("../../controllers/app.controller");

describe("getIndexPage", ()=>{
    it("Should return index page", ()=>{
        let req = {}
        let res = {
            send: sinon.spy()
        }

        indexPage.getIndexPage(req,res);
        //console.log(res.send);
        expect(res.send.calledOnce).to.be.true;
        expect(res.send.firstCall.args[0]).to.equal("bla");
    });
});