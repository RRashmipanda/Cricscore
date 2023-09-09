async function getMatchData(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=c2dcadb2-39b7-4ef6-b394-b5d7192b4d16&offset=0")
        .then(data=>data.json())

      .then(data=>{
        if (data.status !="success") return;
        
        const matchList=data.data;
        if(!matchList) return [];
          
        const relevantData=matchList.filter(match => match.series_id=="e7fc5404-3053-4026-97bc-b2d24649d2bd") .map(match=>`${match.name}, ${match.status}`);
        console.log({relevantData});

       document.getElementById("matches").innerHTML=relevantData.map(match =>`<li>${match}</li>`).join('');
       return relevantData;
      })
       
     .catch(e => console.log(e));

      
}


getMatchData()