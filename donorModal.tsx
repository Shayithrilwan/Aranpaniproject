import React, { useState } from 'react';
import { Button, CheckboxOptionType, Modal, Radio } from 'antd';
import { Field, Formik, useFormik } from 'formik';

import "./donor.scss";
import UserService from '../project/projectService';
import { useEffect } from 'react';
import axiosInstance from '../interceptor/axiosInstance';
import ProjectService from '../project/projectlistservice';
import { donorValidationSchema } from './donorValidationSchema';
import { EyeFilled } from '@ant-design/icons';
import MetaService from '../services/meta.service';
import { Select, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { Value } from 'sass';
import DonorService from './donorservice';
import DonorServices from './donorlistservice';

const DonorModal = ({ visible, closemodule }: { visible: boolean, closemodule: Function }) => {


    const {listDonor,error}=DonorServices()
  const [modal1Open, setModal1Open] = useState(false)
  const [select, setselect] = useState()

  const ser = DonorService()
  const onSubmit = async (values: any) => {
    resetForm(values)
    console.log(values);
    const data = { ...values }


      

    const trial = await ser.createUser(data)
    if(!error){
    closemodule();
    listDonor()}
    
    
    console.log(trial)
   


  };

  const {
    values,
    errors,
    touched,


    isSubmitting,
    handleBlur,
    setFieldValue,
     resetForm,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      donorName: "",

    mobileNumber: "",
    email: "",
    guardianName: "",
      countryId: "",
      pincode: "",
      addressLine1: "",
      genderId: "",
      identificationCardId: "",
      identificationCardValue: "",
      pan: "",
      age: "",
      subscription: "",
      representativeId: "",
      status:""




    },

    onSubmit,
    

  });
  const { gender, countries, subscription, representatives, identificationcards, representative, genderdata, country, subscriptions, identification } = MetaService()
  // console.log(genderdata);
  // console.log(country);
  // console.log(subscriptions);
  // console.log(representative);
  // console.log(identification);





  useEffect(() => {

    gender()
    countries()
    subscription()
    representatives()
    identificationcards()
  }, [])


  return (
    <Modal
      className='modal__project'
      title="New Donor"
      style={{ top: 20 }}
      closeIcon={<CloseOutlined onClick={() => closemodule()} />}
      visible={visible} footer={null}
      onCancel={() => setModal1Open(false)}>



      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="donor__name__block"><label htmlFor="donorname">Donor name</label>
          <input
            value={values.donorName}
            onChange={handleChange}
            type="name"
            name='donorName'
            placeholder="Type name"
            onBlur={handleBlur}
            className="donor__name"


          />
        </div>
        {errors.donorName && touched.donorName && <span className="error">{errors.donorName}</span>}
        <div className="phone__number__block"><label htmlFor="phonenumber">Phone Number</label>
          <input
            value={values.mobileNumber}
            onChange={handleChange}

            type="name"
            name='mobileNumber'
            placeholder="Type name"
            onBlur={handleBlur}
            className="phone__number"


          />
        </div>
        {errors.mobileNumber && touched. mobileNumber && <span className="error">{errors.mobileNumber}</span>}
        <div className="email__id__block"><label htmlFor="emailid">Email Id</label>
          <input
            value={values.email}
            onChange={handleChange}
            id="Temple__Incharge__Name"
            name="email"
            type=" mobileNumber"
            placeholder="Type name"
            onBlur={handleBlur}
            className="email__id"


          />
        </div>
        {errors.email && touched.email&& <span className="error">{errors.email}</span>}

        <div className="father__or__husband__block"><label htmlFor="fatherorhusband">Father/Husband name</label>
          <input
            value={values.guardianName}
            onChange={handleChange}
            id="கோவில்__பொறுப்பாளர்__பெயர்"
            type="name"
            name='guardianName'
            placeholder="Type name"
            onBlur={handleBlur}
            className="father__or__husband"


          />
        </div>
        {errors.guardianName && touched.guardianName&& <span className="error">{errors.guardianName}</span>}



        <div className="pincode__block"><label htmlFor="pincode">Pincode</label>
          <input
            value={values.pincode}
            onChange={handleChange}
            name="pincode"
            type="name"
            placeholder="Type name"
            onBlur={handleBlur}
            className="pincode"


          />
        </div>
        {errors.pincode && touched.pincode && <span className="error">{errors.pincode}</span>}
        <div className=" address__block"><label htmlFor=" address"> Address</label>
          <textarea
            value={values.addressLine1}
            onChange={handleChange}
            name="addressLine1"

            placeholder="Type name"
            onBlur={handleBlur}
            className="address"


          />
        </div>
        {errors.addressLine1 && touched.addressLine1 && <span className="error">{errors.addressLine1}</span>}



        

        <div className=" iDCardNumber__block"><label htmlFor=" iDCardNumber">ID Card Number</label>
          <input
            value={values.identificationCardValue}
            onChange={handleChange}
            name="identificationCardValue"

            placeholder="Type name"
            onBlur={handleBlur}
            className="iDCardNumber"


          />
        </div>

        {errors.identificationCardValue && touched.identificationCardValue&& <span className="error">{errors.identificationCardValue}</span>}

        <div className=" panNumber__block"><label htmlFor=" panNumber">PAN Number</label>
          <input
            value={values.pan}
            onChange={handleChange}
            name="pan"

            placeholder="Type name"
            onBlur={handleBlur}
            className="panNumber"


          />
        </div>

        {errors.pan && touched.pan && <span className="error">{errors.pan}</span>}

        <div className="age__block"><label htmlFor=" age">Age</label>
          <input
            value={values.age}
            onChange={handleChange}
            name="age"

            placeholder="Type name"
            onBlur={handleBlur}
            className="age"


          />
        </div>

        {errors.age && touched.age && <span className="error">{errors.age}</span>}

       

        <div className="status__block"><label htmlFor=" age">Status</label>
          <input
            value={values. status}
            onChange={handleChange}
            name="status"

            placeholder="Type name"
            onBlur={handleBlur}
            className="status"


          />
        </div>



        <span className='donor__form__gender'>Gender</span>
        
        <Radio.Group options={genderdata as CheckboxOptionType[]} onChange={handleChange} value={values.genderId} name="genderId" />
         

        

        <span className='donor__form__country'>Country</span>
        <Select

          style={{ width: 455  }}
          placeholder="select"
          options={country as CheckboxOptionType[]}
          value={values.countryId}
          onChange={(Value) => setFieldValue("countryId", Value)}
        />
        <span className='donor__form__idcard'>IDCard</span>
          
        <Select

          style={{ width: 455, height:20   }}
          placeholder="select"
          options={identification as CheckboxOptionType[]}
          value={values.identificationCardId}
          onChange={(Value) => setFieldValue("identificationCardId", Value)}
          className="identication"
        />
        
          <span className='donor__form__subcription'>Sunscriptions</span>
        <Select

          style={{ width: 455  }}
          placeholder="select"
          options={subscriptions as CheckboxOptionType[]}
          value={values.subscription}
          onChange={(Value) => setFieldValue("subscription", Value)}
        />
        <span className='donor__form__representtive'>Representative</span>
        <Select

          style={{ width: 455  }}
          placeholder="select"
          options={representative as CheckboxOptionType[]}
          value={values.representativeId}
          onChange={(Value) => setFieldValue("representativeId", Value)}
        />



        <button className="model__button" type="submit"   >
          Create project
        </button>








      </form>



    </Modal>
  );
};

export default DonorModal;