import Card from "react-bootstrap/Card";

import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";

export default function FreeCard() {
  return (
    <Card
      border="secondary"
      style={{ width: "25rem", height: "32rem", borderRadius: "30px" }}
      className="mx-auto"
    >
      <Card.Header>
        <small style={{ color: "grey", fontSize:"20px"}}>
          <b>FREE</b>
        </small>
        <Card.Title>
          <p style={{ fontSize: "60px", fontWeight: "195px" }}>$0/month</p>
        </Card.Title>
      </Card.Header>

      <Card.Body style={{ textAlign: "left" }}>
        <Card.Text className="custom-card-body">
          <div style={{ marginTop: "10px" }}>
            <i class="bi bi-check ">Single User</i>
          </div>
          <div style={{ marginTop: "10px" }}>
            <i class="bi bi-check ">50GB Storage</i>
          </div>
          <div style={{ marginTop: "10px" }}>
            <i class="bi bi-check">Unlimited Public Projects</i>
          </div>
          <div style={{ marginTop: "10px" }}>
            <i class="bi bi-check">Community Access</i>
          </div>
          <div style={{ marginTop: "10px" }}>
            <i class="bi bi-x disabled">Unlimited Private Projects</i>
          </div>
          <div style={{ marginTop: "10px" }}>
            <i class="bi bi-x disabled">Dedicated Phone Support</i>
          </div>
          <div style={{ marginTop: "10px" }}>
            <i class="bi bi-x disabled">Free Subdomain</i>
          </div>
          <div style={{ marginTop: "10px" }}>
            <i class="bi bi-x disabled">Monthly Status Reports</i>
          </div>
        </Card.Text>
        <Button
          variant="primary"
          className="button"
          style={{ borderRadius: "35px" }}
        >
          <small>
            <b>BUTTON</b>
          </small>
        </Button>
      </Card.Body>
    </Card>
  );
}
