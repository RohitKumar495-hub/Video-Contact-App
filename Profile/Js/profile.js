
    if(sessionStorage.getItem("user") == null)
        {
            window.location.replace("../index.html");
        }

    else
        {

            // profile name coding start

            var user_email = sessionStorage.getItem("user");
            var json_text = localStorage.getItem(user_email);
            var obj_data = JSON.parse(json_text);
            var profile_name = document.getElementById("profile_name");
            profile_name.innerHTML = atob(obj_data.username);
            document.getElementById("profile_username").innerHTML = atob(obj_data.username);

            // profile name coding end


            //profile_picture_coding start 

            var img_url = localStorage.getItem(user_email+"image");
            var profile_picture = document.getElementById("profile_picture");
            profile_picture.style.backgroundImage = "url("+img_url+")";
            profile_picture.style.backgroundSize = "cover";
           // profile_picture.style.backgroundPosition = "center";

           // profile_picture_coding end 



           // logout coding start

            var logout = document.getElementById("logout");
            logout.onclick = function ()
            {
                sessionStorage.clear();
                var logout_text = document.getElementById("logout_text");
                logout_text.innerHTML = "Please Wait...."
                setTimeout(function()
                    {
                        window.location = "../index.html";
                    }
                ,2000)
            }

           // logout coding end

            if(localStorage.getItem(user_email+"image") != null)
                {
                    var page_cover = document.getElementById("container");
                    page_cover.style.display = "none";
                }


            // profile upload coding start


            var profile_upload = document.getElementById("profile_upload");
            profile_upload.onchange = function ()
            {
                var reader = new FileReader();
                reader.readAsDataURL(profile_upload.files[0]);
                reader.onload = function ()
                {
                    var filename = reader.result;
                    var profile_icon = document.getElementById("profile_icon");
                    var profile_pic = document.getElementById("profile_pic");
                    var next_btn = document.getElementById("next");
                    profile_pic.style.backgroundImage = "url("+filename+")";
                    profile_pic.style.backgroundSize = "cover";
                    profile_icon.style.backgroundPosition = "center";
                    profile_icon.style.display = "none";
                    next_btn.style.display = "block";

                    next_btn.onclick = function ()
                    {
                        localStorage.setItem(user_email+"image",filename);
                        var page_cover = document.getElementById("container");
                        page_cover.style.display = "none";
                        window.location = location.href;
                    }
                }
            }

            //profile upload coding end

        }
