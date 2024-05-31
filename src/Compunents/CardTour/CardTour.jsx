import Swal from 'sweetalert2'
const CardTour = ({tour}) => {

    const {_id, photo, name, country_Name, location, short_description, average_cost, seasonality, travel_time, totaVisitorsPerYear, user_name, User_Email} = tour;

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }





    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl border-2 mb-2 p-3">
                <figure><img className="w-96 h-96 rounded-lg" src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className="font-semibold">Country Name :</span>{country_Name}</h2>
                    <h2 className="card-title"><span>Tourists_Sport Name :</span>{name}</h2>
                    <p><span className="font-semibold">Details :</span>{short_description}</p>
                    <p><span className="font-semibold">Location :</span>{location}</p>
                    <p><span className="font-semibold">Cost :</span>{average_cost}</p>
                    <p><span className="font-semibold">Season :</span>{seasonality}</p>
                    <p><span className="font-semibold">Travel Time :</span>{travel_time}</p>
                    <p><span className="font-semibold">Visitor Per Year :</span>{totaVisitorsPerYear}</p>
                    <p><span className="font-semibold">Your Name :</span>{user_name}</p>
                    <p><span className="font-semibold">Your Email :</span>{User_Email}</p>
                    
                    <div className="card-actions justify-center">
                        <button className="btn bg-orange-300 ">View</button>
                        <button className="btn bg-green-400">Edit</button>
                        <button 
                        onClick={()=> handleDelete(_id)}
                        className="btn bg-red-500 ">Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardTour;