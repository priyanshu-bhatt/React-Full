import { name } from "./ExportImport";
import age from "./ExportImport";
import Header from "./Component/Header";
import ClassBased from "./ClassBased";
import Map from "./Component/Map";
import Array0fObject from "./Component/Array0fObject";
import Table from "./Component/Table";
import ConditionalRender from "./Component/ConditionalRender";
import AndAndRendering from "./Component/AndAndRendering";
import StateInClass from "./Component/StateInClass";
import StateInFunc from "./Component/StateInFunc";
import TextArea from "./Component/TextArea";
import Docker from "./Component/Docker";
import FormsUncrolledClass from "./Component/FormsUncrolledClass";
import UncontrolledFunctional from "./Component/UncontrolledFunctional";
import ControlledClass from "./Component/ControlledClass";
import ControlledFunctional from "./Component/ControlledFunctional";
import Counter from "./Component/Counter";
import Form from "./Component/Form";
import Button from "./Component/Button";
import MountingMethods from "./Component/MountingMethods";
import UpdatingMethod from "./Component/UpdatingMethod";
import Section from "./Component/Section";
import StyleToggle from "./Component/StyleToggle";
import ButtonWithColor from "./Component/ButtonWithColor";
import UseEffectss from "./Component/UseEffectss";
import UseReducerr from "./Component/UseReducerr";
import ApiClass from "./Component/ApiClass";
import APICLASSCALLING from "./Component/APICLASSCALLING";
import APIFUNCTIONCALL from "./Component/APIFUNCTIONCALL";
import Routing from "./Routing/Routing";
import LazyMain from "./LazyLoading/LazyMain";
import INCRE from "./Error-Boundary/INCRE";
import ErrorBoundary from "./Error-Boundary/ErrorBoundary";
import FuncBalance from "./FuncBalance";
import Balace from "./Balace";
import Main from "./QuoteApp/Main";

import Create from "./CRUD/create/Create";
import Read from "./CRUD/read/Read";
import First from "./CRUD/First";

import SearchFilter from "./EPPR/SearchFilter";
import ReactMap from "./EPPR/ReactMap";
import CompA from "./Context/CompA";
import { createContext } from "react";


import APIFunction from "./Component/APIFunction";


import Accordionnnn from "./EPPR/Accordiannnn";
import Checklist from "./EPPR/CheckList";
import DisableButton from "./EPPR/DisableButton";
import HideElement from "./EPPR/HideElement";
import DiscountedPrice from "./ExamPractical/DiscountedPrice";
import FormBuilder from "./ExamPractical/FormBuilder";

const  FirstName = createContext()
const LastName = createContext()
function App() {
  const style1= {
     border: "2px solid orange",
     backgroundColor: "blue"

}
const name = "priyanshu bhatt"
const number=[1,2,3,4,5]
const skills= [
  ["HTML","CSS"],
  ["K8S", "REACT"]
]

const student=[
  {id:1,name:"priyanhsu",marks: 100,skil:["html","CSS","JS"]},
  {id:2,name:"anhsu",marks: 90,skil:["k8s","xyz","kungfu"]},
  {id:3,name:"anan",marks: 80,skil:["lets","dance","gym"]}
]

const table=[
  ["Name","Subject","Skills"],
  ["Priyanshu","React",["HTML","CSS","JS"],
  ["Adi","K8S",["React","Docker","openshift"]]
]
]
const label="Clicked"
const call = ()=>{ console.log("Hii This is Ques 1")}
const condi = "true"
const images = [
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  'https://via.placeholder.com/400x200?text=Slide%202',
  'https://via.placeholder.com/400x200?text=Slide%203',
  'https://via.placeholder.com/400x200?text=Slide%204'
];
const items = ["map1", "map2", "map3", "map4"];

//CREATING CONTEXT

{/* <h1 style={style1}> Hello I am {name}, and My Age is {age}</h1>
      {/* <Header name={name}/>
      <ClassBased name={name} number={number}/>
      <Map skills={skills}/>
      <Array0fObject student={student}/>
      <Table table={table}/>
      <ConditionalRender cond={condi} />
      <AndAndRendering/>
      <StateInClass/>
      <StateInFunc/> */} 
      {/* <TextArea/> */}
      
      {/* <FormsUncrolledClass/>
      <UncontrolledFunctional/>
      <ControlledClass/>
      <ControlledFunctional/> */}
      {/* <StateInClass/> */}
      {/* <StateInFunc/> */}
      {/* <UncontrolledFunctional/> */}
      {/* <Button label={label} func={call}/>
      <Form/><br/><br/>
      <Counter/>
      <br/><br/> */}
      
      {/* <MountingMethods namee="priyanssss"/> */}

      {/* <UpdatingMethod name="priyanshu" /> */}
      {/* <StyleToggle/> */}
      {/* <ButtonWithColor/> */}
      {/* <UseEffectss/> */}
      {/* <UseReducerr/> */}
      {/* <APICLASSCALLING/> */}
      {/* <APIFUNCTIONCALL/> */}
      {/* <Routing/> */}
      {/* <LazyMain/> */}
      {/* <ErrorBoundary>
      <INCRE/>
      
      </ErrorBoundary> */}
      
     {/* <FuncBalance/>
     <Balace/> */}
     {/* <Main/> */}
     {/* <Validation/> */}
     {/* <First/> */}
     {/* <Imageslide images={images} /> */}
     {/* <SearchFilter/> */}
    {/* <ReactMap items={items}/>  */}
    
    {/* <LastName.Provider value={"Bhatt"}>
      <FirstName.Provider value={"Priyanshu"}>
      <CompA/>
      </FirstName.Provider>
    </LastName.Provider> */}

{/* <MainPractice/> */}
{/* <ControlledFunctional/> */}
{/* <APICLASSCALLING/> */}
      {/* <APIFunction/> */}
      {/* <HideVisibleForm/> */}
      
      {/* <Accordionnnn
        title="Accordion 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id convallis nisl, quis dictum libero. In hac habitasse platea dictumst."
      />
      <Accordionnnn
        title="Accordion 2"
        content="Praesent porttitor tortor justo, eget malesuada enim auctor at. Proin vitae lacus semper, tempor libero ac, tristique urna."
      /> */}
      {/* <Checklist/>
      <DisableButton/>
      <HideElement/> */}






  return (
    <div className="App">
      

      <DiscountedPrice /> <br/><br/>
      <FormBuilder/>
    </div>

    
  );
}

export default App
export {FirstName,LastName}

