import coordArray from "../components/Utils/coordArray";

export default function historyAPI(lat, lng) {
  const APIResponse = [
    {
      title: "Ancient Egyptian Strike",
      description: "The very first strike recorded in history",
      text:
        "Going on strike, you would presume, is closely linked to the history of industrialisation and the formation of trade unions. Wrong! While it was of course the industrialisation of economies that led to better organised work forces, the idea of putting down tools because of a dispute goes back a very long way indeed."
    },
    {
      title: "Fantasy Fight Becomes a Reality",
      description:
        "It was a publicity stunt, but it was hugely popular, as each fight was performed as a radio play – as if the fight was taking place live.",
      text:
        "The film Rocky Balboa (2006) has a strange premise: after the current heavyweight champion sees a computer-generated fight between himself and Rocky, he gets the Italian Stallion out of retirement for a bout. But this somewhat ridiculous scenario does have a historic precedent."
    },
    {
      title: "The dancing plague",
      description:
        "also known as ‘St Vitus’s Dance’, choreomania was a truly bizarre medieval phenomenon from central Europe",
      text:
        "It involved spontaneous and continuous dancing by crowds of people until they collapsed through exhaustion – or worse, died. Bizarre as it sounds, choreomania was regularly reported by eyewitnesses and was a genuine concern for authorities. It also seems to have been contagious – for example, in June 1374 one of the widest outbreaks began in Aachen, Germany, before spreading to other places such as Cologne, Flanders, Utrecht, and later Italy."
    },
    {
      title: "The American invasion of Korea",
      description: "Nope, not the one in the 1950s – the one in 1871.",
      text:
        "In the 19th century a number of Asian nations sealed themselves off from the outside world – most famously Japan and China, but Korea too. America had decided to ‘unlock’ these Asian states and trade with them. It had worked well in Japan, with the diplomatic mission led by Commodore Perry in the 1850s, but the idea was put on hold during the American Civil War. It wasn’t until 1871 that a small fleet of American ships returned to the Pacific and travelled to the coastline of Korea. The American diplomatic vessel (which was a merchant ship,not a warship) came in towards the shore and was fired at by Korean shore batteries."
    },
    {
      title: "An underwhelming WW2 battle",
      description:
        "Castle Itter is a small fortification in Austria used by the SS during the Second World War as a prison for high profile detainees. It is also the site of one of the most curious battles of the conflict.",
      text:
        "On 6 May 1945, peace was on the horizon and the Third Reich was collapsing. With the German commander (also in charge of Dachau) committing suicide, and some of the Waffen SS soldiers retreating, one of the prisoners, Zvonimir Čučković, a Yugoslav freedom fighter, escaped and went looking for some Allied troops to rescue the rest of the prisoners."
    },
    {
      title: "The immovable interest rate",
      description: "Britain did not invent banking as we know it today",
      text:
        "many of the concepts were copied from Holland – but with a growing empire, England rapidly became the master of what today is termed as “modern banking”. The Bank of England was founded in 1694 and was given exclusive possession of the government’s balances. It was additionally given permission to be the only corporation (rather than the government) to issue bank notes. What the bank also did in the same year was set the first national interest rate at six per cent."
    },
    {
      title: "The sack of Baltimore",
      description:
        "In southern Ireland there is a small village called Baltimore. It had little to contribute to history until the summer of 1631, when it was attacked – but by whom?",
      text:
        "Was it the French planning an invasion of England via the Emerald Isle? Or perhaps it was some kind of pro-Catholic uprising leading to a vicious English assault, or the Spanish up to their old tricks? You might be surprised to learn that the perpetrators were about as exotic as it gets for the 17th century – Barbary pirates from North Africa led by a Dutch captain (and Muslim convert)-turned pirate, Jan Janszoon van Haarlem, also known as Murad Reis the Younger."
    },
    {
        title: "Ancient Egyptian Strike",
        description: "The very first strike recorded in history",
        text:
          "Going on strike, you would presume, is closely linked to the history of industrialisation and the formation of trade unions. Wrong! While it was of course the industrialisation of economies that led to better organised work forces, the idea of putting down tools because of a dispute goes back a very long way indeed."
      },
      {
        title: "Fantasy Fight Becomes a Reality",
        description:
          "It was a publicity stunt, but it was hugely popular, as each fight was performed as a radio play – as if the fight was taking place live.",
        text:
          "The film Rocky Balboa (2006) has a strange premise: after the current heavyweight champion sees a computer-generated fight between himself and Rocky, he gets the Italian Stallion out of retirement for a bout. But this somewhat ridiculous scenario does have a historic precedent."
      },
      {
        title: "The dancing plague",
        description:
          "also known as ‘St Vitus’s Dance’, choreomania was a truly bizarre medieval phenomenon from central Europe",
        text:
          "It involved spontaneous and continuous dancing by crowds of people until they collapsed through exhaustion – or worse, died. Bizarre as it sounds, choreomania was regularly reported by eyewitnesses and was a genuine concern for authorities. It also seems to have been contagious – for example, in June 1374 one of the widest outbreaks began in Aachen, Germany, before spreading to other places such as Cologne, Flanders, Utrecht, and later Italy."
      },
      {
        title: "The American invasion of Korea",
        description: "Nope, not the one in the 1950s – the one in 1871.",
        text:
          "In the 19th century a number of Asian nations sealed themselves off from the outside world – most famously Japan and China, but Korea too. America had decided to ‘unlock’ these Asian states and trade with them. It had worked well in Japan, with the diplomatic mission led by Commodore Perry in the 1850s, but the idea was put on hold during the American Civil War. It wasn’t until 1871 that a small fleet of American ships returned to the Pacific and travelled to the coastline of Korea. The American diplomatic vessel (which was a merchant ship,not a warship) came in towards the shore and was fired at by Korean shore batteries."
      },
      {
        title: "An underwhelming WW2 battle",
        description:
          "Castle Itter is a small fortification in Austria used by the SS during the Second World War as a prison for high profile detainees. It is also the site of one of the most curious battles of the conflict.",
        text:
          "On 6 May 1945, peace was on the horizon and the Third Reich was collapsing. With the German commander (also in charge of Dachau) committing suicide, and some of the Waffen SS soldiers retreating, one of the prisoners, Zvonimir Čučković, a Yugoslav freedom fighter, escaped and went looking for some Allied troops to rescue the rest of the prisoners."
      },
      {
        title: "The immovable interest rate",
        description: "Britain did not invent banking as we know it today",
        text:
          "many of the concepts were copied from Holland – but with a growing empire, England rapidly became the master of what today is termed as “modern banking”. The Bank of England was founded in 1694 and was given exclusive possession of the government’s balances. It was additionally given permission to be the only corporation (rather than the government) to issue bank notes. What the bank also did in the same year was set the first national interest rate at six per cent."
      },
      {
        title: "The sack of Baltimore",
        description:
          "In southern Ireland there is a small village called Baltimore. It had little to contribute to history until the summer of 1631, when it was attacked – but by whom?",
        text:
          "Was it the French planning an invasion of England via the Emerald Isle? Or perhaps it was some kind of pro-Catholic uprising leading to a vicious English assault, or the Spanish up to their old tricks? You might be surprised to learn that the perpetrators were about as exotic as it gets for the 17th century – Barbary pirates from North Africa led by a Dutch captain (and Muslim convert)-turned pirate, Jan Janszoon van Haarlem, also known as Murad Reis the Younger."
      }
  ];

  const eventCoords = coordArray(lat, lng);
  APIResponse.forEach((response, index) => {
    response.location = eventCoords[index];
  });
  return APIResponse;
}
