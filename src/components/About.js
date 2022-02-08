import React from 'react';

export default function About(props){

    return(
    <>
        <div className = "container mb-3" style = {{backgroundColor:props.mode === 'dark' ? '#26282e' : 'white', color:props.mode === 'dark' ? 'white' : '#26282e'}} >
            <h2><center>About Us</center></h2>
        </div>

        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style = {{backgroundColor:props.mode === 'dark' ? '#323643' : 'white', color:props.mode === 'dark' ? 'white' : '#323643'}}>
                        Accordion Item #1
                    </button>
                </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style = {{backgroundColor:props.mode === 'dark' ? '#323643' : 'white', color:props.mode === 'dark' ? 'white' : '#323643'}}>
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style = {{backgroundColor:props.mode === 'dark' ? '#323643' : 'white', color:props.mode === 'dark' ? 'white' : '#323643'}}> Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style = {{backgroundColor:props.mode === 'dark' ? '#323643' : 'white', color:props.mode === 'dark' ? 'white' : '#323643'}}>
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style = {{backgroundColor:props.mode === 'dark' ? '#323643' : 'white', color:props.mode === 'dark' ? 'white' : '#323643'}}>Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style = {{backgroundColor:props.mode === 'dark' ? '#323643' : 'white', color:props.mode === 'dark' ? 'white' : '#323643'}}>
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}