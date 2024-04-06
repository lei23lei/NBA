import {createSlice} from '@reduxjs/toolkit';
import image76ers from "../nba-images/76ers.svg";
import imageBucks from "../nba-images/Bucks.svg";
import imageBulls from "../nba-images/Bulls.svg";
import imageCavaliers from "../nba-images/Cavaliers.svg";
import imageCeltics from "../nba-images/Celtics.svg";
import imageClippers from "../nba-images/Clippers.svg";
import imageGrizzlies from "../nba-images/Grizzlies.svg";
import imageHawks from "../nba-images/Hawks.svg";
import imageHeat from "../nba-images/Heat.svg";
import imageHornets from "../nba-images/Hornets.svg";
import imageJazz from "../nba-images/Jazz.svg";
import imageKings from "../nba-images/Kings.svg";
import imageKnicks from "../nba-images/Knicks.svg";
import imageLakers from "../nba-images/Lakers.svg";
import imageMagic from "../nba-images/Magic.svg";
import imageMavericks from "../nba-images/Mavericks.svg";
import imageNets from "../nba-images/Nets.svg";
import imageNuggets from "../nba-images/Nuggets.svg";
import imagePacers from "../nba-images/Pacers.svg";
import imagePelicans from "../nba-images/Pelicans.svg";
import imagePistons from "../nba-images/Pistons.svg";
import imageRaptors from "../nba-images/Raptors.svg";
import imageRockets from "../nba-images/Rockets.svg";
import imageSpurs from "../nba-images/Spurs.svg";
import imageSuns from "../nba-images/Suns.svg";
import imageThunder from "../nba-images/Thunder.svg";
import imageTimberwolves from "../nba-images/Timberwolves.svg";
import imageTrailBlazers from "../nba-images/Trail.svg";
import imageWarriors from "../nba-images/Warriors.svg";
import imageWizards from "../nba-images/Wizards.svg";

const initialState = 
    [

    ];

// get the team name parameter and set the image accordingly
const homeImageSlice = createSlice({
    name: 'homeImage',
    initialState,
    reducers: {
        setHomeImage: (state, action) => {
            const imageMap = {
                1: imageHawks,
                2: imageCeltics,
                3: imageNets,
                4: imageHornets,
                5: imageBulls,
                6: imageCavaliers,
                7: imageMavericks,
                8: imageNuggets,
                9: imagePistons,
                10: imageWarriors,
                11: imageRockets,
                12: imagePacers,
                13: imageClippers,
                14: imageLakers,
                15: imageGrizzlies,
                16: imageHeat,
                17: imageBucks,
                18: imageTimberwolves,
                19: imagePelicans,
                20: imageKnicks,
                21: imageThunder,
                22: imageMagic,
                23: image76ers,
                24: imageSuns,
                25: imageTrailBlazers,
                26: imageKings,
                27: imageSpurs,
                28: imageRaptors,
                29: imageJazz,
                30: imageWizards,
            };
            state.homeImage = imageMap[action.payload] || null;
        }
    }
});

//export
export const {setHomeImage} = homeImageSlice.actions;
export default homeImageSlice.reducer;