var wonCad = [];

async function fetchData() {
    try {

    const data = {
        "Constiteuncy": [
          {
            "name": "THIRUVANANTHAPURAM",
            "Candidate2019": "Dr. Shashi Tharoor",
            "front2019": "UDF",
            "margin2019": "99989",
            "candidates": [
              {
                "malayalam": "പന്ന്യന്‍ രവീന്ദ്രന്‍",
                "english": "Pannyan Raveendran",
                "front": "LDF",
                "party": "CPI",
                "position": "W",
                "lead": "45213",
                "vote": "456123"
              },
              {
                "malayalam": "രാജീവ് ചന്ദ്രശേഖര്‍",
                "english": "Rajeev Chandrasekhar",
                "front": "NDA",
                "party": "BJP",
                "position": "W",
                "lead": "4521",
                "vote": "56231"
              },
              {
                "malayalam": "ശശി തരൂര്‍",
                "english": "Shashi Tharoor",
                "front": "UDF",
                "party": "INC",
                "position": "W",
                "lead": "451",
                "vote": "3521"
              }
            ]
          },
          {
            "name": "ATTINGAL",
            "Candidate2019": "Adv. Adoor Prakash",
            "front2019": "UDF",
            "margin2019": "38247",
            "candidates": [
              {
                "malayalam": "അടൂര്‍ പ്രകാശ്‌",
                "english": "Adoor Prakash",
                "front": "UDF",
                "party": "INC",
                "position": "L",
                "lead": "20000",
                "vote": "380995"
              },
              {
                "malayalam": "വി. മുരളീധരന്‍",
                "english": "V Muraleedharan",
                "front": "NDA",
                "party": "BJP",
                "position": "L",
                "lead": "0",
                "vote": "342748"
              },
              {
                "malayalam": "വി. ജോയ്‌",
                "english": "V Joy",
                "front": "LDF",
                "party": "CPM",
                "position": "L",
                "lead": "0",
                "vote": "248081"
              }
            ]
          },
          {
            "name": "KOLLAM",
            "Candidate2019": "N.K.Premachandran",
            "front2019": "UDF",
            "margin2019": "148856",
            "candidates": [
              {
                "malayalam": "എന്‍.കെ. പ്രേമചന്ദ്രന്‍",
                "english": "NK Premachandran",
                "front": "UDF",
                "party": "RSP",
                "position": "L",
                "lead": "123456",
                "vote": "499677"
              },
              {
                "malayalam": "എം. മുകേഷ്‌",
                "english": "Mukesh M",
                "front": "LDF",
                "party": "CPM",
                "position": "L",
                "lead": "0",
                "vote": "350821"
              },
              {
                "malayalam": "കൃഷ്ണകുമാര്‍",
                "english": "G Krishnakumar",
                "front": "NDA",
                "party": "BJP",
                "position": "L",
                "lead": "0",
                "vote": "103339"
              }
            ]
          },
          {
            "name": "PATHANAMTHITTA",
            "Candidate2019": "Anto Antony",
            "front2019": "UDF",
            "margin2019": "44243",
            "candidates": [
              {
                "malayalam": "ആന്റോ ആന്റണി",
                "english": "Anto Antony",
                "front": "UDF",
                "party": "INC",
                "position": "L",
                "lead": "50000",
                "vote": "380927"
              },
              {
                "malayalam": "അനില്‍ ആന്റണി",
                "english": "Anil Antony",
                "front": "NDA",
                "party": "BJP",
                "position": "L",
                "lead": "0",
                "vote": "336684"
              },
              {
                "malayalam": "ടി.എം. തോമസ് ഐസക്ക്‌",
                "english": "TM Thomas Isaac",
                "front": "LDF",
                "party": "CPM",
                "position": "L",
                "lead": "0",
                "vote": "297396"
              }
            ]
          },
          {
            "name": "MAVELIKKARA",
            "Candidate2019": "Kodikunnil Suresh",
            "front2019": "UDF",
            "margin2019": "61138",
            "candidates": [
              {
                "malayalam": "ബൈജു കലാശാല",
                "english": "Baiju Kalasala",
                "front": "NDA",
                "party": "BDJS",
                "position": "L",
                "lead": "70000",
                "vote": "440415"
              },
              {
                "malayalam": "സി.എ. അരുണ്‍കുമാര്‍",
                "english": "CA Arun Kumar",
                "front": "LDF",
                "party": "CPI",
                "position": "L",
                "lead": "0",
                "vote": "379277"
              },
              {
                "malayalam": "കൊടിക്കുന്നിൽ സുരേഷ്",
                "english": "Kodikunnil Suresh",
                "front": "UDF",
                "party": "INC",
                "position": "L",
                "lead": "0",
                "vote": "133546"
              }
            ]
          },
          {
            "name": "ALAPPUZHA",
            "Candidate2019": "Adv. A.M. Ariff",
            "front2019": "LDF",
            "margin2019": "10474",
            "candidates": [
              {
                "malayalam": "എ.എം. ആരിഫ്",
                "english": "AM Ariff",
                "front": "LDF",
                "party": "CPM",
                "position": "W",
                "lead": "10000",
                "vote": "435496"
              },
              {
                "malayalam": "കെ.സി. വേണുഗോപാല്‍",
                "english": "KC Venugopal",
                "front": "UDF",
                "party": "INC",
                "position": "W",
                "lead": "0",
                "vote": "445970"
              },
              {
                "malayalam": "ശോഭ സുരേന്ദ്രന്‍",
                "english": "Sobha Surendran",
                "front": "NDA",
                "party": "BJP",
                "position": "W",
                "lead": "0",
                "vote": "187729"
              }
            ]
          },
          {
            "name": "KOTTAYAM",
            "Candidate2019": "Thomas Chazhikadan",
            "front2019": "UDF",
            "margin2019": "106259",
            "candidates": [
              {
                "malayalam": "തുഷാര്‍ വെള്ളാപ്പള്ളി",
                "english": "Thushar Vellappally",
                "front": "NDA",
                "party": "BDJS",
                "position": "L",
                "lead": "85000",
                "vote": "421046"
              },
              {
                "malayalam": "തോമസ് ചാഴികാടന്‍",
                "english": "Thomas Chazhikadan",
                "front": "LDF",
                "party": "Kerala Congress (M)",
                "position": "L",
                "lead": "0",
                "vote": "314787"
              },
              {
                "malayalam": "ഫ്രാന്‍സിസ് ജോര്‍ജ്‌",
                "english": "Francis George",
                "front": "UDF",
                "party": "Kerala Congress",
                "position": "L",
                "lead": "0",
                "vote": "155135"
              }
            ]
          },
          {
            "name": "IDUKKI",
            "Candidate2019": "Adv.Dean Kuriakose",
            "front2019": "UDF",
            "margin2019": "171053",
            "candidates": [
              {
                "malayalam": "ഡീന്‍ കുര്യാക്കോസ്‌",
                "english": "Dean Kuriakose",
                "front": "UDF",
                "party": "INC",
                "position": "L",
                "lead": "76543",
                "vote": "498493"
              },
              {
                "malayalam": "സംഗീത വിശ്വനാഥന്‍",
                "english": "Sangeetha Viswanathan",
                "front": "NDA",
                "party": "BDJS",
                "position": "L",
                "lead": "0",
                "vote": "327440"
              },
              {
                "malayalam": "ജോയ്‌സ് ജോർജ്",
                "english": "Joice George",
                "front": "LDF",
                "party": "CPM",
                "position": "L",
                "lead": "0",
                "vote": "78648"
              }
            ]
          },
          {
            "name": "ERNAKULAM",
            "Candidate2019": "Hibi Eden",
            "front2019": "UDF",
            "margin2019": "169153",
            "candidates": [
              {
                "malayalam": "ഹൈബി ഈഡൻ",
                "english": "Hibi Eden",
                "front": "UDF",
                "party": "INC",
                "position": "L",
                "lead": "85000",
                "vote": "491263"
              },
              {
                "malayalam": "കെ.എസ്. രാധാകൃഷ്ണന്‍",
                "english": "KS Radhakrishnan",
                "front": "NDA",
                "party": "BJP",
                "position": "L",
                "lead": "0",
                "vote": "322110"
              },
              {
                "malayalam": "കെ.ജെ. ഷൈന്‍",
                "english": "KJ Shine",
                "front": "LDF",
                "party": "CPM",
                "position": "L",
                "lead": "0",
                "vote": "137749"
              }
            ]
          },
          {
            "name": "CHALAKUDY",
            "Candidate2019": "Benny Behanan",
            "front2019": "UDF",
            "margin2019": "132274",
            "candidates": [
              {
                "malayalam": "ബെന്നി ബെഹനാൻ",
                "english": "Benny Behanan",
                "front": "UDF",
                "party": "INC",
                "position": "L",
                "lead": "76000",
                "vote": "473444"
              },
              {
                "malayalam": "കെ.എ. ഉണ്ണിക്കൃഷ്ണന്‍",
                "english": "KA Unnikrishnan",
                "front": "NDA",
                "party": "BDJS",
                "position": "L",
                "lead": "0",
                "vote": "341170"
              },
              {
                "malayalam": "സി. രവീന്ദ്രനാഥ്‌",
                "english": "C Raveendranath",
                "front": "LDF",
                "party": "CPM",
                "position": "L",
                "lead": "0",
                "vote": "154159"
              },
              {
                "malayalam": "ചാര്‍ളി പോള്‍",
                "english": "Charly Paul",
                "front": "OTH",
                "party": "Twenty 20",
                "position": "L",
                "lead": "0",
                "vote": "75236"
              }
            ]
          },
          {
            "name": "THRISSUR",
            "Candidate2019": "T. N. Prathapan",
            "front2019": "UDF",
            "margin2019": "93633",
            "candidates": [
              {
                "malayalam": "സുരേഷ് ഗോപി",
                "english": "Suresh Gopi",
                "front": "NDA",
                "party": "BJP",
                "position": "W",
                "lead": "20000",
                "vote": "415089"
              },
              {
                "malayalam": "വി.എസ്. സുനില്‍കുമാര്‍",
                "english": "VS Sunil Kumar",
                "front": "LDF",
                "party": "CPI",
                "position": "W",
                "lead": "0",
                "vote": "321456"
              },
              {
                "malayalam": "കെ. മുരളീധരൻ",
                "english": "K Muraleedharan",
                "front": "UDF",
                "party": "INC",
                "position": "W",
                "lead": "0",
                "vote": "293822"
              }
            ]
          },
          {
            "name": "ALATHUR",
            "Candidate2019": "Ramya Haridas",
            "front2019": "UDF",
            "margin2019": "158968",
            "candidates": [
              {
                "malayalam": "രമ്യ ഹരിദാസ്",
                "english": "Ramya Haridas",
                "front": "UDF",
                "party": "INC",
                "position": "L",
                "lead": "90123",
                "vote": "533815"
              },
              {
                "malayalam": "കെ രാധാകൃഷ്ണൻ",
                "english": "K Radhakrishnan",
                "front": "LDF",
                "party": "CPM",
                "position": "L",
                "lead": "0",
                "vote": "333815"
              },
              {
                "malayalam": "ടി.എൻ. സരസു",
                "english": "TN Sarasu",
                "front": "NDA",
                "party": "BJP",
                "position": "L",
                "lead": "0",
                "vote": "89837"
              }
            ]
          },
          {
            "name": "PALAKKAD",
            "Candidate2019": "V.K.Sreekandan",
            "front2019": "UDF",
            "margin2019": "11637",
            "candidates": [
              {
                "malayalam": "വി.കെ. ശ്രീകണ്ഠൻ",
                "english": "VK Sreekandan",
                "front": "UDF",
                "party": "INC",
                "position": "L",
                "lead": "12000",
                "vote": "399274"
              },
              {
                "malayalam": "സി. കൃഷ്ണകുമാർ",
                "english": "C Krishnakumar",
                "front": "NDA",
                "party": "BJP",
                "position": "L",
                "lead": "0",
                "vote": "387637"
              },
              {
                "malayalam": "എ. വിജയരാഘവൻ",
                "english": "A Vijayaraghavan",
                "front": "LDF",
                "party": "CPM",
                "position": "L",
                "lead": "0",
                "vote": "218556"
              }
            ]
          },
          {
            "name": "PONNANI",
            "Candidate2019": "E.T. Mohammed Basheer",
            "front2019": "UDF",
            "margin2019": "193273",
            "candidates": [
              {
                "malayalam": "എം.പി. അബ്ദുസ്സമദ് സമദാനി",
                "english": "MP Abdussamad Samadani",
                "front": "UDF",
                "party": "Muslim League",
                "position": "L",
                "lead": "125000",
                "vote": "521824"
              },
              {
                "malayalam": "നിവേദിത സുബ്രഹ്മണ്യം",
                "english": "Niveditha Subramanian",
                "front": "NDA",
                "party": "BJP",
                "position": "L",
                "lead": "0",
                "vote": "328551"
              },
              {
                "malayalam": "കെ.എസ്. ഹംസ",
                "english": "KS Hamza",
                "front": "LDF",
                "party": "CPM",
                "position": "L",
                "lead": "0",
                "vote": "110603"
              }
            ]
          },
          {
            "name": "MALAPPURAM",
            "Candidate2019": "P.K. Kunhalikutty",
            "front2019": "UDF",
            "margin2019": "260153",
            "candidates": [
              {
                "malayalam": "ഇ.ടി. മുഹമ്മദ് ബഷീര്‍",
                "english": "ET Mohammed Basheer",
                "front": "UDF",
                "party": "Muslim League",
                "position": "L",
                "lead": "135648",
                "vote": "589873"
              },
              {
                "malayalam": "വി. വസീഫ്",
                "english": "V Vaseef",
                "front": "LDF",
                "party": "CPM",
                "position": "L",
                "lead": "0",
                "vote": "329720"
              },
              {
                "malayalam": "ഡോ. എം. അബ്ദുള്‍ സലാം",
                "english": "Dr M Abdul Salam",
                "front": "NDA",
                "party": "BJP",
                "position": "L",
                "lead": "0",
                "vote": "82332"
              }
            ]
          },
          {
            "name": "KOZHIKODE",
            "Candidate2019": "M.K.Raghavan",
            "front2019": "UDF",
            "margin2019": "85225",
            "candidates": [
              {
                "malayalam": "എളമരം കരീം",
                "english": "Elamaram Kareem",
                "front": "LDF",
                "party": "CPM",
                "position": "L",
                "lead": "546450",
                "vote": "161216"
              },
              {
                "malayalam": "എം.കെ. രാഘവന്‍",
                "english": "MK Raghavan",
                "front": "UDF",
                "party": "INC",
                "position": "L",
                "lead": "0",
                "vote": "493444"
              },
              {
                "malayalam": "എം.ടി. രമേശ്",
                "english": "MT Ramesh",
                "front": "NDA",
                "party": "BJP",
                "position": "L",
                "lead": "0",
                "vote": "408219"
              }
            ]
          },
          {
            "name": "WAYANAD",
            "Candidate2019": "Rahul Gandhi",
            "front2019": "UDF",
            "margin2019": "431770",
            "candidates": [
              {
                "malayalam": "രാഹുല്‍ ഗാന്ധി",
                "english": "Rahul Gandhi",
                "front": "UDF",
                "party": "INC",
                "position": "L",
                "lead": "225",
                "vote": "0"
              },
              {
                "malayalam": "ആനി രാജ",
                "english": "Annie Raja",
                "front": "LDF",
                "party": "CPI",
                "position": "L",
                "lead": "0",
                "vote": "0"
              },
              {
                "malayalam": "കെ. സുരേന്ദ്രൻ",
                "english": "K Surendran",
                "front": "NDA",
                "party": "BJP",
                "position": "L",
                "lead": "0",
                "vote": "0"
              }
            ]
          },
          {
            "name": "VADAKARA",
            "Candidate2019": "K.Muraleedharan",
            "front2019": "UDF",
            "margin2019": "84663",
            "candidates": [
              {
                "malayalam": "ഷാഫി പറമ്പിൽ",
                "english": "Shafi Parambil",
                "front": "UDF",
                "party": "INC",
                "position": "W",
                "lead": "65432",
                "vote": "526755"
              },
              {
                "malayalam": "കെ.കെ ശൈലജ",
                "english": "KK Shailaja",
                "front": "LDF",
                "party": "CPM",
                "position": "W",
                "lead": "0",
                "vote": "442092"
              },
              {
                "malayalam": "സി.ആർ. പ്രഫുൽ കൃഷ്ണൻ",
                "english": "CR Praphul Krishnan",
                "front": "NDA",
                "party": "BJP",
                "position": "W",
                "lead": "0",
                "vote": "80128"
              }
            ]
          },
          {
            "name": "KANNUR",
            "Candidate2019": "K. Sudhakaran",
            "front2019": "UDF",
            "margin2019": "94559",
            "candidates": [
              {
                "malayalam": "കെ. സുധാകരൻ",
                "english": "K Sudhakaran",
                "front": "UDF",
                "party": "INC",
                "position": "L",
                "lead": "85641",
                "vote": "529741"
              },
              {
                "malayalam": "എം.വി. ജയരാജന്‍",
                "english": "MV Jayarajan",
                "front": "LDF",
                "party": "CPM",
                "position": "L",
                "lead": "0",
                "vote": "435182"
              },
              {
                "malayalam": "സി. രഘുനാഥ്",
                "english": "C Raghunath",
                "front": "NDA",
                "party": "BJP",
                "position": "L",
                "lead": "0",
                "vote": "68509"
              }
            ]
          },
          {
            "name": "KASARAGOD",
            "Candidate2019": "Rajmohan Unnithan",
            "front2019": "UDF",
            "margin2019": "40438",
            "candidates": [
              {
                "malayalam": "എം.എൽ. അശ്വിനി",
                "english": "ML Ashwini",
                "front": "NDA",
                "party": "BJP",
                "position": "L",
                "lead": "222222",
                "vote": "176049"
              },
              {
                "malayalam": "രാജ്‌മോഹൻ ഉണ്ണിത്താൻ",
                "english": "Rajmohan Unnithan",
                "front": "UDF",
                "party": "INC",
                "position": "L",
                "lead": "22222",
                "vote": "474961"
              },
              {
                "malayalam": "എം.വി. ബാലകൃഷ്ണൻ",
                "english": "MV Balakrishnan",
                "front": "LDF",
                "party": "CPM",
                "position": "L",
                "lead": "0",
                "vote": "434523"
              }
            ]
          }
        ]
      }


      if (data && data.Constiteuncy) {
        data.Constiteuncy.forEach(constituency => {
            // Ensure candidates is defined and has at least one element
            if (Array.isArray(constituency.candidates) && constituency.candidates.length > 0 && constituency.candidates[0].position === 'W') {
                var imglink = 'https://specials.mathrubhumi.com/loksabha2024/images/candidates/'+constituency.candidates[0].english.toLowerCase().replace(" ", "-")+'.jpg';
                wonCad.push({
                    name: constituency.name,
                    malayalam: constituency.candidates[0].malayalam,
                    lead: constituency.candidates[0].lead,
                    front: constituency.candidates[0].front,
                    image: imglink
                });
            }
        });

        console.log(wonCad);
        displayData()

      } else {
        console.error('Empty response');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();

  async function displayData() {
    var n = 3;
    var i = 0;
    setInterval( () => {
    document.getElementById('name-box').innerHTML = wonCad[i].name;
    document.getElementById('img-box').src= wonCad[i].image;
    document.getElementById('malayalam-box').innerHTML = wonCad[i].malayalam;
    document.getElementById('lead-box').innerHTML = 'Lead : ' + wonCad[i].lead;
    document.getElementById('front-box').innerHTML = wonCad[i].front + ' ജയിച്ചു';

    if(wonCad[i].front == 'LDF'){    
        document.getElementById('img-box').style.borderColor ="red" 
    }else if(wonCad[i].front == 'UDF'){
        document.getElementById('img-box').style.borderColor ="blue" 
    }else if(wonCad[i].front == 'NDA'){
        document.getElementById('img-box').style.borderColor ="orange" 
    }else{
        document.getElementById('img-box').style.borderColor ="green" 
    }


    

    i++;

    if(n < i){ i = 0 ;}
    },2000)
  }