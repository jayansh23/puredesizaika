import React from 'react'
// import {Formik,Form,Field} from 'formik';
import { Formik,Field,Form,ErrorMessage } from 'formik';
import * as Yup from "yup";


const service = () => {
    
    const registration = {
        name: "",
        email: "",
        password: "",
        mobileno: "",
        address: "",
      };
      const schema = Yup.object ({
        name: Yup.string().required("Please Enter Name"),
        email: Yup.string().required("please Enter Email"),
        password: Yup.string().required("please Enter password"),
        mobileno: Yup.string().required("please Enter Mobile No"),
        address: Yup.string().required("please Enter Mobile No")
      });
      const handleSubmit = (values) => {  
        console.log("form values", values);
        const payload = {
         name: values.name,
         email: values.email,
         password: values.password,
         mobileno: values.mobileno,
         address: values.address,
        };
        alert(payload.email + payload.password);


      };


  return (

    <div>
     {/* 1st.method */}
     <h2>Book your favorite Meals</h2>

     <Formik initialValues={registration}
             validationSchema={schema}
             onSubmit={handleSubmit}>
         <Form >
          <div className="row">
          <div className="col-md-4 form-group mt-3">
            <Field  type="text" className="form-control" placeholder="username"  name="name"/>
            <ErrorMessage
                    component="label"
                    className="text-danger"
                    name="name"
                  ></ErrorMessage>
 
            </div>
            <div className="col-md-4 form-group mt-3">
            <Field type="text" class="form-control" placeholder="emailId" name="email" />
            <ErrorMessage
                    component="label"
                    className="text-danger"
                    name="email"
                  ></ErrorMessage>
            </div>
            <div className="col-md-4 form-group mt-3">
            <Field name="phone" type="text" class="form-control" placeholder="phone" />
            
            </div>
            </div>
       <div className="row">

       <div className="col-md-4 form-group mt-3">
            <Field name="Appointment" type="text" class="form-control" placeholder="Appointment" />
            </div>
            <div className="col-md-4 form-group mt-3">
            <Field name="Date" type="text" class="form-control" placeholder="Date" />
            </div>
            <div className="col-md-4 form-group mt-3">
            <Field name="Doctor" type="text" class="form-control" placeholder="Doctor" />
           </div>
    
           <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
            <div className="validate"></div>
        </div>

</div>

 </Form>

    </Formik>


    <p> Optional Area for customer informat for tocon Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam nostrum odio accusantium voluptas beatae labore names
        cupiditate reprehenderit? Odit nemo repellendus dolore!Temporibusquae dolorum, 
        nihil est soluta minus fugiat.</p>
        <h1>Fill your information</h1>

        <h1>Fill your information</h1>

        {/* 2.METHOD */}

<Formik>
      <Form className='formSection'>
          <Field type="text" placeholder="Name" />
          <Field type="number" placeholder="phone No" />
          <Field type="text" placeholder="Email Id" />
      </Form>

</Formik>





    </div>
  )
}

export default service