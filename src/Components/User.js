import React, { useState, useEffect } from 'react';
import Charts from "../Assets/Chart.png"
import Chart2 from "../Assets/Chart2.png"
import Location from "../Assets/Location.png"
import "../Css/User.css"

const User = ({ users }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     if (users && users.length > 0) {
    //         setUserData(users[0]);
    //         setLoading(false);
    //     } else {
    //         setLoading(false);
    //         setError(new Error('No user data found.'));
    //     }
    // }, [users]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     console.error('Error fetching user data:', error);
    //     return <div>Error: {error.message}</div>;
    // }

    return (
        <div className="maindiv">
            <div className="row">
                <div className="col-12 d-flex all-cards">
                    <div className="col-8 d-flex cards_first">
                        <div className="card col-4 customer_card ">
                            <div className='cutomer-div'>
                            <h2>Customers</h2>
                            <p className='number'> 23,543</p>
                            <p className='percentage'>34.3% &#8593;</p>
                            </div>
                           
                            <div className='img-div'>
                                <img className='graph' src={Charts} />
                            </div>
                           
                        </div>
                        <div className="card col-4 customer_card">
                            <div className='cutomer-div'>   
                            <h2>Revenue</h2>
                            <p className='number'>450,082</p>
                            <p className='percentage'>56.5% &#8593;</p>
                            </div>
                            <div className='img-div'>
                                <img className='graph' src={Chart2} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-8'>
                                <div className='card'>
                                    <h3 className='custumer'>Customer Growth</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card customer-Locations">
                            <h3 className='customer_location'>Customers Locations</h3>
                            <p className='days'>Past 7 days</p>
                            <img src={Location} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;