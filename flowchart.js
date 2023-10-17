const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function start_game() {
  rl.question('Wat is je naam ?? ', function(naam) {
    console.log(`Welkom ${naam}... Het SPEL Regel !! Je krijgt elke rond een input van (0,1) elke waarde doet een actie !!`);
    console.log(`OP een fise ochtend je ligt te slapen op eens hoor je iets van uit buiten !!! `);
    rl.question('Wat ga je doen ??? [0] Je kijkt wat het is? of  [1] Je negeert het en gaat uit je bed: ', function(wakker_worden) {
      if (wakker_worden == 1) {
        console.log('Je hoort rare geluiden buiten');
        rl.question('Wat ga je doen ??? [0] Ga uit het raam en ren in het bos, of [1] Verstop je ?: ', function(keuze_2) {
          if (keuze_2 == 0) {
            console.log('RENNNEN !! En RENNEN in het bos');
            console.log('ZOMBIESSS achter je !!');
            console.log('Nog meer Rennen');
            console.log('Helaas, Zombies hebben jou gepakt');
            console.log('Game Over !!! :(');
            askToPlayAgain(false);
          } else {
            console.log('Je bent verstopt :) !!');
            console.log('Je hebt een wapen gevonden !');
            rl.question('Wat ga je doen ? [0] Naar Zombies schieten ? of [1] Verder verstoppen ?: ', function(keuze_3) {
              if (keuze_3 == 0) {
                console.log('PEW PEW PEW !!!!');
                console.log('ZOMBIES zijn dood !!');
                console.log('Je hebt gewonnen !! :) !!');
                askToPlayAgain(true);
              } else {
                console.log('Je blijft je verstoppen...');
                console.log('Zombies komen eraan !');
                console.log('Ze komen je huis binnen en kunnen je ruiken en pakken je en eten je op');
                console.log('Helaas, Zombies hebben jou gepakt');
                console.log('Game Over !!! :(');
                askToPlayAgain(false);
              }
            });
          }
        });
      } else {
        console.log('Je hebt besloten om te kijken wat het is?.');
        console.log('SH*TT, Dit Zijn ZOMBIES !!');
        rl.question('Wat ga je doen ? [0] Je kijkt door je raam en je schreeuwt of [1] Je doet de deur open ?: ', function(keuze_4){
          if (keuze_4 == 0) {
            console.log('De zombies horen je en proberen in je huis te komen');
            rl.question('Wat ga je doen ? [0] Ren weg ? of [1] Verstop je ?  ', function(keuze_5){
              if (keuze_5 == 0) {
                console.log('RENNEN !! En RENNEN in het bos');
                console.log('ZOMBIES achter je !!');
                console.log('Nog meer Rennen');
                console.log('Helaas, Zombies hebben jou gepakt');
                console.log('Game Over !!! :(');
                askToPlayAgain(false);
              } else {
                console.log('Je verstopt je en je denkt dat ze weg zijn');
                rl.question('Wat ga je doen ?  [0] Verder verstoppen? of [1] Proberen om weg te gaan rennen ? ', function(keuze_6){
                  if (keuze_6 == 0) {
                    console.log('Ze komen je huis binnen en kunnen je ruiken en pakken je en eten je op');
                    console.log('Helaas, Zombies hebben jou gepakt');
                    console.log('Game Over !!! :(');
                    askToPlayAgain(false);
                  } else {
                    console.log('Proberen om weg te gaan rennen');
                    console.log('Rennen .... rennen');
                    console.log('Je rent voor wat voelt als 30 minuten en komt uiteindelijk in een stad terecht waar je veilig bent');
                    console.log('Je hebt gewonnen !! :) !!');
                    askToPlayAgain(true);
                  }
                });
              }
            });
          } else {
            console.log('Deur is open !! ');
            console.log('De zombies eten je op');
            console.log('Helaas, Zombies hebben jou gepakt');
            console.log('Game Over !!! :(');
            askToPlayAgain(false);
          }
        });
      }
    });
  });
}

function askToPlayAgain(success) {
  const message = success ? 'WOW you made it !!!! ' : 'Game Over !!! :(';
  console.log(message);
  rl.question('Wil je opnieuw spelen ??? [0] Nee [1] Ja: ', function(opnieuw) {
    if (opnieuw == '1') {
      start_game();
    } else {
      console.log('Bedankt voor het spelen!');
      rl.close();
    }
  });
}

start_game();
