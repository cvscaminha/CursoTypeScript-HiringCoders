interface Usuario {
  nome: string;
  email: string;
  address?: string;
}

function getUser(): Usuario {
  return {
    nome: "Cris",
    email: "cvscaminha@hotmail.com",
  };
}

function setUser(Usuario: Usuario) {
  // ....
}
