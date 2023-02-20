import {serializable, alias, object, list, primitive} from 'serializr';

export class Donor { 

	@serializable(alias('id', primitive()))
	id?: string;

	@serializable(alias('completion', primitive()))
	completion?: string;

	@serializable(alias('end_date', primitive()))
	endDate?: string;

    @serializable(alias('estimated_amt', primitive()))
	estimatedAmt?: string;
    @serializable(alias('expensed_amt', primitive()))
	expensedAmt?: string;
    
    @serializable(alias('incharge_mobile_number', primitive()))
	inchargeMobileNumber?: string;
    @serializable(alias('incharge_name', primitive()))
	inchargeName?: string;
    @serializable(alias('lat', primitive()))
	lat?: string;
    @serializable(alias('location', primitive()))
	location?: string;
    @serializable(alias('location_name_tamil', primitive()))
	locationNameTamil?: string;
    @serializable(alias('long', primitive()))
	long?: string;
    @serializable(alias('name', primitive()))
	name?: string

    @serializable(alias('project_attachment_url', primitive()))
	projectAttachmentUrl?: string
    // @serializable(alias('project_attachments', list(primitive())))
	// projectAttachments?: Array<string>
    // @serializable(alias('project_blogs', list(primitive())))
	// projectBlogs?: Array<string>
    // @serializable(alias('project_documents', list(primitive())))
	// projectDocuments?: Array<string>
    // @serializable(alias('project_subscribers', list(primitive())))
	// projectSubscribers?:Array<string>
    @serializable(alias('reg_number', primitive()))
	regNumber?: string
    @serializable(alias('start_date', primitive()))
	startDate?: string
    @serializable(alias('status', primitive()))
	status?: string
    @serializable(alias('temple_incharge_name_tamil', primitive()))
	templeInchargeNameTamil?: string
    @serializable(alias('temple_name_tamil', primitive()))
	templeNameTamil?: string
    @serializable(alias('updated_at', primitive()))
	updatedAt?: string
    
    
    
    


}