import React from "react";
import CreateProfileForm from '../forms/CreateProfileForm/CreateProfileForm';
import { withGlobalState } from 'react-globally'
import rinkLine from "../../assets/images/icerink.png"

const CreateProfile = () => (
    <CreateProfileForm rinkImg={rinkLine} />
);


export default withGlobalState(CreateProfile);
