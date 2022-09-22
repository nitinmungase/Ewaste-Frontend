import React from "react";
import card2 from "../../images/Blog.jpg";
import card3 from "../../images/card3.webp"

function Blog(){
    return(
      <body  style={{paddingTop: 94 }} > 
      <div className="alert alert-primary" role="alert" >
        <div style={{height:"50px"}}></div>
        <h1>Blogging</h1>

        <div class="row row-cols-1 row-cols-md-3 g-3">
        <div class="col">
    <div class="card">
      <img src={card3} className="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={card2} className="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={card3} className="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  </div>
            
        </div>
        </body>
    )
}

export default Blog;