import axiosInstance from "../interceptor/axiosInstance";
import { deserialize,serialize } from "serializr";
import { Donorform } from "../models/Donorform/Donorform.model";
import Notification from "../shared/components/Notification";
import { NotificationTypes } from "../enums/notificationTypes";
import { useState } from "react";



import { ApiRoutes } from "../routes/routeConstants/apiRoutes";


const DonorService = () => {
	
      
	const [error, setError] = useState<Error>();

	const [loading, setLoading] = useState(false);

	

	const createUser = (data: Donorform) => {
		let out =serialize(Donorform,data)
		out = {...out, country_name: "ahjvwe",subscription_scheme_id:3,isd_code:"+91",age:96,status:1}
		setLoading(true);
		
		return axiosInstance
		       
			.post(ApiRoutes. DONORFORMDATA,out)
			.then((response) => {
				const user = deserialize(Donorform, response.data["donor"]);
				Notification({
					message: "SUBMIT",
					description: "submitted in successfully",
					type: NotificationTypes.SUCCESS,
				});
				
			})
			.catch((error) => {
				Notification({
					message: "submit failed",
					description: "incorrect data ",
					type: NotificationTypes.ERROR,
				});
			
				setError(error);
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
		
		
	};

	return {
		error,
		loading,
		createUser,
	};
};

export default DonorService;
