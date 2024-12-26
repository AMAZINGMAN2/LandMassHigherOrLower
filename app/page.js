'use client'
import { useState, useEffect } from "react";
const countries = [
  {
    "name": "Antarctica",
    "size": 14200000
  },
  {
    "name": "Canada",
    "size": 9984670
  },
  {
    "name": "United States",
    "size": 9833517
  },
  {
    "name": "China",
    "size": 9596960
  },
  {
    "name": "Brazil",
    "size": 8515767
  },
  {
    "name": "Australia",
    "size": 7741220
  },
  {
    "name": "Argentina",
    "size": 3745997
  },
  {
    "name": "India",
    "size": 3287263
  },
  {
    "name": "Kazakhstan",
    "size": 2724900
  },
  {
    "name": "Algeria",
    "size": 2381740
  },
  {
    "name": "Democratic Republic of the Congo",
    "size": 2344858
  },
  {
    "name": "Denmark",
    "size": 2210573
  },
  {
    "name": "Greenland",
    "size": 2166086
  },
  {
    "name": "Saudi Arabia",
    "size": 2149690
  },
  {
    "name": "Chile",
    "size": 2006106
  },
  {
    "name": "Mexico",
    "size": 1964375
  },
  {
    "name": "Indonesia",
    "size": 1904569
  },
  {
    "name": "Sudan",
    "size": 1861484
  },
  {
    "name": "Libya",
    "size": 1759540
  },
  {
    "name": "Iran",
    "size": 1648195
  },
  {
    "name": "Mongolia",
    "size": 1564110
  },
  {
    "name": "Peru",
    "size": 1285216
  },
  {
    "name": "Chad",
    "size": 1284000
  },
  {
    "name": "Niger",
    "size": 1267000
  },
  {
    "name": "Angola",
    "size": 1246700
  },
  {
    "name": "Mali",
    "size": 1240192
  },
  {
    "name": "South Africa",
    "size": 1221037
  },
  {
    "name": "Colombia",
    "size": 1141748
  },
  {
    "name": "France",
    "size": 1106756
  },
  {
    "name": "Ethiopia",
    "size": 1104300
  },
  {
    "name": "Bolivia",
    "size": 1098581
  },
  {
    "name": "Mauritania",
    "size": 1030700
  },
  {
    "name": "Egypt",
    "size": 1002450
  },
  {
    "name": "Tanzania",
    "size": 947300
  },
  {
    "name": "Nigeria",
    "size": 923768
  },
  {
    "name": "Venezuela",
    "size": 912050
  },
  {
    "name": "Pakistan",
    "size": 907132
  },
  {
    "name": "Namibia",
    "size": 824292
  },
  {
    "name": "Mozambique",
    "size": 799380
  },
  {
    "name": "Turkey",
    "size": 783562
  },
  {
    "name": "Zambia",
    "size": 752612
  },
  {
    "name": "Myanmar",
    "size": 676578
  },
  {
    "name": "Afghanistan",
    "size": 652230
  },
  {
    "name": "South Sudan",
    "size": 644239
  },
  {
    "name": "Somalia",
    "size": 637657
  },
  {
    "name": "Central African Republic",
    "size": 622984
  },
  {
    "name": "Ukraine",
    "size": 603500
  },
  {
    "name": "Madagascar",
    "size": 587041
  },
  {
    "name": "Botswana",
    "size": 581730
  },
  {
    "name": "Kenya",
    "size": 580367
  },
  {
    "name": "Yemen",
    "size": 527968
  },
  {
    "name": "Thailand",
    "size": 513120
  },
  {
    "name": "Spain",
    "size": 505370
  },
  {
    "name": "Turkmenistan",
    "size": 488100
  },
  {
    "name": "Cameroon",
    "size": 475442
  },
  {
    "name": "Papua New Guinea",
    "size": 462840
  },
  {
    "name": "Sweden",
    "size": 450295
  },
  {
    "name": "Uzbekistan",
    "size": 447400
  },
  {
    "name": "Morocco",
    "size": 446550
  },
  {
    "name": "Iraq",
    "size": 438317
  },
  {
    "name": "Paraguay",
    "size": 406752
  },
  {
    "name": "Zimbabwe",
    "size": 390757
  },
  {
    "name": "Norway",
    "size": 386224
  },
  {
    "name": "Japan",
    "size": 377915
  },
  {
    "name": "Germany",
    "size": 357022
  },
  {
    "name": "Republic of the Congo",
    "size": 342000
  },
  {
    "name": "Finland",
    "size": 338424
  },
  {
    "name": "Vietnam",
    "size": 331212
  },
  {
    "name": "Malaysia",
    "size": 329847
  },
  {
    "name": "Ivory Coast",
    "size": 322463
  },
  {
    "name": "Poland",
    "size": 312696
  },
  {
    "name": "Oman",
    "size": 309500
  },
  {
    "name": "Italy",
    "size": 301339
  },
  {
    "name": "Philippines",
    "size": 300000
  },
  {
    "name": "Ecuador",
    "size": 276841
  },
  {
    "name": "Burkina Faso",
    "size": 274222
  },
  {
    "name": "New Zealand",
    "size": 268838
  },
  {
    "name": "Gabon",
    "size": 267667
  },
  {
    "name": "Guinea",
    "size": 245857
  },
  {
    "name": "United Kingdom",
    "size": 242495
  },
  {
    "name": "Uganda",
    "size": 241550
  },
  {
    "name": "Ghana",
    "size": 238533
  },
  {
    "name": "Romania",
    "size": 238397
  },
  {
    "name": "Laos",
    "size": 236800
  },
  {
    "name": "Guyana",
    "size": 214969
  },
  {
    "name": "Belarus",
    "size": 207600
  },
  {
    "name": "Kyrgyzstan",
    "size": 199951
  },
  {
    "name": "Senegal",
    "size": 196722
  },
  {
    "name": "Syria",
    "size": 185180
  },
  {
    "name": "Cambodia",
    "size": 181035
  },
  {
    "name": "Uruguay",
    "size": 176215
  },
  {
    "name": "Somaliland",
    "size": 176120
  },
  {
    "name": "Suriname",
    "size": 163820
  },
  {
    "name": "Tunisia",
    "size": 163610
  },
  {
    "name": "Bangladesh",
    "size": 147570
  },
  {
    "name": "Nepal",
    "size": 147181
  },
  {
    "name": "Tajikistan",
    "size": 143100
  },
  {
    "name": "Greece",
    "size": 131957
  },
  {
    "name": "Nicaragua",
    "size": 130370
  },
  {
    "name": "North Korea",
    "size": 120540
  },
  {
    "name": "Malawi",
    "size": 118484
  },
  {
    "name": "Eritrea",
    "size": 117600
  },
  {
    "name": "Benin",
    "size": 114763
  },
  {
    "name": "Honduras",
    "size": 112492
  },
  {
    "name": "Liberia",
    "size": 111369
  },
  {
    "name": "Bulgaria",
    "size": 111002
  },
  {
    "name": "Cuba",
    "size": 110860
  },
  {
    "name": "Guatemala",
    "size": 108889
  },
  {
    "name": "Iceland",
    "size": 103000
  },
  {
    "name": "South Korea",
    "size": 100210
  },
  {
    "name": "Hungary",
    "size": 93028
  },
  {
    "name": "Portugal",
    "size": 92090
  },
  {
    "name": "Jordan",
    "size": 89342
  },
  {
    "name": "Serbia",
    "size": 88361
  },
  {
    "name": "Azerbaijan",
    "size": 86600
  },
  {
    "name": "Austria",
    "size": 83871
  },
  {
    "name": "United Arab Emirates",
    "size": 83600
  },
  {
    "name": "Czech Republic",
    "size": 78867
  },
  {
    "name": "Panama",
    "size": 75417
  },
  {
    "name": "Sierra Leone",
    "size": 71740
  },
  {
    "name": "Ireland",
    "size": 70273
  },
  {
    "name": "Georgia",
    "size": 69700
  },
  {
    "name": "Sri Lanka",
    "size": 65610
  },
  {
    "name": "Lithuania",
    "size": 65300
  },
  {
    "name": "Latvia",
    "size": 64559
  },
  {
    "name": "Croatia",
    "size": 56594
  },
  {
    "name": "Bosnia and Herzegovina",
    "size": 51209
  },
  {
    "name": "Costa Rica",
    "size": 51100
  },
  {
    "name": "Slovakia",
    "size": 49037
  },
  {
    "name": "Dominican Republic",
    "size": 48671
  },
  {
    "name": "Estonia",
    "size": 45227
  },
  {
    "name": "Netherlands",
    "size": 41850
  },
  {
    "name": "Switzerland",
    "size": 41284
  },
  {
    "name": "Bhutan",
    "size": 38394
  },
  {
    "name": "Taiwan",
    "size": 36193
  },
  {
    "name": "Moldova",
    "size": 33851
  },
  {
    "name": "Belgium",
    "size": 30528
  },
  {
    "name": "Lesotho",
    "size": 30355
  },
  {
    "name": "Armenia",
    "size": 29743
  },
  {
    "name": "Albania",
    "size": 28748
  },
  {
    "name": "Equatorial Guinea",
    "size": 28051
  },
  {
    "name": "Haiti",
    "size": 27750
  },
  {
    "name": "Rwanda",
    "size": 26338
  },
  {
    "name": "North Macedonia",
    "size": 25713
  },
  {
    "name": "Djibouti",
    "size": 23200
  },
  {
    "name": "Belize",
    "size": 22966
  },
  {
    "name": "Slovenia",
    "size": 20273
  },
  {
    "name": "Fiji",
    "size": 18274
  },
  {
    "name": "Kuwait",
    "size": 17818
  },
  {
    "name": "Eswatini",
    "size": 17364
  },
  {
    "name": "Montenegro",
    "size": 13812
  },
  {
    "name": "Vanuatu",
    "size": 12189
  },
  {
    "name": "Qatar",
    "size": 11586
  },
  {
    "name": "Jamaica",
    "size": 10991
  },
  {
    "name": "Kosovo",
    "size": 10887
  },
  {
    "name": "Lebanon",
    "size": 10452
  },
  {
    "name": "Cyprus",
    "size": 9251
  },
  {
    "name": "Palestine",
    "size": 28029
  },
  {
    "name": "Brunei",
    "size": 5765
  },
  {
    "name": "Trinidad and Tobago",
    "size": 5130
  },
  {
    "name": "Cape Verde",
    "size": 4033
  },
  {
    "name": "Samoa",
    "size": 2842
  },
  {
    "name": "Luxembourg",
    "size": 2586
  },
  {
    "name": "Mauritius",
    "size": 2040
  },
  {
    "name": "Comoros",
    "size": 1862
  },
  {
    "name": "Bahrain",
    "size": 778
  },
  {
    "name": "Dominica",
    "size": 751
  },
  {
    "name": "Tonga",
    "size": 747
  },
  {
    "name": "Singapore",
    "size": 716
  },
  {
    "name": "Andorra",
    "size": 468
  },
  {
    "name": "Antigua and Barbuda",
    "size": 442
  },
  {
    "name": "Barbados",
    "size": 430
  },
  {
    "name": "Grenada",
    "size": 344
  },
  {
    "name": "Malta",
    "size": 316
  },
  {
    "name": "Maldives",
    "size": 300
  },
  {
    "name": "Liechtenstein",
    "size": 160
  },
  {
    "name": "San Marino",
    "size": 61
  },
  {
    "name": "Tuvalu",
    "size": 26
  },
  {
    "name": "Monaco",
    "size": 2.02
  },
  {
    "name": "Vatican City",
    "size": 0.44
  },
];

