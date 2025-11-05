import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Navbar, Nav, Card, Image } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Kareem Alaa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <section id="home">
          <h1 className="text-white">Welcome to My Portfolio</h1>
          <p className="text-light">Back-end Software Engineer</p>
        </section>
        <section id="about" className="mt-5">
          <h2 className="text-white">About Me</h2>
          <div className="d-flex align-items-center">
            <Image
              src="https://media.licdn.com/dms/image/D4D03AQGQ-ZV5fIe-yA/profile-displayphoto-shrink_400_400/0/1721566512894?e=1727308800&v=beta&t=vAAUQWu-W-O0Ibx0-XiAAvnllRZH5AW2k1luGZcAAxU"
              roundedCircle
              alt="Kareem Alaa"
              width={150}
              height={150}
              className="me-3"
            />
            <p className="text-light">
              I am a senior computer engineering student, passionate about
              software development. With a strong love for problem solving and a
              keen interest in backend development, embedded systems, and
              hardware, I am eager to contribute to real-world projects and make
              a meaningful impact.
            </p>
          </div>
          <div className="mt-4">
            <a
              href="https://github.com/KareemAlaa1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3"
            >
              GitHub
            </a>
            <a
              href="https://x.com/karreeem_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              Twitter
            </a>
          </div>
        </section>
        <section id="projects" className="mt-5">
          <h2 className="text-white">Projects</h2>
          <Card className="bg-dark text-light mt-3">
            <Card.Body>
              <Card.Title>
                <a href="https://github.com/KareemAlaa1/GigaChat-Backend">
                  GigaChat | Twitter API Clone
                </a>
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    A Twitter-clone supports user accounts, profiles, tweets
                    using restful API.
                  </li>
                  <li>
                    Direct messaging, and notifications using web sockets.
                  </li>
                  <li>
                    NodeJS, Express, MongoDB, Firebase, jest, postman, and
                    swagger.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bg-dark text-light mt-3">
            <Card.Body>
              <Card.Title>
                <a href="https://github.com/KareemAlaa1/Shipping-company-simulator">
                  Shipping Company system
                </a>
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    A shipping company uses queues, priority queues, and linked
                    lists, for effectively modeled waiting cargo, prioritized
                    deliveries, and managed truck availability for simulation.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bg-dark text-light mt-3">
            <Card.Body>
              <Card.Title>
                <a href="https://github.com/KareemAlaa1/Doodle-Search-Engine">
                  DOODLE | Search Engine
                </a>
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    A Java-based search engine that uses MongoDB for storage,
                    crawls web content, builds an index, and facilitates
                    searching through a query engine.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bg-dark text-light mt-3">
            <Card.Body>
              <Card.Title>
                <a href="https://github.com/KareemAlaa1/Operating-System-Scheduler">
                  Operating System Scheduler
                </a>
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    A CPU scheduling simulation project. It requires building a
                    process generator, clock, and scheduler implementing three
                    algorithms (HPF, SRTN, RR) to manage processes and allocate
                    memory (First Fit and Buddy System) for them upon arrival
                    and deallocate it upon termination.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bg-dark text-light mt-3">
            <Card.Body>
              <Card.Title>
                <a href="https://github.com/KareemAlaa1/Secure-Chat">
                  Secure Chat
                </a>
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    C++ secure chatting application over sockets that uses
                    Deffie-Hellman for exchanging session keys, Elgamal Digital
                    Signature for signing key exchange messages and AES for
                    actual messages encryption.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bg-dark text-light mt-3">
            <Card.Body>
              <Card.Title>
                <a href="https://github.com/KareemAlaa1/Sudoku-Solver-KNN-Based-App">
                  Sudoku Solver App
                </a>
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    Python app takes an input image which is the sudoku grid
                    user wants to solve and the app does some image processing
                    algorithms, and some classification then generates the
                    solved grid as output.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bg-dark text-light mt-3">
            <Card.Body>
              <Card.Title>
                <a href="https://github.com/KareemAlaa1/Five-Stage-Pipelined-Processor">
                  Five Stage Pipelined Processor
                </a>
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    This Project is a practical application to a single-core,
                    Harvard-architecture processor using VHDL that introduces
                    many different operations and communicating with one port.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
        <section id="contact" className="mt-5">
          <h2 className="text-white">Contact</h2>
          <p className="text-light">
            You can reach me at kareemalaa555@gmail.com
          </p>
        </section>
      </Container>
    </div>
  );
}


export default App;
