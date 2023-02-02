import React, { useState } from 'react';

const Person = ({person}) => {
    const [details, setDetails] = useState(false);
    const handleSeeDetailsBtn = () =>{
        console.log('click');
        setDetails(!details);
        console.log(details);
    }


    const {company, name, address, username, email, phone} = person;
    return (
        <div className='my-3 mx-2 py-8  bg-slate-100 rounded-[20px] '>
            <div className='grid sm:grid-cols-5 gap-2 items-center '>
                <div className='sm:text-start sm:pl-6'>{company.name}</div>
                <div className='sm:text-start sm:pl-6'>
                    <h2 className='font-bold'>CONTACT</h2>
                    <p>{name}</p>
                </div>
                <div className='sm:text-start sm:pl-6'>
                    <h2 className='font-bold'>CITY</h2>
                    <p>{address?.city}</p>
                </div>
                <div className='sm:text-start sm:pl-6'>
                    <h2 className='font-bold'>STREET</h2>
                    <p>{address?.street}</p>
                </div>
                <div>
                    <button
                    onClick={handleSeeDetailsBtn}
                    className="px-2 py-[2px] text-white font-bold rounded-full bg-red-500 border-none text-sm"
                    >{ details===true? "Hide Details" : "See Details" }</button>
                </div>
            </div>
            {
                details && <div className='shadow-sm mt-4 mx-8 rounded-[15px] text-start p-8 border '>
                    <h2 className='font-bold'>Description</h2>
                    <p className=''>Providing service of domestic flight booking @ lowast price guranteed and also for railway ticket booking, also offering international flight tickets. giving service to our customers since 1995. Now we are going to start Hajj and Umrah very soon for our valuable customers. It will be also @ very affordable price.</p>
                    <div className='grid sm:grid-cols-2'>
                        <div>
                            <div className='mt-2'>
                                <h2 className='font-bold mb-1'>Contact Person</h2>
                                <p>{name}</p>
                            </div>
                            <div className='mt-2'>
                                <h2 className='font-bold mb-1'>Username</h2>
                                <p>{username}</p>
                            </div>
                            <div className='mt-2'>
                                <h2 className='font-bold mb-1'>Email</h2>
                                <p>{email}</p>
                            </div>
                            <div className='mt-2'>
                                <h2 className='font-bold mb-1'>Phone</h2>
                                <p>{phone}</p>
                            </div>
                            
                        </div>
                        <div>
                            <div className='mt-2'>
                                <h2 className='font-bold mb-1'>Address</h2>
                                <p>{address?.street}, {address?.city}-{address?.zipcode}</p>
                            </div>
                            <div className='mt-2'>
                                <h2 className='font-bold mb-1'>Street</h2>
                                <p>{address?.street}</p>
                            </div>
                            <div className='mt-2'>
                                <h2 className='font-bold mb-1'>City</h2>
                                <p>{address?.city}</p>
                            </div>
                            <div className='mt-2'>
                                <h2 className='font-bold mb-1'>Country</h2>
                                <p>India</p>
                            </div>
                            <div className='text-end sm:hidden'>
                                <button
                                    onClick={handleSeeDetailsBtn}
                                    className="px-2 py-[2px] text-white font-bold rounded-full bg-red-500 border-none text-sm w-28"
                                >{details === true ? "Hide Details" : "See Details"}</button>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
            }
        </div>
    );
};

export default Person;