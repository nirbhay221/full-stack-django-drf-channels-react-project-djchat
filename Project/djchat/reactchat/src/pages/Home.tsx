
import {Box,CssBaseline, Typography} from "@mui/material"

import PrimaryAppBar from "./templates/PrimaryAppBar";

import PrimaryDraw from "./templates/PrimaryDraw";

import SecondaryDraw from "./templates/SecondaryDraw";
import PopularChannels from "../components/PrimaryDraw/PopularChannels";
import Main from "./templates/Main"
import ExploreCategories from "../components/SecondaryDraw/ExploreCategories";
import ExploreServers from "../components/Main/ExploreServers";

const Home = () =>{
return (

    <>
    <Box sx = {{display:"flex"}}>
        <CssBaseline />
        <PrimaryAppBar />
        <PrimaryDraw>
            <PopularChannels open = {false}/>
        </PrimaryDraw>
        <SecondaryDraw>
            <ExploreCategories />
        </SecondaryDraw>
        <Main >
            <ExploreServers></ExploreServers>
            </Main> 
    </Box>
    </>
);
};
export default Home