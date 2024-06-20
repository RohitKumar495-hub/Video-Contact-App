
//  Start Sign up Coding 

var signup_frm=document.getElementById("signup_form");

signup_frm.onsubmit=function ()
{
    var user = btoa(document.getElementById("username").value);
    var email= btoa(document.getElementById("email").value);
    var mobile= btoa(document.getElementById("mobile").value);
    var password= btoa(document.getElementById("password").value);
    

    var user_object_data = {username:user,email:email,phone:mobile,password:password};
    var user_text_data = JSON.stringify(user_object_data);
    
    if(user != "" && email != "" && mobile != "" && password != "")
        {
            localStorage.setItem(email,user_text_data);
            var signup_btn = document.getElementById("signup_btn");
            signup_btn.style.background = "#14b129";
            signup_btn.innerHTML = "<i class='fa-solid fa-circle-check'></i> Sign Up Successful !";
            setTimeout(function () {
                    signup_btn.style.background ="linear-gradient(to right, #E100FF, #7F00FF)";
                    signup_btn.innerHTML = "Sign Up";
                    signup_frm.reset();
            } , 3000);
            return false;
        }
}

// End sing up coding


// Start email validation coding 


var email_input=document.getElementById("email");
email_input.onchange=function ()
{
    var email= btoa(document.getElementById("email").value);
    var warning=document.getElementById("email_notice");
    var signup_btn = document.getElementById("signup_btn");
    if(localStorage.getItem(email) != null)
            {
                warning.style.display = "block";
                email_input.style.borderBottomColor = "red";
                signup_btn.disabled = true;
                signup_btn.style.background = "#ccc";


                email_input.onclick = function ()
                    {
                        email_input.value = "";
                        email_input.style.borderBottomColor = "#ccc";
                        warning.style.display = "none";
                        signup_btn.disabled = false;
                        signup_btn.style.background ="linear-gradient(to right, #E100FF, #7F00FF)";
                    }
            }
}

// End email validation coding


// Start login coding

var login_frm = document.getElementById("login_form");
login_frm.onsubmit = function ()
{
    var email = document.getElementById("login_email");
    var password = document.getElementById("login_password");
    var login_email_warning = document.getElementById("login_email_notice");
    var login_password_warning = document.getElementById("login_password_notice");

    if(localStorage.getItem(btoa(email.value)) == null)
        {
            login_email_warning.style.display = "block";
            email.borderBottomColor = "red";

            email.onclick = function ()
                {
                    email.value = "";
                    login_email_warning.style.display = "none";
                    email.style.borderBottomColor = "#ccc";
                }
        }

    else
        {
            var text_data = localStorage.getItem(btoa(email.value));
            var object_data = JSON.parse(text_data);
            var correct_email = object_data.email;
            var correct_password = object_data.password;

            if(btoa(email.value) == correct_email)
                {
                    if(btoa(password.value) == correct_password)
                        {
                           sessionStorage.setItem("user",btoa(email.value));
                           location.replace("Profile/profile.html");
                        }
                    else
                        {
                            login_password_warning.style.display = "block";
                            password.borderBottomColor = "red";
                
                            password.onclick = function ()
                                {
                                    password.value = "";
                                    login_password_warning.style.display = "none";
                                    password.style.borderBottomColor = "#ccc";
                                }
                        }
                }
        }
    return false;
}


// End login coding


