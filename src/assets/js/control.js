window.onload = function () {
    // var btn = document.getElementById("btn");
    // btn.onclick = function(){
    //     // var user = document.getElementById("user-name"); // get name from user input
    //     // alert(user.value); //alert massege show code 
    //     //localStorage.setItem("mydata",user.value); // set data on localstrorage.
    //     var result = localStorage.getItem("mydata"); //getdata from localStorage
    //     alert(result);
    // }


    // display button according to password keyword if password key is available on your localStorage memory then you can access password otherwise set password // 

    if (localStorage.getItem("password") == null) {
        document.querySelector("#set-btn").style.display = "block";
        document.querySelector("#access-btn").style.display = "none";
    }
    else {
        document.querySelector("#set-btn").style.display = "none";
        document.querySelector("#access-btn").style.display = "block";
    }

    //password save on local storage//
    var set_btn = document.querySelector("#set-btn");
    set_btn.onclick = function () {
        var user_input = document.querySelector("#user-input").value;
        if (user_input == "") {
            document.querySelector("#password-empty-notice").style.display = "block";
            // alert("Your Password is Empty !");
        }
        else {
            document.querySelector("#password-empty-notice").style.display = "none";
            // alert("required password successfully Entered ...");
            localStorage.setItem("password", btoa(user_input));
        }
        window.location = location.href; //for window loading
    }


    // login code //
    var access_btn = document.querySelector("#access-btn");
    access_btn.onclick = function () {
        var real_pass = localStorage.getItem("password");
        var user_pass = btoa(document.querySelector("#user-input").value);
        if (real_pass == user_pass) {
            document.querySelector("#password-wrong").style.display = "none";
            document.querySelector("#container").style.display = "none";
            document.querySelector("#app-page").style.display = "block";

        }
        else {
            document.querySelector("#password-wrong").style.display = "block";
        }
    }

    //show register with add button form//
    var add_btn = document.querySelector("#add-btn");
    add_btn.onclick = function () {
        document.querySelector("#contact-form").style.display = " block";
        document.querySelector("#save-btn").style.display = " block";
        document.querySelector("#add-btn").style.display = "none";
    
    }

    //store contact in localStorage //
    var save_btn = document.querySelector("#save-btn");
    save_btn.onclick = function () {
        debugger
        var contact_name = document.querySelector("#contact-name").value;
        var contact_phone = document.querySelector("#contact-phone").value;
        var contact_address = document.querySelector("#contact-address").value;
        var contact_email = document.querySelector("#contact-email").value;
        var contact_dob = document.querySelector("#contact-dob").value;

        if (localStorage.getItem("contact") == null) {
            debugger
            var object =
                [{
                    name: contact_name,
                    phone: contact_phone,
                    address: contact_address,
                    email: contact_email,
                    DOB: contact_dob
                }];
            var data = JSON.stringify(object);
            console.log(data)
            localStorage.setItem("contact", data);

        }
        else {
            debugger
            var stored_data = localStorage.getItem("contact");
            var data = JSON.parse(stored_data);
            var object = {
                name: contact_name,
                phone: contact_phone,
                address: contact_address,
                email: contact_email,
                DOB: contact_dob
            };
            data.push(object);
            var store = JSON.stringify(data);
            console.log(store);
            localStorage.setItem("contact", store)
        }
        alert("registration successfully");
        document.querySelector("#save-btn").style.display = " none";
        document.querySelector("#add-btn").style.display = "block";
        document.querySelector("#contact-form").style.display = "none";
        
        // add data on  currunt list//
        var ion_item = document.createElement("ion-item");
        document.querySelector("#app-page").append(ion_item);
        var ion_button = document.createElement("ion-button");
        ion_button.slot = "end";
        ion_button.color = "primary";
        ion_button.style.width = "30px";
        ion_button.style.height = "30px";
        ion_button.shape = "round";
        ion_button.href = "tel:" + contact_phone;
        ion_item.append(ion_button);

        var ion_icon = document.createElement("ion-icon");
        ion_icon.name = "call";
        ion_button.append(ion_icon);

        var ion_label = document.createElement("ion-label");
        ion_item.append(ion_label);

        var h3 = document.createElement("h3");
        h3.innerHTML = contact_name;
        ion_label.append(h3);

        var P = document.createElement("p");
        P.innerHTML = contact_phone;
        ion_label.append(P);

    }




    //show contact//
    var all_contact = localStorage.getItem("contact");
    var data = JSON.parse(all_contact);
    console.log(data);

    for (i = 0; i < data.length; i++) {
        var name = data[i].name;
        var number = data[i].phone;
        // var Address = data[i].address;
        // var Email  = data[i].email;
        // var dob = data[i].DOB;
        var ion_item = document.createElement("ion-item");
        document.querySelector("#app-page").append(ion_item);

        var ion_button = document.createElement("ion-button");
        ion_button.slot = "end";
        ion_button.color = "primary";
        ion_button.style.width = "30px";
        ion_button.style.height = "30px";
        ion_button.shape = "round";
        ion_button.href = "tel:" + number;
        ion_item.append(ion_button);

        var ion_icon = document.createElement("ion-icon");
        ion_icon.name = "call";
        ion_button.append(ion_icon);

        var ion_label = document.createElement("ion-label");
        ion_item.append(ion_label);

        var h3 = document.createElement("h3");
        h3.innerHTML = name;
        ion_label.append(h3);

        var P = document.createElement("p");
        P.innerHTML = number;
        ion_label.append(P);
    }

//for back btton//
    document.addEventListener("backbutton", function () {
        navigator.app.exitApp();
    });




    //for reset form //

    var reset_btn = document.querySelector("#reset-btn");
    reset_btn.onclick() = function()
    {
        document.querySelector("#reset-btn").style.display = app-page.reset();

      }
      
}