
function cadastrar(){
    let cadastrar = document.querySelector('.inscrevase')
    if(cadastrar.classList.contains('openCadastro')){
        cadastrar.classList.remove('openCadastro')
        cadastrar.classList.contains('openCadastroRemover')
        cadastrar.classList.add('openCadastroRemover')
        
    }else{
        cadastrar.classList.add('openCadastro')
        cadastrar.classList.remove('openCadastroRemover') 
    }
}
function pular(){
    let pular = document.querySelector('.container-pular')
    if(pular.classList.contains('confirmeDisplay')){
        pular.classList.remove('confirmeDisplay')
    }else{
        pular.classList.add('confirmeDisplay')
    }
}
function esqueceuSenha(){
    let esqueceuSenha = document.querySelector('.esqueceuAsenha')
    if(esqueceuSenha.classList.contains('openEsqueceuSenha')){
        
    }else{
        esqueceuSenha.classList.add('openEsqueceuSenha')
    }
}
function voltarinicio(){
    let voltarinicio = document.querySelector('.esqueceuAsenha')
    if(voltarinicio.classList.remove('openEsqueceuSenha')){
        voltarinicio.classList.remove('openEsqueceuSenha')
    }else{
        
    }
}
function login(){
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    let valorS = senha.value
    let valorE = email.value
    if(valorE == ''){
        alert('Voçé precisa fazer login! Ou continuar, clicando  no boão de pular!')
    }
    if(valorE == 'afonso.silva.as73@gmail.com'){
        
    }
    if(valorS == '#afonso123'){
        
    }
}


