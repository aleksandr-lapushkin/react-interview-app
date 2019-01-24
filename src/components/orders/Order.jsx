import React from "react";
import { Orders } from "../../model";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Order extends React.PureComponent {
  onTitleChange = title => console.log("New title ", title);
  onStatusChange = status => console.log("New status ", status);
  saveOrder = () => {
    //TODO: implement
    console.log("Saving");
  };

  render() {
    return (
      <div>
        <div className="row">
          <Link to="/">
            <button>Home</button>
          </Link>
          <button className="button-primary" onClick={this.saveOrder}>
            Save
          </button>
        </div>

        <form>
          <div className="row u-full-width">
            <div className="columns six">
              <label htmlFor="title">Title</label>
              <input
                className="u-full-width"
                id="title"
                type="text"
                required
                placeholder="Enter title..."
                onChange={e => this.onTitleChange(e.target.value)}
              />
            </div>

            <div className="columns six">
              <label htmlFor="status">Status</label>
              <select
                className="u-full-width"
                id="status"
                required
                onChange={e => this.onStatusChange(e.target.value)}
              >
                {Object.keys(Orders.Status).map(status => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Order.propTypes = {
  order: PropTypes.object
};
