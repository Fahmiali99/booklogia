import React from "react";
import { Container } from "react-bootstrap";

function Navbar() {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <Container>
        {/* this footer */}
        <small>&copy; Booklogia</small>
      </Container>
    </footer>
  );
}

export default Navbar;
