import React,{useState} from 'react'

export default function About() {
    const cursor ={
        cursor:"pointer"
    }
    // var toggle_value=false;
    // function onToggle(event){
    //     toggle_value=event.target.value;
    //     console.log(event.target);
    // }
function darkTogle(){
    // console.log("darktogle is clicked.")
    if(styles.color==="white"){
        setStyle({
            color:"black",
            backgroundColor:"white"
        })
        // setBtn("disable dark mode")
    }else{
        setStyle({
            color:"white",
            backgroundColor:"black"
        })
        // setBtn("enable dark mode")
    }
}
    const [styles,setStyle]=useState(
      {  color:"black",
        backgroundColor:"white"
    }
    )
    // const [btnName ,setBtn]=useState("Enable dark mode");
    // const styles ={
    //     color:"white",
    //     backgroundColor:"black"
    // }
  return (
    <>
    <div className="container">
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button " type="button" data-bs-toggle="collapse" style={styles} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About our company
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={styles} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={styles} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About our home
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={styles} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={styles} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        How to reach us
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={styles} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

<button className="btn btn-danger my-2 " >
<div class="form-check form-switch">
  <input class="form-check-input"  style={{cursor:"pointer"}} onClick={darkTogle}  type="checkbox" id="flexSwitchCheckDefault"/>
  <label class="form-check-label"  style={{cursor:"pointer"}} for="flexSwitchCheckDefault">DarkMode</label>
</div>
</button>
</div>
    </>
  )
}
