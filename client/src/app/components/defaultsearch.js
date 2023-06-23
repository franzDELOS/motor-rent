import myMoto from "./products" 

const Default = () => {

  return (
    <div className={style.default}>

        <input type="text"  placeholder="Search..."  onChange={handleSearch}/>
          
           {myMoto.map((myMoto, index) => (
       <div key={index}>
               
             <Image
               src={myMoto.image}
               alt={myMoto.name}
               width={240}
               height={200}
             />

          <h1>{myMoto.name}</h1>
          <p>  ₱ {myMoto.rent} / Day</p>
          <Link href={`/vehiclemodels/${myMoto.name}`}>More Details</Link>
       
       </div>
     ))}
        </div>
  )
}

export default Default