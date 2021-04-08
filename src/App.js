
import 'remixicon/fonts/remixicon.css'
import Button from './Buttons'
function App() {



  return (
    <div className="App">
   
     <div className="grid">
     
       <div className="left-col">
         
         <p className="logo"><span>Dev</span>challenges.io</p>
         <div className="link"><p>Color</p></div>
         <div className="link"><p>Typography</p></div>
         <div className="link"><p>Spaces</p></div>
         <div className="link"><p>Buttons</p></div>
         <div className="link"><p style={{color:'#333',fontWeight:600}}>Input</p></div>
         <div className="link"><p>Grid</p></div>
       </div>
       <div className="right-col">
          <h2 style={{color:'#4F4F4F'}} className='title'>Buttons</h2>
         {/* first row */}
         <div className="row">
           <div>
             <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons/<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button bgColor='#E0E0E0' color='#3F3F3F' show='none' showend='none' name='Default'/>
           </div>
            <div> 
              <p>&:hover, &:focus</p>  
              <Button  bgColor='#AEAEAE' color='#3F3F3F' show='none' showend='none' name='Default'/>
            </div>  
          </div>
         {/* second row */}
          <div className="row">
           <div>
             <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons variant="outline"/<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button bgColor='#fff' bdcolor='#3D5AFE' color='#3D5AFE' show='none' showend='none' name='Default'/>
           </div>
            <div> 
              <p>&:hover, &:focus</p>  
              <Button  bgColor='rgba(41,98,255,0.1)' bdcolor='#3D5AFE' color='#3D5AFE' show='none' showend='none' name='Default'/>
            </div>  
          </div>
          {/* 3rd row */}
           <div className="row">
           <div>
             <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons variant=”text” /<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button bgColor='#fff' bdcolor='#fff' color='#3D5AFE' show='none' showend='none' name='Default'/>
           </div>
            <div> 
              <p>&:hover, &:focus</p>  
              <Button  bgColor='rgba(41,98,255,0.1)' bdcolor='rgba(41,98,255,0.1)' color='#3D5AFE' show='none' showend='none' name='Default'/>
            </div>  
          </div>
          {/* 4th row */}
           <div className="row">
           <div>
             <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons disableShadow” /<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button bgColor='rgba(61,90,254,1)' bdcolor='#fff' color='#FFF' show='none' showend='none' name='Default'/>
           </div> 
          </div>
            {/* 5th row */}
          <div className="row">
           <div>
             <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons disabled” /<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button bgColor='rgba(224,224,224,1)' bdcolor='#fff' color='#9E9E9E' show='none' showend='none' name='Default'/>
           </div>
            <div> 
              <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons variant=”text” disabled /<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button  bgColor='rgba(255,255,255,1)' bdcolor='rgba(225,225,255,0.1)' color='#9E9E9E' show='none' showend='none' name='Default'/>
            </div>  
          </div>
          {/* 6th row */}
           <div className="row">
           <div>
             <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons startIcon=”local_grocery_store”” /<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button bgColor='rgba(41,98,255,1)' bdcolor='#fff' color='#FFF' show='inline-block' showend='none' name='Default'/>
           </div>
            <div> 
              <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons endIcon=”local_grocery_store” /<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button  bgColor='rgba(41,98,255,1)' bdcolor='rgba(225,225,255,0.1)' color='#FFF' show='none' showend='inline-block' name='Default'/>
            </div>  
          </div>
          {/* 7th row */}
          <div className="row">
           <div>
             <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons size=”sm” /<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button bgColor='rgba(41,98,255,1)' bdcolor='#fff' color='#FFF' show='none' showend='none' name='Default'/>
           </div>
            <div> 
              <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons  size=”md” /<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button  bgColor='rgba(41,98,255,1)' bdcolor='rgba(225,225,255,0.1)' color='#FFF' show='none' showend='none' name='Default'/>
            </div>  
            <div> 
              <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons size=”lg/<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button  bgColor='rgba(41,98,255,1)' bdcolor='rgba(225,225,255,0.1)' color='#FFF' show='none' showend='none' name='Default'/>
            </div>  
          </div>
          {/* 8th row */}
          <div className="row">
           <div>
             <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons color=”default” /<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button bgColor='rgba(224, 224, 224,1)' bdcolor='#fff' color='rgba(63, 63, 63,1)'  show='none' showend='none' name='Default'/>
           </div>
            <div> 
              <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons  color=”primary” /<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button  bgColor='rgba(41,98,255,1)' bdcolor='rgba(225,225,255,0.1)' color='#FFF' show='none' showend='none' name='Default'/>
            </div>  
            <div> 
              <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons color=”secondary”/<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button  bgColor='rgba(69,90,100,1)' bdcolor='rgba(225,225,255,0.1)' color='#FFF' show='none' showend='none' name='Secondary'/>
            </div>  
            <div> 
              <p><i class="ri-arrow-left-s-line ri-xl"></i>Buttons  color=”danger”/<i class="ri-arrow-right-s-line ri-xl"></i></p>
              <Button  bgColor='rgba(211, 47, 47,1)' bdcolor='rgba(225,225,255,0.1)' color='#FFF' show='none' showend='none' name='Danger'/>
            </div>  
          </div>
          {/* 9th row */}
          <div className="row">
           <div>
             <p>&:hover, &:focus</p>
              <Button bgColor='rgba(51, 51, 51,0.2)' bdcolor='#fff' color='rgba(63, 63, 63,1)'  show='none' showend='none'  name='Default'/>
           </div>
            <div> 
              
              <Button  bgColor='rgba(0,57,203,1)' bdcolor='rgba(225,225,255,0.1)' color='#FFF' show='none' showend='none'  name='Default'/>
            </div>  
            <div> 
              
              <Button  bgColor='rgba(28,49,58,1)' bdcolor='rgba(225,225,255,0.1)' color='#FFF' show='none' showend='none'  name='Secondary'/>
            </div>  
            <div> 
              
              <Button  bgColor='rgba(154, 0, 7,1)' bdcolor='rgba(225,225,255,0.1)' color='#FFF' show='none' showend='none' name='Danger'/>
            </div>  
          </div>
          </div>            
     </div>
     <footer>
       <p>Developed by : Abdulaziz Sadi</p>
     </footer>
    </div>
  );
}

export default App;
