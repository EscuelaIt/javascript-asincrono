//JS - JSON JS Object Notation REPASO
// La notacion JSON nos permite describir un objeto de forma literal, sin usar clases.

const user1 = {
  nombre: 'Mario',
  apellido: 'Romero',
  doc: 828282828,
  email:'demo@demo.com'
}

const user2 = {
  nombre: 'Hugo',
  apellido: 'Torres',
  doc: 828233333,
  email:'hugo@demo.com'
}

const usuarios = [user1, user2];

const usuariosBis = [
  {
    user: 'usuario1'
  },
  {
    user: 'usuario2'
  },
  {
    user: 'usuario3'
  },
];

console.log(usuarios, usuariosBis);
