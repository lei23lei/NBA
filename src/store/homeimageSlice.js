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

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, name: 'Hawks', image: imageHawks },
    { id: 2, name: 'Celtics', image: imageCeltics },
    { id: 3, name: 'Nets', image: imageNets },
    { id: 4, name: 'Hornets', image: imageHornets },
    { id: 5, name: 'Bulls', image: imageBulls },
    { id: 6, name: 'Cavaliers', image: imageCavaliers },
    { id: 7, name: 'Mavericks', image: imageMavericks },
    { id: 8, name: 'Nuggets', image: imageNuggets },
    { id: 9, name: 'Pistons', image: imagePistons },
    { id: 10, name: 'Warriors', image: imageWarriors },
    { id: 11, name: 'Rockets', image: imageRockets },
    { id: 12, name: 'Pacers', image: imagePacers },
    { id: 13, name: 'Clippers', image: imageClippers },
    { id: 14, name: 'Lakers', image: imageLakers },
    { id: 15, name: 'Grizzlies', image: imageGrizzlies },
    { id: 16, name: 'Heat', image: imageHeat },
    { id: 17, name: 'Bucks', image: imageBucks },
    { id: 18, name: 'Timberwolves', image: imageTimberwolves },
    { id: 19, name: 'Pelicans', image: imagePelicans },
    { id: 20, name: 'Knicks', image: imageKnicks },
    { id: 21, name: 'Thunder', image: imageThunder },
    { id: 22, name: 'Magic', image: imageMagic },
    { id: 23, name: '76ers', image: image76ers },
    { id: 24, name: 'Suns', image: imageSuns },
    { id: 25, name: 'Trail Blazers', image: imageTrailBlazers },
    { id: 26, name: 'Kings', image: imageKings },
    { id: 27, name: 'Spurs', image: imageSpurs },
    { id: 28, name: 'Raptors', image: imageRaptors },
    { id: 29, name: 'Jazz', image: imageJazz },
    { id: 30, name: 'Wizards', image: imageWizards }
];

// Create the slice
const homeImageSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {}
});

// Export the reducer
export default homeImageSlice.reducer;