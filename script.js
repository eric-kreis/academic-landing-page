const staff = [
  {
    imgSrc: 'assets/images/staff/getulio.jpg',
    name: 'Getúlio Américo Moreira Lopes',
    occupation: 'Reitor',
  },
  {
    imgSrc: 'assets/images/staff/labibi.jpg',
    name: 'Labibi Elias Alves da Silva',
    occupation: 'Vice-Reitora',
  },
  {
    imgSrc: 'assets/images/staff/gabriel.jpg',
    name: 'Gabriel Costa Mallab',
    occupation: 'Pró-Reitor Administrativo e Financeiro',
  },
  {
    imgSrc: 'assets/images/staff/marcia-lucia.png',
    name: 'Lúcia Maria Lopes',
    occupation: 'Pró-Reitora Acadêmica',
  },
  {
    imgSrc: 'assets/images/staff/mauricio.jpg',
    name: 'Maurício de Sousa Neves Filho',
    occupation: 'Secretário-Geral',
  },
  {
    imgSrc: 'assets/images/staff/geraldo.jpg',
    name: 'Geraldo Rabelo',
    occupation: 'Diretor Administrativo e Financeiro',
  },
  {
    imgSrc: 'assets/images/staff/carlos-alberto.png',
    name: 'Carlos Alberto da Cruz',
    occupation: 'Diretor Acadêmico',
  },
  {
    imgSrc: 'assets/images/staff/joao.jpg',
    name: 'João Herculino de Souza Lopes Filho',
    occupation: 'Diretor do Instituto CEUB de Pesquisa e Desenvolvimento - ICPD',
  },
  {
    imgSrc: 'assets/images/staff/simone.jpg',
    name: 'Simone Maria Espinosa',
    occupation: 'Diretora Institucional de Regulação e Avaliação - DIRA',
  },
];

const states = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

function toPascalCase(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function captalize(str) {
  const words = str.trim().split(' ');
  return words.reduce((acc, curr) => {
    const pascalWord = toPascalCase(curr)
    return !acc ? pascalWord : `${acc} ${pascalWord}`
  }, '');
}

function mountStaffList () {
  const createProfessionalElem = ({ imgSrc, name, occupation }) => {
    const cardElem = document.createElement('li');
    const imgElem = document.createElement('img');
    const nameElem = document.createElement('p');
    const occupationElem = document.createElement('p');

    imgElem.src = imgSrc;
    imgElem.alt = name;
    nameElem.innerText = name;
    occupationElem.innerText = occupation;

    cardElem.className = 'professional-card';
    imgElem.className = 'professional-image';
    nameElem.className = 'professional-name italic-bold';
    occupationElem.className = 'professional-occupation italic-text';

    cardElem.appendChild(imgElem);
    cardElem.appendChild(nameElem);
    cardElem.appendChild(occupationElem);

    return cardElem;
  };

  const staffList = document.getElementById('staff-list');
  staff.forEach((professional) => {
    const professionalElem = createProfessionalElem(professional);
    staffList.appendChild(professionalElem);
  });
}

function mountStateOptions () {
  const createStateOption = (state) => {
    const stateOption = document.createElement('option');

    stateOption.value = state;
    stateOption.innerText = state;

    return stateOption;
  };

  const selectState = document.getElementById('states-select');
  states.forEach((state) => {
    const stateOption = createStateOption(state);
    selectState.appendChild(stateOption);
  });
}

function sendForm() {
  const inputName = document.getElementById('info-form-name');
  const inputEmail = document.getElementById('info-form-email');
  const inputCity = document.getElementById('info-form-city');
  const selectState = document.getElementById('states-select');

  const name = inputName.value;
  const email = inputEmail.value;
  const city = inputCity.value;
  const state = selectState.value;

  if (name && email && city && state) {
    window.alert(`Muito obrigado ${captalize(name)}, sua inscrição foi concluída!`);
  } else {
    window.alert('Verifique os dados preenchidos e tente novamente');
  }
}

function main() {
  mountStaffList();
  mountStateOptions();
}

main();
