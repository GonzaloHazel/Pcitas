console.log("Hola, que estas haciendo aqui eeehhhhh...")
const
$btnSignIn=document.querySelector('.sign-in-btn'),
$btnSignUp=document.querySelector('.sign-up-btn'),
$btnRec=document.querySelector('.recucount')
$btnRegreso=document.querySelector('.regreso'),

$signUp=document.querySelector('.sign-up'),
$signIn=document.querySelector('.sign-in'),
$signRec=document.querySelector('.sign-rec');

document.addEventListener('click',e=>{
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')

    }
});

document.addEventListener('click',e=>{
    if (e.target===$btnRec) {
        $signRec.classList.toggle('active');
        $signIn.classList.toggle('active')
    }
});

document.addEventListener('click',e=>{
    if (e.target===$btnRegreso) {
        $signRec.classList.toggle('active');
        $signIn.classList.toggle('active')
    }
});