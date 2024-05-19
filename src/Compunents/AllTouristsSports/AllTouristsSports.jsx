

const AllTouristsSports = ({ cook }) => {
    // const { id,  image, name, average_cost, total_visitors_per_year, travel_time, seasonality } = cook;
console.log(cook);
const {tourist_spots} = cook;
    return (
       <>
        {
            tourist_spots.map((sport,idx) => <div key={idx} data-aos="zoom-in" className="card bg-base-100 shadow-xl max-w-6xl mx-auto">
            <figure className="px-4 pt-4">
                <img src={sport.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2>{sport.country}</h2>
                <h2 className="card-title text-[#1DD100] text-3xl">{sport.name}</h2>
                <p className="font-semibold ">{sport.average_cost}</p>
                <p className="w-full text-[#333333a7]">{sport.total_visitors_per_year}</p>
                <p className="w-full text-[#333333a7]">{sport.travel_time}</p>
                <p className="w-full text-[#333333a7]">{sport.seasonality}</p>
                <div className="card-actions"> 
                    <button className="btn btn-primary">View Property</button>
                </div>
            </div>
        </div>)
        }
       </>
    );
};

export default AllTouristsSports;