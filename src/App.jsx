 

function Header(){
    return(

     <header>
      <h1>I am the Title</h1>
     </header>
    )
}   
   

function Content(){
  return(
    <main>
      <section>I am section 1</section>  
      <section>I am section 2</section>
    </main>
  )
}




function App() {  
  // Why React ?
  // Composabiity--combines many components to make one component
  // Declarative--program is told what to do and does it unlike imperative where program is told what to do and how it should do it     

  // JSX--javascript XML--brought to make react declarative 
    //  turns html element to object
    
    // React component returns a single JSX (javascript objects) 
    // Fragments can be used to wrap JSX   

    // COMPONENTS----functions in react.Wrapped in self closing tag(<Component />).Writen in PascalCase.Returns only one element  
    //  footer mostly wrapped in <small></small>  tag.
  return (
    <div className="App">    
      {/rendering of Components(composabilitty) to make web page*  */}
         <Header />       
         <Content />  
    </div>
  )      
}

export default App
