var data = {};
data.npcData = {
    npcArray:'',
    npcName: '',
    npcCR: '',
    npcXP: null,
    npcType: '',
    npcSubtype: '',
    npcAlignment: '',
    npcSize: '',
    npcRace: '',
    npcClass: '',
    npcInitiative: null,
    npcSenses: '',
    npcPerception: null,
    npcHP: null,
    npcRP: null,
    npcEAC: null,
    npcKAC: null,
    npcFort: null,
    npcRef: null,
    npcWill: null,
    npcDR:'',
    npcImmunities:'',
    npcWeaknesses:'',
    npcResistances:'',
    npcSR:'',
    npcSpeed: "",
    npcClimb: "",
    npcBurrow:"",
    npcFly:"",
    npcSwim:"",
    npcAttackHigh:'',
    npcAttackLow:'',
    npcAttacksTemp:{type:"",name:"",bonus:"",damage:""},
    npcAttacks:{melee:[],multi:[],ranged:[]},
    npcRangedDamageEnergy:"",
    npcRangedDamageKinetic:"",
    npcMeleeDamageStandard:"",
    npcMeleeDamageThreeAttacks:"",
    npcMeleeDamageFourAttacks:"",
    npcDefensiveAbilities:'',
    npcOffensiveAbilities:'',
    npcSpellLikeAbilities:'',
    npcOtherAbilities:'',
    npcAura:'',
    npcSpace: '',
    npcReach: '',
    npcAbilityScore1:0,
    npcAbilityScore2:0,
    npcAbilityScore3:0,
    npcAbilityScore1Assigned:"",
    npcAbilityScore2Assigned:"",
    npcAbilityScore3Assigned:"",
    npcSpecialsCount:0,
    npcMasterSkill:0,
    npcMasterSkillCount:0,
    npcGoodSkill:0,
    npcGoodSkillCount:0,
    npcAcro:"",
    npcAthl:"",
    npcBluf:"",
    npcComp:"",
    npcCult:"",
    npcDipl:"",
    npcDisg:"",
    npcEngi:"",
    npcInti:"",
    npcLife:"",
    npcMedi:"",
    npcMyst:"",
    npcPerc:"",
    npcPhys:"",
    npcPilo:"",
    npcProf:"",
    npcProfName:"",
    npcSens:"",
    npcSlei:"",
    npcStea:"",
    npcSurv:"",
    npcStr: 0,
    npcDex: 0,
    npcCon: 0,
    npcInt: 0,
    npcWis: 0,
    npcCha: 0,
    npcEnv: "",
    npcOrg: "",
    npcSpecials: [],
    npcSpecialsTemp:{name:"",description:""},
    races: ["Skittermander","Urog","Human"],
    classes: ["Envoy","Mechanic","Mystic","Operative","Solarian","Soldier","Technomancer"],
    types: ["Abberation","Animal","Construct","Dragon","Fey","Humanoid","Magical Beast","Monstrous Humanoid","Ooze","Outsider","Plant","Undead","Vermin"],
    subtypes: ["Aeon","Agathion","Air","Android","Angel","Aquatic","Archon","Azata","Cold","Daemon","Demon","Devil","Dwarf","Earth","Elemental","Elf","Fire","Giant","Gnome","Goblinoid","Grey","Halfling","Human","Ikeshti","Incorporeal","Inevitable","Kasatha","Lashunta","Maraquoi","Orc","Plantlike","Protean","Reptoid","Ryphorian","Sarcesian","Shapechanger","Shirren","Skittermander","Swarm","Verthani","Vesk","Water","Ysoki"],
    sizes:["Fine","Dimunitive","Tiny","Small","Medium","Large","Huge","Gargantuan","Colossal"],
    sizeChartRecs:{"height":"","weight":"","space":"","tallReach":"","longReach":""}
}

var app = new Vue({
  el: '#app',
  data: data,
  methods: {
    addAbility: function() {
        if(this.npcData.npcSpecialsTemp.name != "" && this.npcData.npcSpecialsTemp.description != "") {
            this.npcData.npcSpecials.push({name:this.npcData.npcSpecialsTemp.name,description:this.npcData.npcSpecialsTemp.description});
            this.npcData.npcSpecialsTemp.name = "";
            this.npcData.npcSpecialsTemp.description = "";
        }
    },
    editAbility: function (index) {
        this.npcData.npcSpecialsTemp = {
            name:this.npcData.npcSpecials[index].name,
            description:this.npcData.npcSpecials[index].description
        };
        this.deleteAbility(index);
    },
    deleteAbility: function (index) {
        this.npcData.npcSpecials.splice(index,1);
    },
    addAttack: function (){
        if(this.npcData.npcAttacksTemp.name != ""
            && this.npcData.npcAttacksTemp.description != ""
            && this.npcData.npcAttacksTemp.bonus != ""
            && this.npcData.npcAttacksTemp.type != "") {
            this.npcData.npcAttacks[this.npcData.npcAttacksTemp.type].push({
                name:this.npcData.npcAttacksTemp.name,
                bonus:this.npcData.npcAttacksTemp.bonus,
                damage:this.npcData.npcAttacksTemp.damage
            });
            this.npcData.npcAttacksTemp = {
                type:"",name:"",bonus:"",damage:""
            };
        }
    },
    editAttack: function (type,index) {
        this.npcData.npcAttacksTemp = {
            type:type,
            name:this.npcData.npcAttacks[type][index].name,
            bonus:this.npcData.npcAttacks[type][index].bonus,
            damage:this.npcData.npcAttacks[type][index].damage
        };
        this.deleteAttack(type,index);
    },
    deleteAttack: function (type,index) {
        this.npcData.npcAttacks[type].splice(index,1);
    },
    displayClassInList: function (array,classname) {
      if(array == "Expert") {
        switch (classname) {
          case "Envoy": return true; break;
          case "Mechanic": return true; break;
          case "Operative": return true; break;
        }
      }
      if(array == "Combatant") {
        switch (classname) {
          case "Soldier": return true; break;
          case "Solarian": return true; break;
        }
      }
      if(array == "Spellcaster") {
          switch (classname) {
            case "Mystic": return true; break;
            case "Technomancer": return true; break;
          }
      }
      return false;
    },
    updateCR: function() {
      getStats(this.npcData.npcArray, this.npcData.npcCR);
      updateAbilityScores();
    },
    updateSize: function() {
        updateSizeChart();
    },
    updateRace: function() {
      console.log("Need to update stats based on racials.");
    },
    updateClass: function() {
      console.log("Need to update stats based on classes.");
    },
    updateType: function() {
      console.log("Need to update stats based on type.");
    },
    updateSubtype: function() {
      console.log("Need to update stats based on subtype.");
    },
    showWarning: function(warning) {
        if(warning == 'abilities') {
            if(this.npcData.npcAbilityScore1Assigned == "") { return false; }
            if(this.npcData.npcAbilityScore2Assigned == "") { return false; }
            if(this.npcData.npcAbilityScore3Assigned == "") { return false; }
            if(this.npcData.npcAbilityScore1Assigned == this.npcData.npcAbilityScore2Assigned) {
                return true;
            }
            else if(this.npcData.npcAbilityScore1Assigned == this.npcData.npcAbilityScore3Assigned) {
                return true;
            }
            else if(this.npcData.npcAbilityScore2Assigned == this.npcData.npcAbilityScore3Assigned) {
                return true;
            }
            else return false;
        }
    },
    updateAbilities: function() {
        updateAbilityScores();
    }
  }
})

function updateSizeChart() {
    var list = ["height","weight","space","tallReach","longReach"];
    for(let i in list) {
        app.npcData.sizeChartRecs[list[i]] = sizeChart[app.npcData.npcSize][list[i]];
    }
}

function updateAbilityScores() {
    var list = ["Str","Dex","Con","Int","Wis","Cha"];
    for(let i in list) {
        if(app.npcData.npcAbilityScore1Assigned == list[i]) {
            app.npcData["npc"+list[i]] = app.npcData.npcAbilityScore1;
        }
        else if(app.npcData.npcAbilityScore2Assigned == list[i]) {
            app.npcData["npc"+list[i]] = app.npcData.npcAbilityScore2;
        }
        else if(app.npcData.npcAbilityScore3Assigned == list[i]) {
            app.npcData["npc"+list[i]] = app.npcData.npcAbilityScore3;
        }
        else { app.npcData["npc"+list[i]] = 0; }
    }
    app.npcData.npcInitiative = app.npcData.npcDex;
}

function getStats (array,cr) {
  //console.log("setting CR to " + array + " " + cr);
  for(let i in app.npcData) {
    if(arrays[array][cr][i] != undefined) {
      app.npcData[i] = arrays[array][cr][i];
    }
    app.npcData.npcXP = xp[cr].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //XP from CR
    app.npcData.npcPerception = arrays[array][cr].npcGoodSkill; //Perception is a "Good" skill by default
  }
}

