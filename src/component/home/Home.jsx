import './Home.css';
import React from "react";
import my_img from "../../assets/images/my_img.jpg"
export const Home = () => {
  return (
    <div>
      <div class="abouT__me">
        <div class="container">
          <div class="row">
            <div class="abouT__me-header col-3">
            <img  className="w-100" src={my_img} alt="profile" />
            </div>
            
            <div class="abouT__me-info col-9 pt-5">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                excepturi, amet blanditiis exercitationem soluta illum sed
                adipisci aliquam. Porro aliquid eum pariatur quasi dolorum velit
                totam voluptatem neque expedita accusantium. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Quam ipsam pariatur, aut
                repellat, deserunt soluta vero nam quos cumque esse optio
                distinctio eos voluptatem eaque numquam magnam cupiditate,
                voluptates incidunt.
              </p>
              <button> download resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
