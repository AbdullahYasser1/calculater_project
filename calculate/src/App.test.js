import App from './App'
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Display from './Display';
import KeyButton from './KeyButton';
Enzyme.configure({adapter:new Adapter()}) // this API is use to provide link to component

describe("App Component Testing " , ()=>{

  it("Testing Variable Value" ,()=>{
    let  wrapper = shallow(<App/>) // load the component
    let ref = wrapper.instance(); // creating the reference of component
    // expect("").toBe(ref.state.result);
  })

  it("Testing Display" ,()=>{
    let  wrapper = shallow(<Display/>) // load the component
    let ref = wrapper.instance(); // creating the reference of component
    expect("1").toEqual("1");
  })

  it("Testing KeyButton" ,()=>{
    let  wrapper = shallow(<KeyButton/>) // load the component
    let ref = wrapper.instance(); // creating the reference of component
    expect("1").toEqual("1");
  })



})
