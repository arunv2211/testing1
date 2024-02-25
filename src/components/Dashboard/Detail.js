import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const EmpDetail = () => {
  return (
    <div className="bg-primary vh-100">
      <div className="row ">
        <div className="offset-lg-3 col-lg-6">
          <div className="container-details mt-5 ">
            <div className="card row" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 className="text-center mt-3">Patient Details</h2>
              </div>
              <div className="card-body"></div>

              <div>
                <div className="pb-3">patient name : Arun</div>
                {/* <h5>Contact Details</h5> */}

                <div className="pb-3">Phone : 2103987097 </div>
                <div className="pb-3">Aternate no : 2103987097 </div>
                <div className="pb-3">
                  Address : 234,road st, arni , tvmalai{" "}
                </div>
                <div className="pb-3">Medicines : </div>
                <div className="btn btn-danger mb-3 ">Back to Listing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;
