import React from 'react';
import Navigation from './components/navigation/navigation.js';
import Logo from './components/logo/logo';
import Imangelinkform from './components/Imagelinkform/Imagelinkform';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';
import Facerecognition from './components/facerecognition/facerecognition';
import Signin from './components/signin/signin';
import Register from './components/register/register';




const partcilesoptions={
  particles:
  {
    number:{
      value:150,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}

const initialState=
  {
    input:'',
    imageUrl:'',
    box:{},
    route:'signin',
    issignedin:false,
    user:{
      id:'',
      name:'',
      Email:'',
      entries:0,
      joined:'',
     }
  }


class App extends React.Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:{},
      route:'signin',
      issignedin:false,
      user:{
        id:'',
        name:'',
        Email:'',
        entries:0,
        joined:'',
      }
    }
  }

  
  onkeypress=(event)=>{
    if(event.key==='Enter')
    {
      this.setState({imageUrl: this.state.input});
    }
  }

  loadUser=(data)=>{
    this.setState({user:
      {
        id:data.id,
        name:data.name,
        Email:data.Email,
        entries:data.entries,
        joined:data.joined, 
      }
    })
  }

  calculateface = (data) =>{
    const image=document.getElementById("face")
    var width=Number(image.width);
    var height=Number(image.height);
    return{
      leftcol:data.left_col*width,
      toprow:data.top_row*height,
      rightcol:width-(data.right_col*width),
      bottomrow:height-(data.bottom_row*height),
    }
  }

  displaybox=(data)=>{
    this.setState({box:data})
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
    if (event.target.value===''){
      this.setState({box:{}})
      this.setState({imageUrl:event.target.value})
    }
  }

  onroutechange=(data)=>{
    if(data==='signout')
    {
      this.setState(initialState)
    }
    else if (data==='home') {
      this.setState({issignedin:true})
    }
    this.setState({route:data})
  }
  increaseImageCount=()=>{
    fetch('https://fierce-shelf-73821.herokuapp.com/images',{
        method:'put',
        headers:{'Content-Type':'Application/json'},
        body:JSON.stringify({
          id:this.state.user.id,
        })
      })
      .then(response=>response.json())
      .then(count=>{
        this.setState(Object.assign(this.state.user,{entries:count}))
      })
      .catch(err=> window.alert(err));
  }
  onSubmit=(event)=>{
    if(this.state.input===""){
      window.alert('The input field cannot be blank.Please input a valid image URL');
    }
    else{
      this.setState({imageUrl: this.state.input});
      fetch('https://fierce-shelf-73821.herokuapp.com/imageUrl',{
        method:'post',
        headers:{'Content-Type':'Application/json'},
        body:JSON.stringify({
          input:this.state.input,
        })
      })
      .then(response=>response.json())
      .then(response=> {
        if(response.outputs[0].data.regions===undefined)
          window.alert('The image does not have a face');
        else{
          this.displaybox(this.calculateface(response.outputs[0].data.regions[0].region_info.bounding_box))
          this.increaseImageCount();
        }
      })
      .catch(err=> {
        window.alert('The provided Url is not a valid Url that leads to a image file')
        return
      })
    }
  }

  render(){
        if(this.state.route==='signin' || this.state.route==='signout')
        {
          return (
            <div className="App">
              <Particles className='particle'
                params={partcilesoptions} />
              <Navigation onroutechange={this.onroutechange} issignedin={this.state.issignedin}/>
              <Signin loadUser={this.loadUser} onroutechange={this.onroutechange}/>
            </div>
          );
        }
        if(this.state.route==='register')
        {
          return (
            <div className="App">
              <Particles className='particle'
                params={partcilesoptions} />
              <Navigation onroutechange={this.onroutechange} issignedin={this.state.issignedin}/>
              <Register loadUser={this.loadUser} onroutechange={this.onroutechange}/>
            </div>
          );
        }
        if(this.state.route==='home')
        {
          return (
            <div className="App">
              <Particles className='particle'
                params={partcilesoptions} />
              <Navigation onroutechange={this.onroutechange} issignedin={this.state.issignedin}/>
              <Logo />
              <Rank name={this.state.user.name} rank={this.state.user.entries}/>
              <Imangelinkform  onInputChange={this.onInputChange} onSubmit={this.onSubmit} onkeypress={this.onkeypress}/>
              <Facerecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
            </div>
          );
        }
  }
}
  

export default App;
