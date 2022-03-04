//const fs = require('fs/promises');
//let text = fs.readFileSync("Pokedex.txt", "utf-8");
//let Pokemon = text.split("\n")

let pokedex = ['Bulbizarre',
    'Herbizarre',
    'Florizarre',
    'Salameche',
    'Reptincel',
    'Dracaufeu',
    'Carapuce',
    'Carabaffe',
    'Tortank',
    'Chenipan',
    'Chrysacier',
    'Papilusion',
    'Aspicot',
    'Coconfort',
    'Dardargnan',
    'Roucool',
    'Roucoups',
    'Roucarnage',
    'Rattata',
    'Rattatac',
    'Piafabec',
    'Rapasdepic',
    'Abo',
    'Arbok',
    'Pikachu',
    'Raichu',
    'Sabelette',
    'Sablaireau',
    'Nidoran femelle',
    'Nidorina',
    'Nidoqueen',
    'Nidoran mâle',
    'Nidorino',
    'Nidoking',
    'Mélofée',
    'Mélodelfe',
    'Goupix',
    'Feunard',
    'Rondoudou',
    'Grodoudou',
    'Nosferapti',
    'Nosferalto',
    'Mystherbe',
    'Ortide',
    'Rafflesia',
    'Paras',
    'Parasect',
    'Mimitoss',
    'Aéromite',
    'Taupiqueur',
    'Triopikeur',
    'Miaouss',
    'Persian',
    'Psykokwak',
    'Akwakwak',
    'Férosinge',
    'Colossinge',
    'Caninos',
    'Arcanin',
    'Ptitard',
    'Têtarte',
    'Tartard',
    'Abra',
    'Kadabra',
    'Alakazam',
    'Machoc',
    'Machopeur',
    'Mackogneur',
    'Chétiflor',
    'Boustiflor',
    'Empiflor',
    'Tentacool',
    'Tentacruel',
    'Racaillou',
    'Gravalanch',
    'Grolem',
    'Ponyta',
    'Galopa',
    'Ramoloss',
    'Flagadoss',
    'Magnéti',
    'Magnéton',
    'Canarticho',
    'Doduo',
    'Dodrio',
    'Otaria',
    'Lamantine',
    'Tadmorv',
    'Grotadmorv',
    'Kokiyas',
    'Crustabri',
    'Fantominus',
    'Spectrum',
    'Ectoplasma',
    'Onix',
    'Soporifik',
    'Hypnomade',
    'Krabby',
    'Krabboss',
    'Voltorbe',
    'Electrode',
    'Noeunoeuf',
    'Noadkoko',
    'Osselait',
    'Ossatueur',
    'Kicklee',
    'Tygnon',
    'Excelangue',
    'Smogo',
    'Smogogo',
    'Rhinocorne',
    'Rhinoféros',
    'Leveinard',
    'Saquedeneu',
    'Kangourex',
    'Hypotrempe',
    'Hypocéan',
    'Possirène',
    'Poissoroy',
    'Stari',
    'Staross',
    'M. mime',
    'Insécateur',
    'Lippoutou',
    'Elektek',
    'Magmar',
    'Scarabrute',
    'Tauros',
    'Magicarpe',
    'Léviator',
    'Lokhlass',
    'Métamorph',
    'Evoli',
    'Aquali',
    'Voltali',
    'Pyroli',
    'Porygon',
    'Amonita',
    'Amonistar',
    'Kabuto',
    'Kabutops',
    'Ptéra',
    'Ronflex',
    'Artikodin',
    'Electhor',
    'Sulfura',
    'Minidraco',
    'Draco',
    'Dracolosse',
    'Mewtwo',
    'Mew'];

let list_pokemon_found = [];

let pokemon_found = 0;

let sec;
let min;
let t;

let input_pokemon = document.getElementById('pokemon_input');

// Adding the entire table to the body tag
function createTable(){
    
    document.getElementsByTagName('tbody')[0].remove();

    let tbody = document.createElement('tbody');

    t = document.getElementById('table');
    console.log(t);
    t.appendChild(tbody);

    for (i=0; i<(pokedex.length/6); i++){
        let row_i = document.createElement('tr');
        for (n=0; n<6; n++){
            let row_i1_data_n = document.createElement('td');
            let row_i2_data_n = document.createElement('td');

            if ((i*6) + n + 1 <= pokedex.length){
                if ((i*6) + n + 1 > 99){
                    numero = ((i*6) + n + 1).toString();
                }
                else if((i*6) + n + 1 > 9){
                    numero = '0' + ((i*6) + n + 1).toString();
                }
                else{
                    numero = '00' + ((i*6) + n + 1).toString();
                }
                row_i1_data_n.innerHTML = numero;
                row_i2_data_n.innerHTML = '';
                row_i.appendChild(row_i1_data_n);
                row_i.appendChild(row_i2_data_n);
            }

        }
        tbody.appendChild(row_i);
    }
}

createTable();

function _start(){
    input_pokemon.disabled = false;
    createTable();
    sec = 00;
    min = 15;
    timer();
}

function _stop(){
    if (pokemon_found == 151){
        alert("Félicitation vous avez complété le pokédex !");
    }
    else{
        alert("Dommage gros looser rententes une prochaine fois :)"); 
        const cells = document.getElementsByTagName('td');
        let i = 0;
        for(let cell of cells){
            i++;
            let contents = cell.innerHTML;
            if(contents == ''){
                cell.innerHTML = pokedex[(i/2)-1];
                cell.style.color = '#1148BB';
            }

        }  
    }
    input_pokemon.disabled = true;
    clearTimeout(t);  
}

function incrementRatio(){
    pokemon_found += 1;
    let ratio = document.getElementById("pokemon_ratio");
    ratio.innerHTML = pokemon_found + "/151";

    if (pokemon_found == pokedex.length){
        _stop();
    }
}

function normalize(string){
    string = string.toLowerCase();
    string = string[0].toUpperCase() + string.slice(1);
    return string;
}

function CheckAnswer(){
    input_value = input_pokemon.value;

    if (pokedex.includes(normalize(input_value)) && !(list_pokemon_found.includes(input_value))){

        incrementRatio();

        //Affichage du pokémon trouvé dans le tableau
        indice = pokedex.indexOf(normalize(input_value));
        document.getElementsByTagName('td')[(indice*2)+1].style.animation = "goodAnswer 1.5s";

        document.getElementsByTagName('td')[(indice*2)+1].innerHTML = pokedex[indice];


        // Liste des pokémons déjà trouvés pour éviter les doublons
        list_pokemon_found.push(normalize(input_value));

        //Remise à zéro de l'input quand un pokémon est trouvé
        input_pokemon.value = "";
    }
    else{
        console.log("réponse incorrect");
        input_pokemon.style.animation = "headshake 100ms 3";
    }
}



function tick(){
    sec--;
    if (sec < 0){
        sec = 59;
        min--;
    }
}

function timer(){
    t = setTimeout(chronometre, 1000);
}

function chronometre(){
    tick();
    let chrono = document.getElementById('chronometre');
    chrono.innerHTML = (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
    if (min == 0 && sec == 0){
        _stop();
    }
    
}

document.getElementById('menu_start_button').addEventListener('click', _start);
document.getElementById('menu_stop_button').addEventListener('click', _stop);