export default function Home() {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [nextCountry, setNextCountry] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const getRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
  };

  const startGame = () => {
    setCurrentCountry(getRandomCountry());
    setNextCountry(getRandomCountry());
  };

  const handleAnswer = (isHigher) => {
    if (gameOver) return;

    const isCorrect =
      (isHigher && nextCountry.size > currentCountry.size) ||
      (!isHigher && nextCountry.size < currentCountry.size);

    if (isCorrect) {
      setScore(score + 1);
      setCurrentCountry(nextCountry);
      setNextCountry(getRandomCountry());
    } else {
      setGameOver(true);
    }
  };

  useEffect(() => {
    if (!currentCountry && !nextCountry) {
      startGame();
    }
  }, [currentCountry, nextCountry]);

  return (
    <main className="flex min-h-screen flex-col text-gray-100 select-none items-center justify-center text-white relative">
      <div className="blur "></div>
      <div className="absolute inset-0 bg-cover bg-center filter blur-[100px] opacity-50 z-[-1]"></div> {/* Custom blur effect */}
      
      <div className="text-center mb-[20vh]">
        <h1 className="text-[5rem] font-bold text-gray-100 select-none mb-8">
          Country Size:{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-500">
            Higher
          </span>{" "}
          or{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-purple-500">
            Lower
          </span>
          ?
        </h1>
        {gameOver ? (
          <div className="game-over">
            <h2 className="text-3xl mb-4">Game Over!</h2>
            <p className="text-5xl mb-8">Your Score: {score}</p>
            <div className="answer">
              <h3 className="text-[4rem] my-4">
                {nextCountry?.name} is {nextCountry?.size.toLocaleString()}Km<sup>2</sup>
              </h3>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="font-black text-[2rem] mt-2 px-6 py-18 bg-gradient-to-r from-blue-400 via-violet-600 to-blue-700 text-gray-100 rounded-lg hover:bg-blue-400"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="game flex justify-between items-center mt-[24vh] w-full max-w-8xl mx-auto p-4">
            {/* Left Section: Current Country */}
            <div className="current-country w-1/2 text-gray-100 text-center">
              <p className="font-bold text-[4rem]">{currentCountry?.name}</p>
              <p className="text-2xl pt-4 ">{currentCountry?.size.toLocaleString()} Km<sup>2</sup> </p>
            </div>

            {/* Divider Line */}
            <div className="divider w-1 px-2 bg-white"></div>

            {/* Right Section: Next Country */}
            <div className="next-country w-1/2 text-gray-100 text-center">
              <p className="font-bold text-[4rem]">{nextCountry?.name}</p>
              <p className="text-2xl pt-4">&nbsp;</p>
            </div>
          </div>
        )}

        {!gameOver && (
          <div className="choices flex justify-center gap-6 mt-8">
            <button
              onClick={() => handleAnswer(true)}
              className="px-6 font-black text-[2rem] py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg hover:bg-green-400 hover:scale-125 transition-all duration-300 ease-in-out"
            >
              Higher
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="px-6 font-black text-[2rem] py-3 bg-gradient-to-r from-red-600 via-red-500 to-violet-500 text-white rounded-lg hover:bg-red-400 hover:scale-125 transition-all duration-300 ease-in-out"
            >
              Lower
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
