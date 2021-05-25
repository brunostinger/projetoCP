import logo from './logo.svg';
import './App.css';
import './assets/css/app.css';
import NavBar from './component/NavBar'
import Content from './component/Content'
import Footer from './component/Footer'
function App() {
  return (
<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Corporate Dashboard - Admin</title>
  {/* Custom fonts for this dashboard */}
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
  {/* Custom styles for this dashboard */}
  <div id="wrapper">
    {/* Sidebar */}
    <NavBar></NavBar>
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <Content></Content>
      {/* End of Main Content */}
      {/* Footer */}
      <Footer></Footer>
      {/* End of Footer */}
    </div>
    {/* End of Content Wrapper */}
  </div>
  {/* End of Page Wrapper */}
</>

  );
}

export default App;
