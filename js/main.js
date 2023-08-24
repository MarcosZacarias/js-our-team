// |Creo una lista dei membri del Team
const membersTeam = [
  // |Inserisco nella lista _membri team_ i membri
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg",
  },

  {
    name: "Angela Caroll",
    role: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg",
  },

  {
    name: "Walter Gordon",
    role: "Office Manager",
    photo: "walter-gordon-office-manager.jpg",
  },

  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.jpg",
  },

  {
    name: "Scott Estrada",
    role: "Developer",
    photo: "scott-estrada-developer.jpg",
  },

  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg",
  },
];

// |Stampo nome, ruolo e foto di ogni membro
for (const member of membersTeam) {
  for (const key in member) {
    console.log(key + ": " + member[key]);
  }
}

// |Stampare le stesse informazioni su DOM

// *Contenitore card in DOM
const card = document.getElementById("card-container");

// *Per ogni oggetto nell'array
for (const member of membersTeam) {
  card.innerHTML += `
  <div class="col-4">
  <div class="d-flex justify-content-center">
  <div class="card mt-3" style="width: 18rem">
  <img src= ./img/${member.photo} class="card-img-top" alt="..." />
  <div class="card-body">
  <h5 class="card-title">${member.name}</h5>
  <p class="card-text">
  ${member.role}                 
  </p>
  </div>
  </div>
  </div>
  </div>
`;
}
