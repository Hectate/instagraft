var data = {
    message: 'Hello Vue.js!',
    update: '000',
    npcName: 'Skittermander',
    npcCR: '1/3',
    npcXP: 135,
    npcType: 'humanoid',
    npcSubtype: 'skittermander',
    npcAlignment: 'N',
    npcSize: 'Dimunitive',
    npcRace: 'race',
    npcClass: 'class',
    npcInitiative: 3,
    npcSenses: 'low light vision',
    npcPerception: 7,
    npcHP: 6,
    npcEAC: 10,
    npcKAC: 11,
    npcFort: 0,
    npcRef: 4,
    npcWill: 0,
    npcSpeed: 30,
    npcClimb: 20,
    npcMelee: 'Bite +2 (1d4-2 P plus attach)',
    npcSpace: '1 ft.',
    npcReach: '0 ft. (5 ft. with bite)',
    npcStr: -2,
    npcDex: 3,
    npcCon: 0,
    npcInt: -2,
    npcWis: 1,
    npcCha: 0,
    npcSkills:"todo as an array?",
    npcEnv: "any (Vesk-3)",
    npcOrg: "solitary or nest (5-24)",
    npcSpecials: "as block text?"
}
var app = new Vue({
  el: '#app',
  data: data
})

setTimeout(function(){app.npcName = 'Skittermander Whelp'}, 1000);