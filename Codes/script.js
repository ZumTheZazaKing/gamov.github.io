function proceed(){
    let userCode = document.getElementById('code').value;

    if (userCode == 'N1MU'){

        window.location.href = "N1MU/nimu.html";

    } else if(userCode == 'JOE'){

        window.location.href = "JOE/jumpscare.html";

    } else if (userCode == '093457'){

        window.location.href = "093457/secret ending.html";

    } else {

        alert('Invalid code');

    }

}