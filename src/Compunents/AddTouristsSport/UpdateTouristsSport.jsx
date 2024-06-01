import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTouristsSport = () => {
    const sport = useLoaderData();

    const { _id, photo, name, country_Name, location, short_description, average_cost, seasonality, travel_time, totaVisitorsPerYear, user_name, User_Email } = sport;

    const handleUpdateTouristsSport = e => {
        e.preventDefault()

        const from = e.target;

        const photo = from.photo.value
        const name = from.name.value
        const country_Name = from.country_Name.value
        const location = from.location.value
        const short_description = from.short_description.value
        const average_cost = from.average_cost.value
        const seasonality = from.seasonality.value
        const travel_time = from.travel_time.value
        const totaVisitorsPerYear = from.totaVisitorsPerYear.value
        const User_Email = from.User_Email.value
        const user_name = from.user_name.value

        const updateSport = { photo, name, country_Name, location, short_description, average_cost, seasonality, travel_time, totaVisitorsPerYear, user_name, User_Email }

        console.log(updateSport);

        fetch(`http://localhost:5001/tourists/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateSport)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="bg-[#daf8f9] ">
            <h2 className="text-4xl text-center font-semibold">Update Tourists Sport</h2>
            <form onSubmit={handleUpdateTouristsSport} className="max-w-7xl mx-auto">
                {/*from PhotoURL */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" type="text" name="photo" defaultValue={photo} placeholder="PhotoURL" id="" />

                        </label>

                    </div>

                </div>
                {/*from name and quantity */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Tourists spot Name</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" type="text" name="name" defaultValue={name} placeholder="tourists_spot_name" id="" />

                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">country Name</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full ml-4" type="text" name="country_Name"
                                defaultValue={country_Name} placeholder="Available Quality" id="" />

                        </label>

                    </div>
                </div>
                {/*from  location and short description */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> location</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" type=" location" name="location" defaultValue={location} placeholder=" location" id="" />

                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>short description
                        <label className="input-group">

                            <input className="input input-bordered w-full ml-4" type="text" name="short_description" defaultValue={short_description} placeholder="Taste" id="" />

                        </label>

                    </div>
                </div>
                {/*from average_cost and seasonality */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Average cost</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" type="text" name="average_cost" defaultValue={average_cost} placeholder="average_cost" id="" />

                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">seasonality</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full ml-4" type="text" name="seasonality" defaultValue={seasonality} placeholder="seasonality" id="" />

                        </label>

                    </div>
                </div>
                {/*from average_cost and seasonality */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Travel time</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" type="text" name="travel_time" defaultValue={travel_time} placeholder="travel_time" id="" />

                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Tota Visitors PerYear</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full ml-4" type="text" name="totaVisitorsPerYear" defaultValue={totaVisitorsPerYear} placeholder="totaVisitorsPerYear" id="" />

                        </label>

                    </div>
                </div>
                {/*from  User Email and seasonality */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> User Email</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" type="email" name="User_Email" defaultValue={User_Email} placeholder=" User-Email" id="" />

                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full ml-4" type="text" name="user_name" defaultValue={user_name} placeholder="user_name" id="" />

                        </label>

                    </div>
                </div>

                <input type="submit" value="Update" className="btn btn-block bg-slate-400" />
            </form>
        </div>
    );
};

export default UpdateTouristsSport;