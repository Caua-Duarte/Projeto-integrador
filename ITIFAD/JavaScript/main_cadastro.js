// Variaveis Checkbox
let aceito = document.querySelector('#agreement')

// Variaveis do campo email
let email = document.querySelector('#email')
let labelEmail = document.querySelector('#label-email')
let validaEmail = false

// Variaveis do campo nome
let nome = document.querySelector('#name')
let labelNome = document.querySelector('#label-name')
let validaNome = false

// Variaveis do campo sobrenome
let sobrenome = document.querySelector('#lastname')
let labelSobrenome = document.querySelector('#label-lastName')
let validaSobrenome = false

// Variaveis do campo senha
let senha = document.querySelector('#password')
let labelSenha = document.querySelector('#label-password')
let validaSenha = false

// Variaveis do campo confirma;áo de senha
let confirmacao = document.querySelector('#passconfirmation')
let labelConfirmacao = document.querySelector('#label-passconfirmation')
let validaConfirmacao = false

// Validação do campo email
email.addEventListener('keyup', () =>{

    if(email.value.length <= 14){

        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'E-mail *Minimo 4 caracteres'
        validaEmail = false

    }else{

        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'E-mail'
        validaEmail = true

    }

}
)

// Validação do campo nome
nome.addEventListener('keyup', () =>{

    if(nome.value.length <= 3){

        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Minimo 4 caracteres'
        validaNome = false

    }else{

        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        validaNome = true

    }

}
)

// Validação do campo sobrenome
sobrenome.addEventListener('keyup', () =>{

    if(sobrenome.value.length <= 3){

        labelSobrenome.setAttribute('style', 'color: red')
        labelSobrenome.innerHTML = 'Sobrenome *Minimo 4 caracteres'
        validaSobrenome = false

    }else{

        labelSobrenome.setAttribute('style', 'color: green')
        labelSobrenome.innerHTML = 'Sobrenome'
        validaSobrenome = true

    }

}
)

// Validação do campo senha
senha.addEventListener('keyup', () =>{

    if(senha.value.length <= 5){

        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Minimo 6 caracteres'
        validaSenha = false

    }else{

        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        validaSenha = true

    }

}
)

// Validação do campo confirmação de senha
confirmacao.addEventListener('keyup', () =>{

    if(confirmacao.value.length <= 5){

        labelConfirmacao.setAttribute('style', 'color: red')
        labelConfirmacao.innerHTML = '*Minimo 6 caracteres'
        validaConfirmacao = false

    }else{

        labelConfirmacao.setAttribute('style', 'color: green')
        labelConfirmacao.innerHTML = 'Confirme sua senha'
        validaConfirmacao = true

    }

}
)

function cadastrar(){

    if(validaNome == false || validaSobrenome == false || validaSenha == false || validaConfirmacao == false || validaEmail == false ||  aceito.checked == false){

        alert('Preencha o campo!!!')

    }else{
        if(document.getElementById('password').value == document.getElementById('passconfirmation').value){
            alert(' Dados cadastrados com sucessOOOOO! =)')
        }
        else{
            alert('Senha está errada')
        }
    }


}

// https://stackoverflow.com/questions/21727317/how-to-check-confirm-password-field-in-form-without-reloading-page/21727518
