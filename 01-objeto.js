console.log("Desafio 01");
// 1- Crie um objeto chamado user com as seguintes propriedades:

// - username
// - email
// - age

// E com os seguintes métodos (ações):

// - login: com o console.log("Efetuou o login");
// - logout: com o console.log("Efetuou o logout");
let user = {
    username: 'Celso',
    email: 'celsogubeal@gmail.com',
    age: 37,
    login: function () {
        console.log("Logou!");
    },
    logout: function () {
        console.log("Deslogou!");
    }
}

// 2- Mostre uma propriedade! Agora dê um console.log apenas da propriedade age

console.log(user.age);

// 3-  Adicione uma nova propriedade! Adicione uma nova propriedade chamada phone e depois dê um console.log(user); para ver se a propriedade realmente foi adicionada.

user.lastUpdate = "21/12/2022";
console.log(user);
// 4- Faça um update de um valor! Troque o valor do username para outro valor e depois dê um console.log(user); para ver se a propriedade realmente foi substituída.

user.username = 'Gubeal';
console.log(user.username);
// 5- Remova um valor! Remova o valor age e depois dê um *console.log(user);* para ver se a propriedade realmente foi deletada.
delete user.lastUpdate;
console.log(user);

user.login();
user.logout();