var wonCad = [];
async function fetchData() {
    try {
      var data;
      const url = './constituencies.json';


    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    data = await response.json();

    console.log(data)

      if (data && data.Constiteuncy) {
        data.Constiteuncy.forEach(constituency => {
            if (Array.isArray(constituency.candidates) && constituency.candidates.length > 0 && constituency.candidates[0].position === 'W') {
                var imglink = 'https://specials.mathrubhumi.com/loksabha2024/images/candidates/'+constituency.candidates[0].english.toLowerCase().replace(/ /g, "-")+'.jpg';
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
    var n = wonCad.length - 1;
    console.log(n)
    var i = 0;
    setInterval( () => {
      document.getElementById('info-box').style.display = 'block';

    let imgBox = document.getElementById('img-box');
    let nameBox = document.getElementById('name-box'); 
    let malayalamBox = document.getElementById('malayalam-box');
    let leadBox =   document.getElementById('lead-box');
    let frontBox = document.getElementById('front-box');


    nameBox.innerHTML = '('+wonCad[i].name+')';
    imgBox.src= wonCad[i].image;
    malayalamBox.innerHTML = wonCad[i].malayalam;
    leadBox.innerHTML = `<span id='front-text'>${wonCad[i].front}</span>`+' Won by ' +`<span class="lead-count">`+ wonCad[i].lead + `</span>`;

    let array = ['malayalam-box', 'lead-box', 'front-box','name-box'];
    imgBox.classList.add('circleAnimation');
    array.forEach(element => {
      document.getElementById(element).classList.add('fadeAnimation');
    });

    document.getElementById('front-text').style.fontWeight = "bold"

    if(wonCad[i].front == 'LDF'){    
        document.getElementById('img-box').style.borderColor ="red";
        document.getElementById('front-text').style.color = "red";
    }else if(wonCad[i].front == 'UDF'){
        document.getElementById('img-box').style.borderColor ="#0080FF"; 
        document.getElementById('front-text').style.color = "#0080FF";
    }else if(wonCad[i].front == 'NDA'){
        document.getElementById('img-box').style.borderColor ="orange";
        document.getElementById('front-text').style.color = "orange"; 
    }else{
        document.getElementById('img-box').style.borderColor ="green";
        document.getElementById('front-text').style.color = "green"; 
    }
    
    setTimeout(()=>{
      imgBox.classList.remove('circleAnimation');
      array.forEach(element=>{
        document.getElementById(element).classList.remove('fadeAnimation')
      })
    },2000)

    i++;

    if(n < i){ i = 0 ;}
    },3000)
  }

