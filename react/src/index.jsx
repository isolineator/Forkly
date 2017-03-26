import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Home from './home.jsx'
import AddRecipe from './addRecipe.jsx';
import Login from './login.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'Forker Of Forks'
    };

    this.getUsername();
  }

  getUsername () {
    var context = this;

    $.ajax({
      url: '/username',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        console.log('ajax request to search username was successful');
        console.log(data);
        context.setState({username: data});
      },
      error: function(err) {
        console.log('ajax request to search username failed');
      }
    });
  }

  render () {
    // console.log(this.props);
    return (
      <Router>
        <div>
          <div className="nav"> 
            <section className="group">
              <h1 className="title logo">FORKLY</h1>
              <h3 className="title username">Welcome, {this.state.username}</h3>
              <nav>
                <div className="icon logout">
                  <img className="navButton" src="assets/images/logout.png" alt="Logout"/>
                  <span>Logout</span>
                </div>
                <div className="icon addRecipe">
                  <img className="navButton" src="assets/images/addRecipe.png" alt="Add Recipe"/>
                  <span><Link to="/addrecipe">Add Recipe</Link></span>
                </div>
                <div className="icon myForks">
                  <img className="navButton" src="assets/images/fork.png" alt="My Forks"/>
                  <span>My Forks</span>
                </div>
                <div className="icon home">
                  <img className="navButton" src="assets/images/home.png" alt="Home"/>
                  <span><Link to="/">Home</Link></span>
                </div>
              </nav>
            </section>
          </div>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/addrecipe" component={AddRecipe}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// To start, run from terminal the following...
// npm run react-dev
// npm run server-dev

// Fred, for good luck.
// https://a248.e.akamai.net/secure.meetupstatic.com/photos/member/c/e/b/e/highres_253972926.jpeg
// ,,,,,,,,,,,,,,,,,*,,,,,,,***************,,/(//*((/*/*/(((#(#####((((#%%%%(*,,.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// ,,,,,,,,,,,,,,,,,,,,,,,,,,*************,*(#**,,*,/*/*///.**/*/(*#%%##((#(/*(#(*,,,.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// *****,,,,,,,,,,,,,,,,,,,,,***,***,*****//#*(.*,,,/,**,,(#*##(#((##(*(#%##%%#(((///,,,*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// *****,,,,,,,,,,,,,,,,,,,,****../,****,****/,(%%%/*(%(,(%(*/,%%%%#(%%//#%&&&&&%%#(/(/.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// ,****,,,,,,,,*,,,,,,,,,,,,,**,*//*/*/*,*/(//%##%(((//(%%&@&&%//(&&%%((%(#/*/((#%&&&&%%%#, ,.,,,,,,,,,,,,,,,,,*,,,,,,,,,,,,**,,,,,,,,,,,,,,,
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*,/(/,**(#(*(&&%%%(#(#%&%&&@@@@&&%%@@&&**#%%%%%***((%%%%(&%*..,,,,,,,,************,,,,,,,,*****,,,,,,,,,,,,
// ,,,,,,,,,,,,,,,*,,,,,,,,,,,,,,,,,**/(#%(#%&&&&&%%&%&&@%#@#%@@@&@&%/@@#%&(#%(%&&&%*/%//,#,////#.,,,,,**************,,,,,,,,,,,,,,,,,,,,,,,
// ,,,,,,,,,,,,*****,,,,,,,,********(%/%%%&%&&%&&&&&&@@&@@&&&@@@@@@@&%@@%////&&&(&%&%/##*,/(,%%/,,,,***************,,,,,,,,,,,,,,,,,,,,,,,
// ******,***********************,/#%(%%#%%&&&&&&%&@@@@@@@@&&@@&@@&&@&%&&%&%(/**%&&#(&&%#&%(/(&&(/*,,************,,,,,,,,,,,,,,,,,,,,,,,,,
// ****************************,,#(/%&%/(%%&(&&@&&&%&@@@@@@@&@@&&@&@&@@&%%%&&&&%(*&%&&#&&&%&&%#(%%#/,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// **************,,********,*//*#(#&*#%%&&&@@&@&&&@@@@@@&@@@@&&&&&&&&&&&&&&&&&&&&&&%#&%&@&@&&&%(##*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// ,,*********************/#((/%%#%%/(#&&&@&@&&@@&&@@@&@@@@@@@&&&&&&&&&&&&&&&&&&&@&&&&&@&&%&&%&@&&@&&&(&%(,,,,,,,,,,,*******,,,,,,,,,,,,,,,,
// **********************/#(%#(%#%#((%&&&&@@@&@@&&&&@&@@@&@@@@&@&&&&&&&&&@@&&&&&&&@@@@&@&&&&&&&&@@&@&%&%&%%*,,,,,,,,*,,,,,,,,,,,,,,,,,,,,,,,
// *********************(#(%%(%#%%#%#%&%&&&@&@@&@@&&&&&@@&@&&&&&&&&&&&&&@@&&@@&&&&@@@&&&&@@&&@&&&&@@@&&&&%%&%(,,,,,,,,,,,,,,,,,,,,....        
// ******,,,,,*********/#(#&%##&%(%%%%&%#%&&&@&&@&&&&&&&&&&&&&&&&&&&&&&@&&@@@@@@@@@@@&&@&&@@@&@@@@@@@@&&@&%%/.                              
// ****,,,,,,,,********((###(%%%##%%%%&%%&&@&&&&&&%&&@&&&%&&&&%&&%&&&&&&&&@&@@@@@@@@&@&@&&@@@@@@@@@@@@@&@@%&&%(.                 ....,,,,,,,,,
// ******,,,,,,*******/%##%%#%####%##%((%&&&&&&&&&&&&&&%%%&%%%%&%&&&&&&&&&@@&&&@&@@@@@@@@&@@@@@@@@@@@@@@&@&%%(,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// ********,,,,*******/%((%#%%(#%#%%%(#(%&&&&&&&&&&&&&%%&&%##%%%&&&&&&&&@&&&&&&&&&@@@&@@@@@@@@@@@@@@@@@@&&&&%%%#,,,,,,,,,,,,,,,,,,,,,,,,,,,,*,
// ,,,,,,,,,,,,,,,,,,,,(##&%%%###%#%%((#&&&&&@&%&%&&%&%%###%%%&&&&&&&&&&&&&&&&&&&&@@&@@@@@@@@@@@@@@@@@@@@@&&%%%(/,,,,,,,,,,*******************
// ....               ./%#&%&%##%##%((##%&&&&&&%#%%&%%%##%%%%&%%%%&&&&&&&&&&&&&&&&@@@@@@@@@@@@@@@&@@@@@@@@&%&&%#(*,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//             .......,/%##&%#(%%(##%/(#&&&%&%%(#%%##(##%(#%%#%%%%&&&&&&&&&&&&&@@@@&&@@@&@@@&@@@@&&@@@@@@@#%%%%%#/,,,,,,,,,,,,,,,,,,,,,,,,,,**
// ....................(%%#(%##((#/##%%%%%%#/%###%###(####%#%%%%&&%&&&&&&&&&&@@&&&@@&&&&&&&@@&&&&@@@@@##%%%%#(*,,,,,,*********************
// ..................../#%%#((#(#(##((#%##%##(#((##########%#%%%%%&&&&&&&&&&&&@&&&&&&&&&&&&&&&&&@@@&%#####%%%##(/,,*************************
// ,,,,,,,,,,,,,,,,,,,,,###(((%/((#%(#%%%##(%%#######((#(###%#(#(#%&&&&&&&&&&&&&&&&&&&&&&&%&&&&&&&((((#####%(#%#/,,*************************
// ,,,,,,,,,,,,,,,.....,%((/((#/(((((%##%#(%%%%##########%((((((#%&&%%%%%%######%%&&&%%%%&&%%%#((((((((((#####%#%#/,****************,,,,,,,,,,
// ...................../(///##((/((####(#(#%####((####%#(((((##%%%%%##((((((#####(####%###((((///(((((((#####%%%#(,,,,,.............         
// .....................(#/(/##/(/#(#(#(%##(%%#(((((##%#((((((%%%%#((//******//(((((((//////////////(((#######%%%%(                           
// .....................(#///((((/(#(/###(##(((////(##((((((%&&%#((//*************/*//////////////((((((#######%%%/                           
// ....................,*(((((((#(###(###((#(//////(((((//%&&(//*****************/////////////////(((########%%%(                           
// ....................,,/((/(#((((((##((##(///////(#(((#&&%#////***********/******/*/////////////(((((((######%%%(                           
// ......................(//((#(#((((#((/##(//////////#%#(//*//**********///*//**/*////////////////((((((#####(%%%/                           
// ..                    /*(//((((((#(#(##((/////////////////***//******//*/////***//////////////////(((#####((#@%,                           
//                       ./(*(#(((/((%(###(/////*///////////*//*//*/**/**/////////*///////////////////(((((((//#@%                            
//                        ////(((((#%%###/////*******///////*//***/********//*//////////////*/////////((((#####(&@(                           
//                       ,*///(%%(####%(///////*********/**********************/*//*/////*//*///////((((#%%%&%%   ##                          
//                       *(/,*((##((#@////////*******************************//////////*////////((##%&&&&@@@@@@&&&.                         
//                       *(/((/((/#(*#*(&%(//////**/**/////*****************/////*////////////(#%&&@@@@&&&@@@@@@@&%&%%                        
//                       ,(*/*////(##(*,,(%##(//////(#%&%%%#####%%#######(##((((((/((((#%%&&%%@@@@@@@@@&&&@@@@@@@&%%%(                        
//                        /*//////((###*..*#%###(/@@@@@&&&%%&&&@@@%#@@@@@&&@@@@@@(/////(%@@@@@@@@@@@@&&&@@@@@@@#                      .*((
//                        //*///((//##%(/*.,,%#&@@@@@@&&%%%%%@@@@%%@@@@@@@@@@@@@&%###%%&&@%&@@@@@@@@@&&@@@@@@@@%##                    ./(##&
//                        ,/*///((//(###//*,*,@&%&&@@@@@&&%%%%%%&@@@@@@@@@@%&@@@@@@#/*///#%@%@@@@@@@@@@&&@@@@@@@&((.              .*/**/(#%#%@
//                         /////((///(##(/****@/&&%&&@@@@&&%%%%%%&@@@@@@@@@%&@@@@@@#/*///(&@&&@@@@@@@&&&@@@@@@@&%/(              ,/((####%%%&@
//                          ////(#/*/((#(/*****//&%%%%&&@&&&&&&%%&&@@@@@@@@&&@@@@@&(*///((%&@@@@@&&&&&&@@@@@@@&&/(             .*(#%%&&&&&&&&@
//                           ////*/(*//((//****//%&%%#%%%&&&&&@&&&@@@@@@@@@@@@@&&&(//*//((#%%&&&&&&&&&&@@@@@&&&&*             ,/#%%&&&&@@&&&&@
//                            ,///***,(////******/%%%%#####%%%%&&&&&&@&&&&&&&&&&&(///**//(#%#&&&&&&&&&&&&&&&&#*   .,***,.,*/#%&&&&&&@@@@@@@@
//                              */***,/////*******/##%%%######%%%%%%&&&&&&&&&&&%(////////((#%%%#&&&&&&&&&#####/,(%%%%%#(///#%&&&&@@@@@@@@@@@
//                               *****//////********/###%%%#######%%%%%%%%&&(////////*/(((%%%#(((((((((#######/#%&&&&&%#%%%&&&&&@@@@@@@@@@@@
//                                **,***,/////*/*******//(%###%%%%%%%%%%#////////(/////*((##%##((((((((#######/(%&&%%%&&%%%&&&@@@@@@@@@@@@@@
//                                 .***,**//***/***********//*//**/******//////////////////(((#%#((((((((########((###(#%&&%%&&@@@@@@@@@@@@@@@
//                                     ,,*/*///**********/**//**/*******/////(////////////((/(#%%#(((((((######(&&%((/(#%&@%%&@@@@@@@@@@@@@@@@
//                                     .,***////************//*********////////////(/////////((#%#(((/((((#####%&&&&&&@@@@@&%&@@@@@@@@@@@@@@@@
//                                      ,**,**///***/****/***/*******////***///////////*****//(##(((////((####/&&&@@@@@@@@@@%&@@@@@@@@@@@@@@@@
//                                      .,*,*/**//******************/*//******/////////*//////(#(####((/((####%&&@@@@@@@@@@@&@@@@@@@@@@@@@@@@@
//                                       ,*******//******************/******////(/((/((///((#%%##(%####((((###&&&@@@@@@@@@@@&@@@@@@@@@@@@@@@@@
//            ....                        *************/*********/***///////////((((((((/((#%%%%####(####(###&&@@@@@@@@@@@@@&@@@@@@@@@@@@@@@@@
// ##(/,*/*,,%#####((/,.                .*********/***/***/******/*////////(//(/((//(((((/((#####(#######(#(%&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @&%&((%%#&&%##&&&&%##/.       .*/(#%##****//***/**///******/////////(////(////*//(((///((#((######((#%%&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@&&@&&%#%&&&&&%%&@@&&&&%#(*.   ///#%%%%#,***/*/*/*/***//****///////////////////(//////(#%%%%#########%#&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// &@@&@@@&&%&@@&&&%&@@@@@&&&&%#(*(%#(#%%%%%#**/*///////********///((((/////(#(((((((((##((##########((#&&%&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@&@@@@@&@@@&&&&@@@@@@@@@@&&%#((##%&&&&%***///((/(//***/*///(///////////////////(//((((((((((###(%%%@&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// %@@@@@@@@@@@@@@@&&&@@@@@@@@@@@@@&%(#%&&&&***///**//(/*//((/(/(/#//*//*//////(/(((/(((((((((((##%%%&@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// &&@@@&@@@@@@@@@@@&&@@@@@@@@@@@@@@&&%(&@&&&&///*/**/*/((///(((////////*/(////////(((((#(((((#(((##%%&@@@@&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// &&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%&@@@&&(((///*/*(((/(((((((/(((((/////////////(//(((((#(###%%@@@@@@&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// &@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%@@@@#(/////**/((####(/((((/(//////////////(/((((/(/(#%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@(((/////**//((####(((//(////////////(///(((((##&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@%#(////////*////##((/*////*//*////(/////((/((#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&@@@@@%((////(/////(((/(/(///**/////////((//####&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&(///////(///((#(((/(/(/////((((#(((((%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(//**///////////(/////////(//(%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@