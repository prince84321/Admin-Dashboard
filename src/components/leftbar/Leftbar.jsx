import "./leftbar.css";
import {
  AvTimerOutlined,
  Battery80Outlined,
  ConfirmationNumber,
  DashboardOutlined,
  List,
  LocationOn,
  PeopleAltOutlined,
  PersonOutlineOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";

function Leftbar() {
  const [open, setOpen] = useState(false);
  const [openperson, setOpenperson] = useState(false);
  const [openassets, setOpenassets] = useState(false);
  const [opentickets, setOpentickets] = useState(false);
  const [opencollection, setOpencollection] = useState(false);
  const [openserial, setOpenserial] = useState(false);
  const [openorder, setOpenorder] = useState(false);

  const handleButton = () => {
    setOpen(!open);
  };
  const handleButtonperson = () => {
    setOpenperson(!openperson);
  };
  const handleButtonassets = () => {
    setOpenassets(!openassets);
  };
  const handleButtontickets = () => {
    setOpentickets(!opentickets);
  };
  const handleButtoncollection = () => {
    setOpencollection(!opencollection);
  };
  const handleButtonserial = () => {
    setOpenserial(!openserial);
  };
  const handleButtonorder = () => {
    setOpenorder(!openorder);
  };
  return (
    <div className="leftbar">
      <div className="leftbar-container">
        <div className="leftbar-content">
          <AvTimerOutlined className="leftbar-icon" />
          <span>Dashboard</span>
        </div>
        <div className="leftbar-content">
          <DashboardOutlined className="leftbar-icon" />
          <span>Reports</span>
        </div>
        <div
          onClick={handleButton}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          role="button"
          className="leftbar-content"
        >
          <LocationOn className="-leftbar-icon" />
          <span>IOT</span>
          <span className="leftbar-icon-plus">+</span>
        </div>
        <Collapse in={open}>
          <div id="example-collapse-text" className="collapse-anchor">
            <a href="#">Network Dashboard</a>
            <a href="#">Franchise Dashboard</a>
            <a href="#">Immobilize</a>
            <a href="#">Immobilize Master</a>
          </div>
        </Collapse>
        <div
          onClick={handleButtonperson}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          role="button"
          className="leftbar-content"
        >
          <PersonOutlineOutlined className="leftbar-icon" />
          <span>Persona</span>
          <span className="leftbar-icon-plus">+</span>
        </div>
        <Collapse in={openperson}>
          <div id="example-collapse-text" className="collapse-anchor">
            <a href="#">KAE MEN</a>
            <a href="#">KAM</a>
            <a href="#">Commercial</a>
            <a href="#">Operation</a>
            <a href="#">Warehouse</a>
            <a href="#">Franchise</a>
            <a href="#">Franchise Driver</a>
          </div>
        </Collapse>
        <div className="leftbar-content">
          <PeopleAltOutlined className="leftbar-icon" />
          <span>Deboard Driver List</span>
        </div>
        <div
          onClick={handleButtonassets}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          role="button"
          className="leftbar-content"
        >
          <Battery80Outlined className="leftbar-icon" />
          <span>Assets</span>
          <span className="leftbar-icon-plus">+</span>
        </div>
        <Collapse in={openassets}>
          <div id="example-collapse-text" className="collapse-anchor">
            <a href="#">Driver Assets Assign</a>
            <a href="#">Assets Transfer</a>
            <a href="#">Assets tracking</a>
          </div>
        </Collapse>
        <div
          onClick={handleButtontickets}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          role="button"
          className="leftbar-content"
        >
          <ConfirmationNumber className="leftbar-icon" />
          <span>Tickets</span>
          <span className="leftbar-icon-plus">+</span>
        </div>
        <Collapse in={opentickets}>
          <div id="example-collapse-text" className="collapse-anchor">
            <a href="#">Driver Tickets</a>
            <a href="#">Unallocated Asset Tickets</a>
            <a href="#">Deleted Tickets</a>
          </div>
        </Collapse>
        <div
          onClick={handleButtoncollection}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          role="button"
          className="leftbar-content"
        >
          <List className="leftbar-icon" />
          <span>Collection Management</span>
          <span className="leftbar-icon-plus">+</span>
        </div>
        <Collapse in={opencollection}>
          <div id="example-collapse-text" className="collapse-anchor">
            <a href="#">Franchise Collections</a>
            <a href="#">Franchise Invoices</a>
          </div>
        </Collapse>
        <div className="leftbar-content">
          <List className="leftbar-icon" />
          <span>Inventory Request</span>
        </div>
        <div className="leftbar-content">
          <List className="leftbar-icon" />
          <span>Product Make</span>
        </div>
        <div
          onClick={handleButtonserial}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          role="button"
          className="leftbar-content"
        >
          <List className="leftbar-icon" />
          <span>Serial Number</span>
          <span className="leftbar-icon-plus">+</span>
        </div>
        <Collapse in={openserial}>
          <div id="example-collapse-text" className="collapse-anchor">
            <a href="#">Assets Serial No</a>
            <a href="#">Generate QR Code</a>
          </div>
        </Collapse>
        <div className="leftbar-content">
          <List className="leftbar-icon" />
          <span>Plans</span>
        </div>
        <div className="leftbar-content">
          <List className="leftbar-icon" />
          <span>Product</span>
        </div>
        <div
          onClick={handleButtonorder}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          role="button"
          className="leftbar-content"
        >
          <ShoppingCart className="leftbar-icon" />
          <span>Order Management</span>
          <span className="leftbar-icon-plus">+</span>
        </div>
        <Collapse in={openorder}>
          <div id="example-collapse-text" className="collapse-anchor">
            <a href="#">New Order</a>
            <a href="#">View Order</a>
            <a href="#">View Delivery Order</a>
            <a href="#">Return Order</a>
            <a href="#">Return Order Status</a>
            <a href="#">Replacement Oreder</a>
            <a href="#">Replacement Oreder Status</a>
          </div>
        </Collapse>
        <div className="leftbar-content">
          <List className="leftbar-icon" />
          <span>Traffice Management</span>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
