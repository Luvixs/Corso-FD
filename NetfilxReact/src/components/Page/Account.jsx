import Container from 'react-bootstrap/Container';

const Account = () => {
    return (
        <>
            <Container fluid>
            <div class="row justify-content-center">
                <div class="col-4">

                    <h1 class="text-light display-4 fw-normal">Edit Profile</h1>
                    <hr/>

                    <div class="row mt-4 pb-2">
                        <div class="col-12 col-md-auto">
                            <img src="../src/assets/avatar.png" class="img-fluid" width="150px"/>
                        </div>
                        <div class="col-12 col-md">
                            <span class="form-control text-bg-secondary border-0 rounded-0 fs-5">Strive Student</span>
                            <div class="mb-4 mt-4">
                                <h3 class=" text-white-50 fw-normal fs-5 text">Language:</h3>
                                <button class="btn btn-outline-light mt-2 dropdown-toggle rounded-0 btn-sm"><span
                                        class="pe-4">English</span></button>
                            </div>
                            <hr/>
                            <div class="mt-2 pb-2">
                                <h4 class="text-white-50 fw-normal fs-5 text">Maturity Settings:</h4>
                                <button class="btn btn-dark fw-bold my-2">ALL MATURITY SETTINGS</button>
                                <p class="text-light mt-2">Show files for all maturity settings for this profile.
                                </p>
                                <button class="btn btn-outline-secondary rounded-0 px-4">EDIT</button>
                            </div>

                            <hr class="my-4"/>

                            <div>
                                <h4 class="text-white-50 fw-normal fs-5 text">Autoplay Controls:</h4>
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <input class="form-check-input bg-transparent border-white opacity-50 rounded-0 p-3"
                                            type="checkbox" checked />
                                    </div>
                                    <label class="form-check-label" for="flexCheckChecked">Autoplay next episode in a series on all devices</label>
                                </div>
                                <div class="d-flex align-items-center mt-2">
                                    <div class="me-2">
                                        <input class="form-check-input bg-transparent border-white opacity-50 rounded-0 p-3"
                                            type="checkbox" checked />
                                    </div>
                                    <label class="form-check-label" for="flexCheckChecked">Autoplay next episode in a series on all devices</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="my-4"/>
                    <div class="row pt-2 justify-content-center">
                        <div class="col-auto">
                            <button class="btn btn-light px-4 fw-bold rounded-0 btn-lg">SAVE</button>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-outline-secondary px-5 rounded-0 btn-lg">CANCEL</button>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-outline-secondary px-5 rounded-0 btn-lg">DELETE PROFILE</button>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
        </>
    )
}

export default Account