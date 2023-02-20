import axiosInstance from "../interceptor/axiosInstance";
import { deserialize, serialize } from "serializr";

import Notification from "../shared/components/Notification";
import { NotificationTypes } from "../enums/notificationTypes";
import { useState } from "react";
import Donors from "./donors";

import { Project } from "../models/project/projectmodel";

import { ApiRoutes } from "../routes/routeConstants/apiRoutes";

import { countReset } from "console";
import { Donor } from "../models/Donor/donor.model";


const DonorService = () => {



	const [error, setError] = useState<Error>();
	const [listdata, setlistdata] = useState<Array<Donor>>([]);
	const [loading, setLoading] = useState(false);
	




	const listDonor = () => {
		setLoading(true);

		return axiosInstance
			.get(ApiRoutes.DONOR__LIST, {
				params: { role:"donor",page:"1",limit:50 }


			})
			.then((response) => {
				const Donors = deserialize(Donor, response.data["donors"]) as Array<Donor>;
				
                setlistdata(Donors)

			})

	};

	return {
		error,
		loading,
		listDonor,
		listdata
		
	};
};

export default DonorService;
