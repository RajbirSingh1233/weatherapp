import React , {useEffect, useState} from 'react';

function FullBackground (props) {
    return (
      <div className="bg-dim full-bg-size" style={{backgroundImage: `url(${props.image})`}} />
    )
  }


const Temp = () =>{

    const [city , setCity] = useState(null);
    const [search , setSearch] = useState("kaithal");

    useEffect( () =>{
        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=&{search}&appid={196995762cf79b3f0e3cde9b4552b69a}`

            const response = await fetch(url);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search] )



    return(

        <>

        <div className="box">
            
            <div className="inputData">
                <input
                    type="search"
                    value={search}
                    className="inputFeild"
                    onChange={(event)=>{
                        setSearch(event.target.value)
                    }} />
            </div>
        {
            !city ? (
                <p className="errorMsg"> No Data Found </p>
            ) : (
                <div>
              <div className="info">
                <h2 className="location">
                <i className="fas fa-street-view animated"></i>{search}
                </h2>

                <h1 className="temp">
                   {city.temp}°C
                </h1>

                 <h3 className="tempmin_max"></h3>
                    Min : {city.temp_min}°C | Max : {city.temp_max}°C | Humidity : {city.humidity}
               </div>

        <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        </div>

        </div>
        )}
        </div>
        </>
    )
}

export default Temp;

