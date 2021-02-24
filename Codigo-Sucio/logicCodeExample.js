// import / export

/* 
Código de diversas funciones que tendra a futuro la app 
Este código esta en formato no modular y tiene que ser pulido 
es simplemente una mera reconstruccíon de la futura lógica que podra usar en el
pograma para diversas partes del mismo 
Conforme la app avance se ira repartiendo en módulos y optimizando para un correcto funcionamiento
*/

// input prueba
// divide el valor de longitud entre 3,281

let example = 5;
const operation = function (feet) {
  const divide = 3.281;
  meter = feet / divide;
  console.log(`${feet} pies son igual a ${meter.toFixed(3)} metros`);
};

operation(example);
// Número entre 1 y 20 o 1 y 9 si hechizo
//prettier-ignore
const ChecksbyLevel = {

"levelPlayerOrMonster" : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
"levelSpell":[1,2,3,4,5,6,7,8,9,10],
"knowledgeDC" : [14,15,16,18,19,20,22,23,24,26,27,28,30,31,32,34,35,36,38,39,40,42,44,46,48,50],
"knowledgeSpellDC": [13,15,18,20,23,26,28,31,34,36,39],
// Devuelve una dificultad acorde al nivel 
  equalsDC: function (levelCheck){
   if(levelCheck <= -1){
     return 13;
   }if(levelCheck >= 0 && levelCheck <= 25){
      return this.knowledgeDC[levelCheck];
    }
 if(levelCheck > 25){
  return 50;
   }
  },

  equalsSpell: function (spellLevel) {
    if(spellLevel >= 0 && spellLevel <= 10){
    return this.knowledgeSpellDC[spellLevel];
  }else{
    return "Not enough mana";
  }
 }
}
// Este nivel es esta dc
console.log(ChecksbyLevel.equalsDC(17));
// Este conjuro es esta dc
console.log(ChecksbyLevel.equalsSpell(10));