var sizeChart = {
    "Fine":{
        "height":"6 in. or less",
        "weight":"1/8 lb. or less",
        "space":"1/2 ft.",
        "tallReach":"0 ft.",
        "longReach":"0 ft."
    },
    "Dimunitive":{
        "height":"6 in.–1 ft.",
        "weight":"1/8–1 lb.",
        "space":"1 ft.",
        "tallReach":"0 ft.",
        "longReach":"0 ft."
    },
    "Tiny":{
        "height":"1–2 ft.",
        "weight":"1–8 lbs.",
        "space":"2-1/2 ft.",
        "tallReach":"0 ft.",
        "longReach":"0 ft."
    },
    "Small":{
        "height":"2–4 ft.",
        "weight":"8–60 lbs.",
        "space":"5 ft.",
        "tallReach":"5 ft.",
        "longReach":"5 ft.",
    },
    "Medium":{
        "height":"4–8 ft.",
        "weight":"60–500 lbs.",
        "space":"5 ft.",
        "tallReach":"5 ft.",
        "longReach":"5 ft.",
    },
    "Large":{
        "height":"8–16 ft.",
        "weight":"500 lbs.–2 tons",
        "space":"10 ft.",
        "tallReach":"10 ft.",
        "longReach":"5 ft."
    },
    "Huge":{
        "height":"16–32 ft.",
        "weight":"2–16 tons",
        "space":"15 ft.",
        "tallReach":"15 ft.",
        "longReach":"10 ft."
    },
    "Gargantuan":{
        "height":"32–64 ft.",
        "weight":"16–125 tons",
        "space":"20 ft.",
        "tallReach":"20 ft.",
        "longReach":"15 ft."
    },
    "Colossal":{
        "height":"64 ft. or more",
        "weight":"125 tons or more",
        "space":"30 ft.",
        "tallReach":"30 ft.",
        "longReach":"20 ft."
    }
}
var xp = {
    "1/8":50,
    "1/6":65,
    "1/4":100,
    "1/3":135,
    "1/2":200,
    "1":400,
    "2":600,
    "3":800,
    "4":1200,
    "5":1600,
    "6":2400,
    "7":3200,
    "8":4800,
    "9":6400,
    "10":9600,
    "11":12800,
    "12":19200,
    "13":25600,
    "14":38400,
    "15":51200,
    "16":76800,
    "17":102400,
    "18":153600,
    "19":204800,
    "20":307200,
    "21":409600,
    "22":614400,
    "23":819200,
    "24":1228800,
    "25":1638400
}
var arrays = {
    "Combatant":{
        "1/3":{
            "npcCR":"1/3",
            "npcEAC":10,
            "npcKAC":12,
            "npcFort":1,
            "npcRef":1,
            "npcWill":0,
            "npcHP":6,
            "npcAbilityDC":8,
            "npcBaseSpellDC":8,
            "npcAbilityScore1":3,
            "npcAbilityScore2":1,
            "npcAbilityScore3":0,
            "npcSpecialsCount":1,
            "npcMasterSkill":7,
            "npcMasterSkillCount":1,
            "npcGoodSkill":3,
            "npcGoodSkillCount":2,
            "npcAttackHigh":4,
            "npcAttackLow":1,
            "npcRangedDamageEnergy":"1d4",
            "npcRangedDamageKinetic":"1d4",
            "npcMeleeDamageStandard":"1d6+Str",
            "npcMeleeDamageThreeAttacks":null,
            "npcMeleeDamageFourAttacks":null
        },
        "1/2":{
            "npcCR":"1/2",
            "npcEAC":10,
            "npcKAC":12,
            "npcFort":2,
            "npcRef":2,
            "npcWill":0,
            "npcHP":13,
            "npcAbilityDC":9,
            "npcBaseSpellDC":9,
            "npcAbilityScore1":3,
            "npcAbilityScore2":2,
            "npcAbilityScore3":1,
            "npcSpecialsCount":1,
            "npcMasterSkill":9,
            "npcMasterSkillCount":1,
            "npcGoodSkill":4,
            "npcGoodSkillCount":2,
            "npcAttackHigh":6,
            "npcAttackLow":3,
            "npcRangedDamageEnergy":"1d4",
            "npcRangedDamageKinetic":"1d6",
            "npcMeleeDamageStandard":"1d6+Str",
            "npcMeleeDamageThreeAttacks":null,
            "npcMeleeDamageFourAttacks":null
        },
        "1":{
            "npcCR":"1",
            "npcEAC":11,
            "npcKAC":13,
            "npcFort":3,
            "npcRef":3,
            "npcWill":1,
            "npcHP":20,
            "npcAbilityDC":10,
            "npcBaseSpellDC":9,
            "npcAbilityScore1":4,
            "npcAbilityScore2":2,
            "npcAbilityScore3":1,
            "npcSpecialsCount":1,
            "npcMasterSkill":10,
            "npcMasterSkillCount":1,
            "npcGoodSkill":5,
            "npcGoodSkillCount":2,
            "npcAttackHigh":8,
            "npcAttackLow":5,
            "npcRangedDamageEnergy":"1d4+1",
            "npcRangedDamageKinetic":"1d6+1",
            "npcMeleeDamageStandard":"1d6+1+Str",
            "npcMeleeDamageThreeAttacks":null,
            "npcMeleeDamageFourAttacks":null
        },
        "2":{
            "npcCR":"2",
            "npcEAC":13,
            "npcKAC":15,
            "npcFort":4,
            "npcRef":4,
            "npcWill":1,
            "npcHP":25,
            "npcAbilityDC":11,
            "npcBaseSpellDC":10,
            "npcAbilityScore1":4,
            "npcAbilityScore2":2,
            "npcAbilityScore3":1,
            "npcSpecialsCount":2,
            "npcMasterSkill":12,
            "npcMasterSkillCount":1,
            "npcGoodSkill":7,
            "npcGoodSkillCount":2,
            "npcAttackHigh":10,
            "npcAttackLow":7,
            "npcRangedDamageEnergy":"1d4+2",
            "npcRangedDamageKinetic":"1d6+2",
            "npcMeleeDamageStandard":"1d6+2+Str",
            "npcMeleeDamageThreeAttacks":null,
            "npcMeleeDamageFourAttacks":null
        },
        "3":{
            "npcCR":"3",
            "npcEAC":14,
            "npcKAC":16,
            "npcFort":5,
            "npcRef":5,
            "npcWill":2,
            "npcHP":40,
            "npcAbilityDC":12,
            "npcBaseSpellDC":11,
            "npcAbilityScore1":4,
            "npcAbilityScore2":2,
            "npcAbilityScore3":1,
            "npcSpecialsCount":2,
            "npcMasterSkill":13,
            "npcMasterSkillCount":1,
            "npcGoodSkill":8,
            "npcGoodSkillCount":2,
            "npcAttackHigh":11,
            "npcAttackLow":8,
            "npcRangedDamageEnergy":"1d4+3",
            "npcRangedDamageKinetic":"1d6+3",
            "npcMeleeDamageStandard":"1d6+3+Str",
            "npcMeleeDamageThreeAttacks":null,
            "npcMeleeDamageFourAttacks":null
        },
        "4":{
            "npcCR":"4",
            "npcEAC":16,
            "npcKAC":18,
            "npcFort":6,
            "npcRef":6,
            "npcWill":3,
            "npcHP":50,
            "npcAbilityDC":13,
            "npcBaseSpellDC":11,
            "npcAbilityScore1":5,
            "npcAbilityScore2":3,
            "npcAbilityScore3":1,
            "npcSpecialsCount":2,
            "npcMasterSkill":15,
            "npcMasterSkillCount":1,
            "npcGoodSkill":10,
            "npcGoodSkillCount":2,
            "npcAttackHigh":12,
            "npcAttackLow":9,
            "npcRangedDamageEnergy":"1d4+4",
            "npcRangedDamageKinetic":"1d6+4",
            "npcMeleeDamageStandard":"1d6+4+Str",
            "npcMeleeDamageThreeAttacks":null,
            "npcMeleeDamageFourAttacks":null
        },
        "5":{
            "npcCR":"5",
            "npcEAC":17,
            "npcKAC":19,
            "npcFort":7,
            "npcRef":7,
            "npcWill":4,
            "npcHP":70,
            "npcAbilityDC":13,
            "npcBaseSpellDC":11,
            "npcAbilityScore1":5,
            "npcAbilityScore2":3,
            "npcAbilityScore3":2,
            "npcSpecialsCount":2,
            "npcMasterSkill":16,
            "npcMasterSkillCount":1,
            "npcGoodSkill":11,
            "npcGoodSkillCount":2,
            "npcAttackHigh":14,
            "npcAttackLow":11,
            "npcRangedDamageEnergy":"1d6+5",
            "npcRangedDamageKinetic":"1d8+5",
            "npcMeleeDamageStandard":"1d6+5+Str",
            "npcMeleeDamageThreeAttacks":null,
            "npcMeleeDamageFourAttacks":null
        },
        "6":{
            "npcCR":"6",
            "npcEAC":18,
            "npcKAC":20,
            "npcFort":8,
            "npcRef":8,
            "npcWill":5,
            "npcHP":90,
            "npcAbilityDC":14,
            "npcBaseSpellDC":12,
            "npcAbilityScore1":5,
            "npcAbilityScore2":3,
            "npcAbilityScore3":2,
            "npcSpecialsCount":2,
            "npcMasterSkill":18,
            "npcMasterSkillCount":1,
            "npcGoodSkill":13,
            "npcGoodSkillCount":2,
            "npcAttackHigh":16,
            "npcAttackLow":13,
            "npcRangedDamageEnergy":"1d10+6",
            "npcRangedDamageKinetic":"2d6+6",
            "npcMeleeDamageStandard":"1d8+6+Str",
            "npcMeleeDamageThreeAttacks":"1d4+6+Str",
            "npcMeleeDamageFourAttacks":null
        },
        "7":{
            "npcCR":"7",
            "npcEAC":19,
            "npcKAC":21,
            "npcFort":9,
            "npcRef":9,
            "npcWill":6,
            "npcHP":105,
            "npcAbilityDC":15,
            "npcBaseSpellDC":13,
            "npcAbilityScore1":5,
            "npcAbilityScore2":4,
            "npcAbilityScore3":2,
            "npcSpecialsCount":2,
            "npcMasterSkill":19,
            "npcMasterSkillCount":1,
            "npcGoodSkill":14,
            "npcGoodSkillCount":2,
            "npcAttackHigh":17,
            "npcAttackLow":14,
            "npcRangedDamageEnergy":"2d6+7",
            "npcRangedDamageKinetic":"2d8+7",
            "npcMeleeDamageStandard":"2d6+7+Str",
            "npcMeleeDamageThreeAttacks":"1d8+7+Str",
            "npcMeleeDamageFourAttacks":"1d6+7+Str"
        },
        "8":{
            "npcCR":"8",
            "npcEAC":20,
            "npcKAC":22,
            "npcFort":10,
            "npcRef":10,
            "npcWill":7,
            "npcHP":125,
            "npcAbilityDC":16,
            "npcBaseSpellDC":13,
            "npcAbilityScore1":6,
            "npcAbilityScore2":4,
            "npcAbilityScore3":2,
            "npcSpecialsCount":2,
            "npcMasterSkill":21,
            "npcMasterSkillCount":1,
            "npcGoodSkill":16,
            "npcGoodSkillCount":2,
            "npcAttackHigh":19,
            "npcAttackLow":16,
            "npcRangedDamageEnergy":"2d8+8",
            "npcRangedDamageKinetic":"3d6+8",
            "npcMeleeDamageStandard":"3d4+8+Str",
            "npcMeleeDamageThreeAttacks":"1d10+8+Str",
            "npcMeleeDamageFourAttacks":"1d6+8+Str"
        },
        "9":{
            "npcCR":"9",
            "npcEAC":22,
            "npcKAC":24,
            "npcFort":11,
            "npcRef":11,
            "npcWill":8,
            "npcHP":145,
            "npcAbilityDC":16,
            "npcBaseSpellDC":13,
            "npcAbilityScore1":6,
            "npcAbilityScore2":4,
            "npcAbilityScore3":3,
            "npcSpecialsCount":2,
            "npcMasterSkill":22,
            "npcMasterSkillCount":1,
            "npcGoodSkill":17,
            "npcGoodSkillCount":2,
            "npcAttackHigh":21,
            "npcAttackLow":18,
            "npcRangedDamageEnergy":"3d6+9",
            "npcRangedDamageKinetic":"5d4+9",
            "npcMeleeDamageStandard":"2d10+9+Str",
            "npcMeleeDamageThreeAttacks":"2d6+9+Str",
            "npcMeleeDamageFourAttacks":"1d10+9+Str"
        },
        "10":{
            "npcCR":"10",
            "npcEAC":23,
            "npcKAC":25,
            "npcFort":12,
            "npcRef":12,
            "npcWill":9,
            "npcHP":165,
            "npcAbilityDC":17,
            "npcBaseSpellDC":14,
            "npcAbilityScore1":8,
            "npcAbilityScore2":5,
            "npcAbilityScore3":3,
            "npcSpecialsCount":2,
            "npcMasterSkill":24,
            "npcMasterSkillCount":1,
            "npcGoodSkill":19,
            "npcGoodSkillCount":2,
            "npcAttackHigh":22,
            "npcAttackLow":19,
            "npcRangedDamageEnergy":"2d20+10",
            "npcRangedDamageKinetic":"4d6+10",
            "npcMeleeDamageStandard":"2d20+10+Str",
            "npcMeleeDamageThreeAttacks":"3d4+10+Str",
            "npcMeleeDamageFourAttacks":"1d10+10+Str"
        },
        "11":{
            "npcCR":"11",
            "npcEAC":24,
            "npcKAC":26,
            "npcFort":13,
            "npcRef":13,
            "npcWill":10,
            "npcHP":180,
            "npcAbilityDC":18,
            "npcBaseSpellDC":14,
            "npcAbilityScore1":8,
            "npcAbilityScore2":5,
            "npcAbilityScore3":3,
            "npcSpecialsCount":2,
            "npcMasterSkill":25,
            "npcMasterSkillCount":1,
            "npcGoodSkill":20,
            "npcGoodSkillCount":2,
            "npcAttackHigh":23,
            "npcAttackLow":20,
            "npcRangedDamageEnergy":"3d8+11",
            "npcRangedDamageKinetic":"3d10+11",
            "npcMeleeDamageStandard":"4d6+11+Str",
            "npcMeleeDamageThreeAttacks":"2d8+11+Str",
            "npcMeleeDamageFourAttacks":"2d6+11+Str"
        },
        "12":{
            "npcCR":"12",
            "npcEAC":26,
            "npcKAC":28,
            "npcFort":14,
            "npcRef":14,
            "npcWill":11,
            "npcHP":200,
            "npcAbilityDC":19,
            "npcBaseSpellDC":15,
            "npcAbilityScore1":8,
            "npcAbilityScore2":5,
            "npcAbilityScore3":4,
            "npcSpecialsCount":3,
            "npcMasterSkill":27,
            "npcMasterSkillCount":1,
            "npcGoodSkill":22,
            "npcGoodSkillCount":2,
            "npcAttackHigh":25,
            "npcAttackLow":22,
            "npcRangedDamageEnergy":"6d4+12",
            "npcRangedDamageKinetic":"4d8+12",
            "npcMeleeDamageStandard":"6d4+12+Str",
            "npcMeleeDamageThreeAttacks":"3d6+12+Str",
            "npcMeleeDamageFourAttacks":"3d4+12+Str"
        },
        "13":{
            "npcCR":"13",
            "npcEAC":27,
            "npcKAC":29,
            "npcFort":15,
            "npcRef":15,
            "npcWill":12,
            "npcHP":225,
            "npcAbilityDC":19,
            "npcBaseSpellDC":15,
            "npcAbilityScore1":8,
            "npcAbilityScore2":6,
            "npcAbilityScore3":4,
            "npcSpecialsCount":3,
            "npcMasterSkill":28,
            "npcMasterSkillCount":1,
            "npcGoodSkill":23,
            "npcGoodSkillCount":2,
            "npcAttackHigh":26,
            "npcAttackLow":23,
            "npcRangedDamageEnergy":"5d6+13",
            "npcRangedDamageKinetic":"6d6+13",
            "npcMeleeDamageStandard":"3d12+13+Str",
            "npcMeleeDamageThreeAttacks":"2d12+13+Str",
            "npcMeleeDamageFourAttacks":"2d8+13+Str"
        },
        "14":{
            "npcCR":"14",
            "npcEAC":28,
            "npcKAC":30,
            "npcFort":16,
            "npcRef":16,
            "npcWill":12,
            "npcHP":250,
            "npcAbilityDC":20,
            "npcBaseSpellDC":15,
            "npcAbilityScore1":8,
            "npcAbilityScore2":6,
            "npcAbilityScore3":4,
            "npcSpecialsCount":3,
            "npcMasterSkill":30,
            "npcMasterSkillCount":1,
            "npcGoodSkill":25,
            "npcGoodSkillCount":2,
            "npcAttackHigh":27,
            "npcAttackLow":24,
            "npcRangedDamageEnergy":"3d12+14",
            "npcRangedDamageKinetic":"5d10+14",
            "npcMeleeDamageStandard":"8d6+14+Str",
            "npcMeleeDamageThreeAttacks":"4d8+14+Str",
            "npcMeleeDamageFourAttacks":"4d6+14+Str"
        },
        "15":{
            "npcCR":"15",
            "npcEAC":29,
            "npcKAC":31,
            "npcFort":17,
            "npcRef":17,
            "npcWill":13,
            "npcHP":275,
            "npcAbilityDC":21,
            "npcBaseSpellDC":16,
            "npcAbilityScore1":9,
            "npcAbilityScore2":7,
            "npcAbilityScore3":5,
            "npcSpecialsCount":3,
            "npcMasterSkill":31,
            "npcMasterSkillCount":1,
            "npcGoodSkill":26,
            "npcGoodSkillCount":2,
            "npcAttackHigh":28,
            "npcAttackLow":25,
            "npcRangedDamageEnergy":"5d8+15",
            "npcRangedDamageKinetic":"8d6+15",
            "npcMeleeDamageStandard":"8d6+15+Str",
            "npcMeleeDamageThreeAttacks":"3d12+15+Str",
            "npcMeleeDamageFourAttacks":"6d4+15+Str"
        },
        "16":{
            "npcCR":"16",
            "npcEAC":30,
            "npcKAC":32,
            "npcFort":18,
            "npcRef":18,
            "npcWill":14,
            "npcHP":300,
            "npcAbilityDC":22,
            "npcBaseSpellDC":16,
            "npcAbilityScore1":10,
            "npcAbilityScore2":7,
            "npcAbilityScore3":5,
            "npcSpecialsCount":3,
            "npcMasterSkill":33,
            "npcMasterSkillCount":1,
            "npcGoodSkill":28,
            "npcGoodSkillCount":2,
            "npcAttackHigh":30,
            "npcAttackLow":27,
            "npcRangedDamageEnergy":"7d6+16",
            "npcRangedDamageKinetic":"6d10+16",
            "npcMeleeDamageStandard":"6d10+16+Str",
            "npcMeleeDamageThreeAttacks":"5d8+16+Str",
            "npcMeleeDamageFourAttacks":"3d10+16+Str"
        },
        "17":{
            "npcCR":"17",
            "npcEAC":31,
            "npcKAC":33,
            "npcFort":19,
            "npcRef":19,
            "npcWill":15,
            "npcHP":340,
            "npcAbilityDC":22,
            "npcBaseSpellDC":16,
            "npcAbilityScore1":11,
            "npcAbilityScore2":8,
            "npcAbilityScore3":5,
            "npcSpecialsCount":3,
            "npcMasterSkill":34,
            "npcMasterSkillCount":1,
            "npcGoodSkill":29,
            "npcGoodSkillCount":2,
            "npcAttackHigh":31,
            "npcAttackLow":28,
            "npcRangedDamageEnergy":"8d6+17",
            "npcRangedDamageKinetic":"6d12+17",
            "npcMeleeDamageStandard":"6d12+17+Str",
            "npcMeleeDamageThreeAttacks":"4d12+17+Str",
            "npcMeleeDamageFourAttacks":"3d12+17+Str"
        },
        "18":{
            "npcCR":"18",
            "npcEAC":32,
            "npcKAC":34,
            "npcFort":19,
            "npcRef":19,
            "npcWill":16,
            "npcHP":375,
            "npcAbilityDC":23,
            "npcBaseSpellDC":17,
            "npcAbilityScore1":11,
            "npcAbilityScore2":8,
            "npcAbilityScore3":6,
            "npcSpecialsCount":4,
            "npcMasterSkill":36,
            "npcMasterSkillCount":1,
            "npcGoodSkill":31,
            "npcGoodSkillCount":2,
            "npcAttackHigh":32,
            "npcAttackLow":29,
            "npcRangedDamageEnergy":"6d10+18",
            "npcRangedDamageKinetic":"8d10+18",
            "npcMeleeDamageStandard":"13d6+18+Str",
            "npcMeleeDamageThreeAttacks":"8d6+18+Str",
            "npcMeleeDamageFourAttacks":"5d8+18+Str"
        },
        "19":{
            "npcCR":"19",
            "npcEAC":33,
            "npcKAC":35,
            "npcFort":20,
            "npcRef":20,
            "npcWill":16,
            "npcHP":415,
            "npcAbilityDC":24,
            "npcBaseSpellDC":18,
            "npcAbilityScore1":11,
            "npcAbilityScore2":9,
            "npcAbilityScore3":6,
            "npcSpecialsCount":4,
            "npcMasterSkill":37,
            "npcMasterSkillCount":1,
            "npcGoodSkill":32,
            "npcGoodSkillCount":2,
            "npcAttackHigh":33,
            "npcAttackLow":30,
            "npcRangedDamageEnergy":"8d8+19",
            "npcRangedDamageKinetic":"9d10+19",
            "npcMeleeDamageStandard":"15d6+19+Str",
            "npcMeleeDamageThreeAttacks":"6d10+19+Str",
            "npcMeleeDamageFourAttacks":"4d12+19+Str"
        },
        "20":{
            "npcCR":"20",
            "npcEAC":35,
            "npcKAC":37,
            "npcFort":21,
            "npcRef":21,
            "npcWill":17,
            "npcHP":465,
            "npcAbilityDC":25,
            "npcBaseSpellDC":19,
            "npcAbilityScore1":12,
            "npcAbilityScore2":9,
            "npcAbilityScore3":6,
            "npcSpecialsCount":4,
            "npcMasterSkill":39,
            "npcMasterSkillCount":1,
            "npcGoodSkill":34,
            "npcGoodSkillCount":2,
            "npcAttackHigh":34,
            "npcAttackLow":31,
            "npcRangedDamageEnergy":"12d6+20",
            "npcRangedDamageKinetic":"16d6+20",
            "npcMeleeDamageStandard":"11d10+20+Str",
            "npcMeleeDamageThreeAttacks":"6d12+20+Str",
            "npcMeleeDamageFourAttacks":"8d6+20+Str"
        },
        "21":{
            "npcCR":"21",
            "npcEAC":36,
            "npcKAC":38,
            "npcFort":22,
            "npcRef":22,
            "npcWill":18,
            "npcHP":500,
            "npcAbilityDC":25,
            "npcBaseSpellDC":19,
            "npcAbilityScore1":12,
            "npcAbilityScore2":10,
            "npcAbilityScore3":7,
            "npcSpecialsCount":4,
            "npcMasterSkill":40,
            "npcMasterSkillCount":1,
            "npcGoodSkill":35,
            "npcGoodSkillCount":2,
            "npcAttackHigh":35,
            "npcAttackLow":32,
            "npcRangedDamageEnergy":"13d6+21",
            "npcRangedDamageKinetic":"18d6+21",
            "npcMeleeDamageStandard":"12d10+21+Str",
            "npcMeleeDamageThreeAttacks":"8d10+21+Str",
            "npcMeleeDamageFourAttacks":"6d10+21+Str"
        },
        "22":{
            "npcCR":"22",
            "npcEAC":38,
            "npcKAC":40,
            "npcFort":22,
            "npcRef":22,
            "npcWill":18,
            "npcHP":550,
            "npcAbilityDC":26,
            "npcBaseSpellDC":20,
            "npcAbilityScore1":13,
            "npcAbilityScore2":10,
            "npcAbilityScore3":7,
            "npcSpecialsCount":4,
            "npcMasterSkill":42,
            "npcMasterSkillCount":1,
            "npcGoodSkill":37,
            "npcGoodSkillCount":2,
            "npcAttackHigh":36,
            "npcAttackLow":33,
            "npcRangedDamageEnergy":"12d8+22",
            "npcRangedDamageKinetic":"20d6+22",
            "npcMeleeDamageStandard":"21d6+22+Str",
            "npcMeleeDamageThreeAttacks":"9d10+22+Str",
            "npcMeleeDamageFourAttacks":"8d8+22+Str"
        },
        "23":{
            "npcCR":"23",
            "npcEAC":39,
            "npcKAC":41,
            "npcFort":23,
            "npcRef":23,
            "npcWill":19,
            "npcHP":600,
            "npcAbilityDC":27,
            "npcBaseSpellDC":21,
            "npcAbilityScore1":13,
            "npcAbilityScore2":11,
            "npcAbilityScore3":7,
            "npcSpecialsCount":4,
            "npcMasterSkill":43,
            "npcMasterSkillCount":1,
            "npcGoodSkill":38,
            "npcGoodSkillCount":2,
            "npcAttackHigh":37,
            "npcAttackLow":34,
            "npcRangedDamageEnergy":"17d6+23",
            "npcRangedDamageKinetic":"14d10+23",
            "npcMeleeDamageStandard":"24d6+23+Str",
            "npcMeleeDamageThreeAttacks":"10d10+23+Str",
            "npcMeleeDamageFourAttacks":"12d6+23+Str"
        },
        "24":{
            "npcCR":"24",
            "npcEAC":41,
            "npcKAC":43,
            "npcFort":24,
            "npcRef":24,
            "npcWill":20,
            "npcHP":650,
            "npcAbilityDC":28,
            "npcBaseSpellDC":22,
            "npcAbilityScore1":15,
            "npcAbilityScore2":11,
            "npcAbilityScore3":8,
            "npcSpecialsCount":4,
            "npcMasterSkill":45,
            "npcMasterSkillCount":1,
            "npcGoodSkill":40,
            "npcGoodSkillCount":2,
            "npcAttackHigh":39,
            "npcAttackLow":36,
            "npcRangedDamageEnergy":"10d12+24",
            "npcRangedDamageKinetic":"19d8+24",
            "npcMeleeDamageStandard":"14d12+24+Str",
            "npcMeleeDamageThreeAttacks":"11d10+24+Str",
            "npcMeleeDamageFourAttacks":"13d6+24+Str"
        },
        "25":{
            "npcCR":"25",
            "npcEAC":42,
            "npcKAC":44,
            "npcFort":25,
            "npcRef":25,
            "npcWill":21,
            "npcHP":700,
            "npcAbilityDC":28,
            "npcBaseSpellDC":22,
            "npcAbilityScore1":15,
            "npcAbilityScore2":12,
            "npcAbilityScore3":8,
            "npcSpecialsCount":4,
            "npcMasterSkill":46,
            "npcMasterSkillCount":1,
            "npcGoodSkill":41,
            "npcGoodSkillCount":2,
            "npcAttackHigh":40,
            "npcAttackLow":37,
            "npcRangedDamageEnergy":"13d10+25",
            "npcRangedDamageKinetic":"14d12+25",
            "npcMeleeDamageStandard":"18d10+25+Str",
            "npcMeleeDamageThreeAttacks":"12d10+25+Str",
            "npcMeleeDamageFourAttacks":"9d10+25+Str"
        }
    },
    "Expert":{

    },
    "Spellcaster":{

    }
}