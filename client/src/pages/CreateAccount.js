import React from 'react'
import image from '../assest/Group 1.png'
import imagetwo from '../assest/twitter Vector.png'
import imagethree from '../assest/Facebook Vector.png'
import imagefour from '../assest/gg_google.png'
import "../createAccount.css"

const CreateAccount = () => {
  return (
    <div id="Account-page">
    <div class="CreateAnAccountPage">
        <img class="Unnamed4Copy1" src={image} alt="Group"/>
        <div class="CreateAnAccount">Create an Account</div> 

    <form class="form-container">
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"placeholder=""required>
              </input>
        </div>
        <div class="form-group">
            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="" required>
              </input>
        </div>
        <div class="form-group">
          <label for="create password">Create Password:</label>
          <input type="create password" id="create password" name="create password" placeholder=""required>
          </input>
          </div>
          
          <div class="form-group">
            <label for="age">Your Age:</label>
            <select id="age" name="age" required>
                <option value="" disabled selected>Select your age</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value="56-65">56-65</option>
                <option value="65andover">65 and over</option>
            </select>
        </div>
        <button type="submit">Get Started</button>
    </form>

        <div class="Rectangle10"></div> 
        <div class="Rectangle11"></div>
        <div class="Rectangle12"></div>
    </div>  
       
        <div class="Or">Or</div>
        <div class="Twitter">
          <img className="twitter-image" src={imagetwo} alt="twitter logo"/>
          <span>twitter</span> 
        </div>
        <div class="Facebook">
          <img className="facebook-image" src={imagethree} alt="facebook logo"/>
          <span>facebook</span>
          </div>
        <div class="Google">
          <img className="google-image" src={imagefour} alt="google logo"/>
          <span>google</span>
          </div>
        
        
      </div>
  )
}
export default CreateAccount;