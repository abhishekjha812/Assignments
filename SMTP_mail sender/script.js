function myfunction() {
    document.getElementById("btn").disabled = true;
    document.getElementById("name").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("msg").disabled = true;
    document.getElementById("send").style.visibility = "visible";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var msg = document.getElementById("msg").value;
    var body = "<span align='center'>A Message From Website<span> <br><br>Name : " + name + "<br><br>Email : " + email + "<br><br>Phone Number : " + phone + "<br><br>Message : " + msg;


    Email.send({
        SecureToken: "c160287e-2929-489e-98ad-4df7fff83896",
        To: `jhaabhishek812t@gmail.com,${email}`,
        From: "jhaabhishek812t@gmail.com",
        Subject: "Email from " + name,
        Body: body,
        Cc: email
    }).then(
        message => {
            if (message == 'OK') {
                alert('Thank You for Connecting.');
                document.getElementById("myForm").reset();
                document.getElementById("send").style.visibility = "hidden";
                document.getElementById("btn").disabled = false;
                document.getElementById("name").disabled = false;
                document.getElementById("email").disabled = false;
                document.getElementById("phone").disabled = false;
                document.getElementById("msg").disabled = false;

            }
            else {
                console.log(message);
                alert("Sorry,Cannot send Message");
                document.getElementById("myForm").reset();
                document.getElementById("send").style.visibility = "hidden";
                document.getElementById("btn").disabled = false;
                document.getElementById("name").disabled = false;
                document.getElementById("email").disabled = false;
                document.getElementById("phone").disabled = false;
                document.getElementById("msg").disabled = false;

            }
        }
    );
}