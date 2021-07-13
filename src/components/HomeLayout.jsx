import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Dropdown, Card} from 'react-bootstrap'
import bg1 from './resources/images/nature_placeholder1.jpg' 
import logo from './resources/images/Logo.png'
import Hero from './resources/images/Hero.png'

function App() {

  const stateName="Kentucky"

  return (
    <>
    {/* <div className="container-fluid" style={{backgroundColor:"gray"}}></div> */}
<div className="jumbotron jumbotron-fluid">
  <div className="row">
    <div className="col-sm text-left">
    <img src={logo} alt="Logo" />
    </div>
    <div className="col-sm" >
&nbsp;
    </div>
    <div variant="primary" className="col-sm" style={{paddingLeft: '520px', paddingTop: '15px'}}>
    <Button variant="secondary" style={{paddingRight: '10px'}}>Sign Up</Button> <Button>Login</Button>
    </div>
  </div>
</div>

<div className="container-fluid border text-center align-middle" style={{height: "400px", backgroundColor: '#E0FCE6', backgroundImage:`url(${Hero})`}}> 
<h1 className="mb-4 font-weight-bold text-white" style={{marginTop: '12%', fontSize: "48px"}}>Find your next National Park</h1>
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Choose State
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Alaska</Dropdown.Item>
    <Dropdown.Item href="#/action-2">California</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Oklahoma</Dropdown.Item>
    <Dropdown.Item href="#/action-3">State 4</Dropdown.Item>
    <Dropdown.Item href="#/action-3">State 5</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

</div>

  <div className="container">
  <div className="row">
    <h3>Popular Parks</h3>
  </div>
  <div className="row">
    {/* Card */}
    <Card style={{ width: '25%' }}>
  <img height="150px" variant="top" className="rounded" style={{borderRadius: '35px', boxShadow: "5px 5px 5px lightgray"}} src="https://picsum.photos/100/100" />
  <Card.Body>
    {/* <Card.Title>Tettegouche State Park <span className="font-weight-light font-italic"> &mdash; Silver Bay, Minnesota</span> </Card.Title> */}
    <p>
    Iao Valley State Park <span className="font-weight-light font-italic"> &mdash; Wailuku, Hawaii</span> 
    </p>
    <Button variant="primary">Visit</Button>
  </Card.Body>
</Card>
  {/* Card end */}
    {/* Card */}
    <Card style={{ width: '25%' }}>
  <img height="150px" variant="top" className="rounded" style={{borderRadius: '35px', boxShadow: "5px 5px 5px lightgray"}} src="https://picsum.photos/100/100" />
  <Card.Body>
    {/* <Card.Title>Tettegouche State Park <span className="font-weight-light font-italic"> &mdash; Silver Bay, Minnesota</span> </Card.Title> */}
    <p>
    Iao Valley State Park <span className="font-weight-light font-italic"> &mdash; Wailuku, Hawaii</span> 
    </p>
    <Button variant="primary">Visit</Button>
  </Card.Body>
</Card>
  {/* Card end */}
    {/* Card */}
    <Card style={{ width: '25%' }}>
  <img height="150px" variant="top" className="rounded" style={{borderRadius: '35px', boxShadow: "5px 5px 5px lightgray"}} src="https://picsum.photos/100/100" />
  <Card.Body>
    {/* <Card.Title>Tettegouche State Park <span className="font-weight-light font-italic"> &mdash; Silver Bay, Minnesota</span> </Card.Title> */}
    <p>
    Eldorado Canyon State Park <span className="font-weight-light font-italic"> &mdash; Eldorado Springs, Colorado</span> 
    </p>
    <Button variant="primary">Visit</Button>
  </Card.Body>
</Card>
  {/* Card end */}
    {/* Card */}
    <Card style={{ width: '25%' }}>
  <img height="150px" variant="top" className="rounded" style={{borderRadius: '35px', boxShadow: "5px 5px 5px lightgray"}} src="https://picsum.photos/100/100" />
  <Card.Body>
    {/* <Card.Title>Tettegouche State Park <span className="font-weight-light font-italic"> &mdash; Silver Bay, Minnesota</span> </Card.Title> */}
    <p>
    Niagara Falls State Park <span className="font-weight-light font-italic"> &mdash; Niagara Falls, New York</span> 
    </p>
    <Button variant="primary">Visit</Button>
  </Card.Body>
</Card>
  {/* Card end */}
  </div>
  </div>

<div className="container mt-10" style={{marginTop: '15px'}}>
  <div className="row">
  <div className="col-sm text-center">
  <img src="https://picsum.photos/150/150" className="rounded-circle" />
  <p>Hiking</p>
  </div>
  <div className="col-sm text-center">
  <img src="https://picsum.photos/150/150" className="rounded-circle" />
  <p>Fishing</p>
  </div>
  <div className="col-sm text-center">
  <img src="https://picsum.photos/150/150" className="rounded-circle" />
  <p>Mountain Biking</p>
  </div>
  <div className="col-sm text-center">
  <img src="https://picsum.photos/150/150" className="rounded-circle" />
  <p>Bird Watching</p>
  </div>
  <div className="col-sm text-center">
  <img src="https://picsum.photos/150/150" className="rounded-circle" />
  <p>Backpacking</p>
  </div>
  </div>
</div>

<footer style={{height: '75px'}} className="container border text-center align-middle">
  <div>c 2021 - FOOTER INFO</div>
</footer>
    </>
  );
}

export default App;

