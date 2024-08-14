const getWeather=async()=>{
    result=""
    const city=winp.value//input text le value store here
    const res= await fetch(`http://api.weatherapi.com/v1/current.json?key=936d3e14efa7498c978105432241408&q=${city}`)//base url frst thenn crnt methode
    //then '?key='gfrom app then '&' another value which indicates the place here we use template strng bcause we can get another counrtues weathwe
    const jres=await res.json()
    console.log(jres)
   result=`
   <h3>${jres.location.name},${jres.location.region},${jres.location.country}</h3>
   <img src=${jres.current.condition.icon} alt="icon">
   <h5>${jres.current.condition.text}</h5>`
   cnt.innerHTML=result
}
//const base_url=""
// const api_key="" use this as template string in fetch