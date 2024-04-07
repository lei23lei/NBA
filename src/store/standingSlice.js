import {createSlice} from '@reduxjs/toolkit';
const ranking = [
    {id: 1, conference: 'East', name: 'Atlanta Hawks', w:36, l:40},
    {id: 2, conference: 'East', name: 'Boston Celtics', w:60, l:16},
    {id: 3, conference: 'East', name: 'Brooklyn Nets',w:30,l:47},
    {id: 4, conference: 'East', name: 'Charlotte Hornets',w:18,l:58},
    {id: 5, conference: 'East', name: 'Chicago Bulls',w:36,l:40},
    {id: 6, conference: 'East', name: 'Cleveland Cavaliers',w:46,l:31},
    {id: 7, conference: 'West', name: 'Dallas Mavericks',w:45,l:30},
    {id: 8, conference: 'West', name: 'Denver Nuggets',w:53,l:23},
    {id: 9, conference: 'East', name: 'Detroit Pistons',w:13,l:63},
    {id: 10, conference: 'West', name: 'Golden State Warriors',w:41,l:34},
    {id: 11, conference: 'West', name: 'Houston Rockets',w:38,l:37},
    {id: 12, conference: 'East', name: 'Indiana Pacers',w:43,l:34},
    {id: 13, conference: 'West', name: 'LA Clippers',w:47,l:28},
    {id: 14, conference: 'West', name: 'Los Angeles Lakers',w:44,l:33},
    {id: 15, conference: 'West', name: 'Memphis Grizzlies',w:28,l:50},
    {id: 16, conference: 'East', name: 'Miami Heat',w:42,l:33},
    {id: 17, conference: 'East', name: 'Milwaukee Bucks',w:47,l:29},
    {id: 18, conference: 'West', name: 'Minnesota Timberwolves',w:53,l:23},
    {id: 19, conference: 'West', name: 'New Orleans Pelicans',w:45,l:31},
    {id: 20, conference: 'East', name: 'New York Knicks',w:44,l:31},
    {id: 21, conference: 'West', name: 'Oklahoma City Thunder',w:52,l:24},
    {id: 22, conference: 'East', name: 'Orlando Magic',w:45,l:31},
    {id: 23, conference: 'East', name: 'Philadelphia 76ers',w:41,l:35},
    {id: 24, conference: 'West', name: 'Phoenix Suns',w:45,l:31},
    {id: 25, conference: 'West', name: 'Portland Trail Blazers',w:20,l:56},
    {id: 26, conference: 'West', name: 'Sacramento Kings',w:44,l:31},
    {id: 27, conference: 'West', name: 'San Antonio Spurs',w:18,l:59},
    {id: 28, conference: 'East', name: 'Toronto Raptors',w:23,l:53},
    {id: 29, conference: 'West', name: 'Utah Jazz',w:29,l:47},
    {id: 30, conference: 'East', name: 'Washington Wizards',w:15,l:62}
];


const standingSlice = createSlice({
    name: 'standings',
    initialState: ranking,
    reducers: {
        updeateStanding(state, action) {
            state = action.payload;
        }
    }
});

export const { updeateStanding } = standingSlice.actions;
export default standingSlice.reducer;