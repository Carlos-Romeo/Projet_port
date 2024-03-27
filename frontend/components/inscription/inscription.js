







document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); 
        const nom = document.querySelector('#nom').value;
        const prenoms = document.querySelector('#prenoms').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const job = document.querySelector('#job').value;

        const formData = {
            nom: nom,
            prenoms: prenoms,
            email: email,
            password: password,
            job: job
        };
        console.log(formData)

        fetch("http://localhost:5000/user/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(  response => {            
            if (response.ok) {
            console.log("ok");
            if (job == 'travaileur'){
                window.location.href = '../acceuil/acceuil.html';
            }else if(job == 'admin'){
                window.location.href = '../Admin/acceuilAd/admin1.html'
            }else if(job == 'visiteur'){
                window.location.href = '../home/home.html'
            }
 
        } else {
            console.error("Échec de l'authentification");
        }}   
)
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi des données au serveur:", error);
        });
    });
});
