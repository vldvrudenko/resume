var currentPhoto = 1;

let timerId = setInterval(showImages, 3000);

function showImages() {
  var blockElement = document.getElementById("imagesWrapper");
  while (blockElement.lastElementChild) {
    blockElement.removeChild(blockElement.lastElementChild);
  }
  var photoShow = document.getElementById("imagesWrapper");
  var images = document.createElement("img");
  images.setAttribute(
    "src",
    `./images/img_main/sliderImg/${currentPhoto}.jpg`
  );
  images.classList.add("image-to-show");
  photoShow.appendChild(images);
  currentPhoto++;
  if (currentPhoto > 14) {
    currentPhoto = 1;
  }
}

function stopButton() {
  clearInterval(timerId);
}

function reloadButton() {
  timerId = setInterval(showImages, 3000);
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};


function storyArgonat() {
  var loadMores = document.getElementById("argonatsDoorStoryText");

  loadMores.classList.remove("deletes");
}

var gorlum = document.getElementById("gorlumSstory");
if (gorlum){
  gorlum.onclick = gorlumStory;
}
function gorlumStory() {
  var gorlums = document.getElementById("gorlumStory");
  gorlums.classList.remove("getting_info");
}

function MeriBlock() {
  deleteTabs();
  var treegroupsElement = document.getElementById("MeriText");
  var blockText = document.createTextNode(
    "Орки вместе с урук-хаями останавливаются на лесной окраине, где пытаются разбить лагерь. В этот момент лагерь атакуют всадники  Гондора королевства Рохан и хоббитам удаётся сбежать. Спасаясь от преследования Гришнака, Мерри и Пиппин скрываются в лесу Фангорн, где знакомятся с предводителем энтов — Древнем. Здесь же они встречают Гэндальфа, переродившегося после поединка с балрогом и ставшего Гэндальфом Белым."
  );
  treegroupsElement.appendChild(blockText);
}

function AragornBlock() {
  deleteTabs();
  var treegroupsElement = document.getElementById("AragornText");

  var block = document.createElement("span");
  var blockText = document.createTextNode(
    "Арагорн преследует урук-хаев, но находит место разгромленого лагеря орков.Они идут по следу хоббитов и встречают Гэндальфа. Он просит их спасти Рохан . Разум короля Рохана Теодена подчинён воле Сарумана, задумавшего уничтожить Рохан  Однако своевременное появление Арагорна и Гэндальфа  меняет ситуацию и вынуждает темные силы отступить. Пришедший в себя король Теоден хоронит своего сына Теодреда. В Эдорас приезжают дети и рассказывают про нападение на деревню. Он соглашается на войну против Сил Зла и ведёт свой народ к Хельмовой Пади —  Перед отъездом маг просит Арагорна быть рядом с Теоденом."
  );
  block.classList.add("three-groups-block");
  block.appendChild(blockText);
  treegroupsElement.appendChild(block);
}
AragornBlock();

function FrodoBlock() {
  deleteTabs();
  var treegroupsElement = document.getElementById("FrodoText");
  var block = document.createElement("span");
  var blockText = document.createTextNode(
    "Голлум убеждает Фродо и Сэма не идти через неприступные Чёрные Ворота на виду отряда истерлингов с Востока, который одновременно вступает в Мордор, и ведёт их в обход. По пути в Итилиэне хоббиты замечают отряд харадримов с двумя мумаками из земель Харада, но попадают в плен к Фарамиру, командиру отряда гондорцев-рейнджеров (который и разбил группу харадримов, заманив их в ловушку) и брату Боромира. "
  );
  block.classList.add("three-groups-block");
  block.appendChild(blockText);
  treegroupsElement.appendChild(block);
}

function deleteTabs() {
  document.getElementById("MeriText").innerText = "";
  document.getElementById("AragornText").innerText = "";
  document.getElementById("FrodoText").innerText = "";
  document.getElementById("Mery").classList.remove("newTabssss");
}


function stoRyOne() {
  var storyOne = document.getElementById("firstStoryText");
  storyOne.classList.remove("displays");
}
function stoRyTwo() {
  var storyTwo = document.getElementById("secoundStoryText");
  storyTwo.classList.remove("displays");
}
function stoRyThree() {
  var storyThree = document.getElementById("thirdStoryText");
  storyThree.classList.remove("displays");
}



