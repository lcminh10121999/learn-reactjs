import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import Main from './component/main/main';
import SideBar from './component/sidebar/side_bar';

function App() {
  return (
    <div className="App">


      <div className="container-fluid">

        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 px-0">
            <Header />
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <SideBar />
          </div>
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <Main />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
