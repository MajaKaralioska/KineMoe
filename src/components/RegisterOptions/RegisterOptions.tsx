import './RegisterOptions.scss';

export const RegisterOptions = () => {
    return <div className="container-fluid py-3">
        <div className="row">
            <div className="col-12">
                <div className="container">
                    <div className="row options-wrapper">
                       <div className="col-md-4 align-self-end shadow mb-3">
                        <div className="register">
                           <div className="register-header">
                              <h5>Watch with adds</h5>
                           </div>
                            <p className="paraFree">Free</p>
                            <div className="options">
                                <p>Acsess to Vast Library</p>
                                <p>Unlimited Streaming</p>
                                <p>Multiple Devices</p>
                                <p>No subscription free</p>
                            </div>
                             <button className="btn-green">Register</button>
                         </div>
                        </div>
                        <div className="col-md-4 shadow mb-3">
                            <div className="register">
                                <div className="optimal-choise">
                                    <h5>Optimal Choise</h5>
                                </div>
                           <div className="register-header">
                              <h5>Pay to watch</h5>
                           </div>
                            <p className="paraFree">499den/month</p>
                            <div className="options">
                                <p>Acsess to Vast Library</p>
                                <p>Unlimited Streaming</p>
                                <p>Multiple Devices</p>
                                <p>Watch without ads</p>
                                <p>Offline viewing</p>
                            </div>
                             <button className="btn-green">Register</button>
                         </div>
                        </div>
                        <div className="col-md-4 align-self-end shadow mb-3">
                        <div className="register">
                           <div className="register-header">
                              <h5>Engage end recieve points</h5>
                           </div>
                            <p className="paraFree">Watch with points</p>
                            <div className="options">
                                <p>Earn points when you engage</p>
                                <p>Claim rewards with earned points</p>
                                <p className='pb-4'>No subscription free</p>
                            </div>
                             <button className="btn-green">Register</button>
                         </div>
                       </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
}