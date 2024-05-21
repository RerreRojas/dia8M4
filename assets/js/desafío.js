const radio = [
    {
      Hora: "11:00",
      Especialista: "IGNACIO SCHULZ",
      Paciente: "FRANCISCA ROJAS",
      Rut: "9878782-1",
      Prevision: "FONASA",
    },
    {
      Hora: "11:30",
      Especialista: "FEDERICO SUBERCASEAUX",
      Paciente: "PAMELA ESTRADA",
      Rut: "15345241-3",
      Prevision: "ISAPRE",
    },
    {
      Hora: "15:00",
      Especialista: "FERNANDO WURTHZ",
      Paciente: "ARMANDO LUNA",
      Rut: "16445345-9",
      Prevision: "ISAPRE",
    },
    {
      Hora: "15:30",
      Especialista: "ANA MARIA GODOY",
      Paciente: "MANUEL GODOY",
      Rut: "17666419-0",
      Prevision: "FONASA",
    },
    {
      Hora: "16:00",
      Especialista: "PATRICIA SUAZO",
      Paciente: "RAMON ULLOA",
      Rut: "14989389-K",
      Prevision: "FONASA",
    },
  ];
  let resu = document.getElementById("resultado1")
      
  resu.innerHTML =`Primer paciente: ${radio[0].Paciente}  - ${radio[0].Prevision} <br>
  Último paciente: ${radio[radio.length-1].Paciente}  - ${radio[radio.length-1].Prevision}`;
  
  const trauma = [
    {
      Hora: "08:00",
      Especialista: "MARIA PAZ ALTUZARRA",
      Paciente: "PAULA SANCHEZ",
      Rut: "15554774-5",
      Prevision: "FONASA",
    },
    {
      Hora: "10:00",
      Especialista: "RAUL ARAYA",
      Paciente: "ANGÉLICA NAVAS",
      Rut: "15444147-9",
      Prevision: "ISAPRE",
    },
    {
      Hora: "10:30",
      Especialista: "MARIA ARRIAGADA",
      Paciente: "ANA KLAPP",
      Rut: "17879423-9",
      Prevision: "ISAPRE",
    },
    {
      Hora: "11:00",
      Especialista: "ALEJANDRO BADILLA",
      Paciente: "FELIPE MARDONES",
      Rut: "1547423-6",
      Prevision: "ISAPRE",
    },
    {
      Hora: "11:30",
      Especialista: "CECILIA BUDNIK",
      Paciente: "DIEGO MARRE",
      Rut: "16554741-K",
      Prevision: "FONASA",
    },
    {
        Hora: "12:00",
        Especialista: "ARTURO CAVAGNARO",
        Paciente: "CECILIA MENDEZ",
        Rut: "9747535-8",
        Prevision: "ISAPRE",
      },
      {
        Hora: "12:30",
        Especialista: "ANDRES KANACRI",
        Paciente: "MARCIAL SUAZO",
        Rut: "11254785-5",
        Prevision: "ISAPRE",
      },
  ];

      
  document.getElementById("resultado2").innerHTML =`Primer paciente: ${trauma[0].Paciente}  - ${trauma[0].Prevision} <br>
  Último paciente: ${trauma[trauma.length-1].Paciente}  - ${trauma[trauma.length-1].Prevision}`;

  const dental = [
    {
      Hora: "08:30",
      Especialista: "ANDREA ZUÑIGA",
      Paciente: "MARCELA RETAMAL",
      Rut: "11123425-6",
      Prevision: "ISAPRE",
    },
    {
      Hora: "11:00",
      Especialista: "MARIA PIA ZAÑARTU",
      Paciente: "ANGEL MUÑOZ",
      Rut: "9878789-2",
      Prevision: "ISAPRE",
    },
    {
      Hora: "11:30",
      Especialista: "SCARLETT WITTING",
      Paciente: "MARIO KAST",
      Rut: "MARIO KAST",
      Prevision: "FONASA",
    },
    {
      Hora: "13:00",
      Especialista: "FRANCISCO VON TEUBER",
      Paciente: "KARIN FERNANDEZ",
      Rut: "18887662-K",
      Prevision: "FONASA",
    },
    {
      Hora: "13:30",
      Especialista: "EDUARDO VIÑUELA",
      Paciente: "HUGO SANCHEZ",
      Rut: "17665461-4",
      Prevision: "FONASA",
    },
    {
        Hora: "14:00",
        Especialista: "RAQUEL VILLASECA",
        Paciente: "ANA SEPULVEDA",
        Rut: "14441281-0",
        Prevision: "ISAPRE",
      },

  ];

      
  document.getElementById("resultado3").innerHTML =`Primer paciente: ${dental[0].Paciente}  - ${dental[0].Prevision} <br>
  Último paciente: ${dental[dental.length-1].Paciente}  - ${dental[dental.length-1].Prevision}`;

document.addEventListener("DOMContentLoaded", () => {
  
  const tabla = document
    .getElementById("patients-table")
    .getElementsByTagName("tbody")[0];

  radio.forEach((radio) => {
    const fila = tabla.insertRow();
    const celdaHora = fila.insertCell();
    const celdaEspecialista = fila.insertCell();
    const celdaPaciente = fila.insertCell();
    const celdaRut = fila.insertCell();
    const celdaPrevision = fila.insertCell();

    celdaHora.textContent = radio.Hora;
    celdaEspecialista.textContent = radio.Especialista;
    celdaPaciente.textContent = radio.Paciente;
    celdaRut.textContent = radio.Rut;
    celdaPrevision.textContent = radio.Prevision;
  });
});


  
