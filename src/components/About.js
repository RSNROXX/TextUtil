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
                        Analyse your Text
                    </button>
                </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style = {{backgroundColor:props.mode === 'dark' ? '#323643' : 'white', color:props.mode === 'dark' ? 'white' : '#323643'}}>
                        <div className="accordion-body">
                            <strong>TextUtils</strong> gives you a way to analyse your text quickly and efficiently. Be it word count, character count or converting the content to Lowercase to Uppercase and vice cerse, removing extra spaces and copy the content
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style = {{backgroundColor:props.mode === 'dark' ? '#323643' : 'white', color:props.mode === 'dark' ? 'white' : '#323643'}}> Free to Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style = {{backgroundColor:props.mode === 'dark' ? '#323643' : 'white', color:props.mode === 'dark' ? 'white' : '#323643'}}>
                        <div className="accordion-body">
                            <strong>TestUtils</strong>is a free character counter tool that provides instant character count and word count statistics for a given tex. TextUtils reports the number of the words nad the characters. Thus it is suitable for writing text with word/character limit. 
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style = {{backgroundColor:props.mode === 'dark' ? '#323643' : 'white', color:props.mode === 'dark' ? 'white' : '#323643'}}>Browser Compatability
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style = {{backgroundColor:props.mode === 'dark' ? '#323643' : 'white', color:props.mode === 'dark' ? 'white' : '#323643'}}>
                    <div className="accordion-body">
                        <strong>TextUtils</strong>word couter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera, Brave, etc. this software suits to count character in FaceBook, blog, books, excel doc, PDF doc, essays, etc.
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}