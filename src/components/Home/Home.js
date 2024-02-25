// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import home from "../Home/homestyle.css";
import "bootstrap/dist/css/bootstrap.css";
import "./homestyle.css";

function Home() {
  return (
    <div className="container-two">
      <div className="card">
        <div className="card-title ">
          <div class="d-flex flex-row ">
            <h4 className="text-center">Patient List</h4>
          </div>

          <div className="add-container-one">
            <input
              type="text"
              class="form-control"
              placeholder="Search patient by name"
            ></input>
            <div>
              <div className="btn btn-primary w-10 p-1 ">Search</div>
            </div>
            {/* <div className="add-one">Search</div> */}
          </div>
        </div>
        <div className="card-body">
          <div>
            <div className="btn btn-primary  w-10 p-1">Add new (+)</div>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Name</td>
                <td>Number</td>
                <td>Age</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arun</td>
                <td>128328873</td>
                <td>21</td>
                <td>
                  <a className="btn btn-success w-10 p-1">Edit</a>
                  <a className="btn btn-danger w-10 p-1">Remove</a>
                  <a className="btn btn-primary w-10 p-1">Details</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Home;
