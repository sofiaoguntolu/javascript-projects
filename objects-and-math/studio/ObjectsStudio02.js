// Code your orbitCircumference function here:
function orbitCircumference(r){
  return 2*r*Math.PI();
}

// Code your missionDuration function here:
function missionDuration(numOrbits, orbitRadius = 2000, orbitalSpeed = 28000){
  let rawDuration = numOrbits*orbitCircumference(orbitRadius)/orbitalSpeed;
  let roundedDuration = Math.round(100*rawDuration)/100;
  console.log(`The mission will travel ${numOrbits*orbitCircumference(orbitRadius)} km around the planet, and it will take ${roundedDuration} hours to complete.`);
  return roundedDuration;
}

// Copy/paste your selectRandomEntry function here:


// Code your oxygenExpended function here:
function oxygenExpended(candidateObject, numOrbits, orbitRadius, orbitalSpeed){
  let spacewalkTime = missionDuration(numOrbits, orbitRadius, orbitalSpeed);
  let oxygenUsed = candidateObject(o2Used(spacewalkTime));
  oxygenUsed = Math.round(oxygenUsed*1000)/1000;
  return console.log(`${candidateObject} will perform the spacewalk, which will last ${spacewalkTime} hours and require ${oxygenUsed} kg of oxygen.`);
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 