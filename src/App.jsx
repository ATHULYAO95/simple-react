import Header from "./components/Header"
import Profile from "./components/Profile"
import List from "./components/List"
import ClassComp1 from "./components/ClassComp1"


function App() {

  const profile3 = {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  }
  return(
  <div>
    {/* <Header/> */}
    {/* <Profile name="Beyonce"  imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    phone= "+123 456 789" email= "b@beyonce.com"
    />
    <Profile name="Jack Bauer"  imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    phone= "+123 456 789" email= "jack@nowhere.com" /> */}
     
    {/* <Profile profile={profile3}/>  */}
    {/* <List /> */}
    <ClassComp1 />
  </div>)
  
}

export default App