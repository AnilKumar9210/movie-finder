import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config ();
const app = express ();
const PORT = process.env.PORT || 5000;

app.use (cors ());

const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTQyN2U5NjhiOGYwZmRkZjIxNzc1OGIzMjNlMjM3NCIsIm5iZiI6MTc1ODAwMjAwNC42NTYsInN1YiI6IjY4YzhmYjU0ZTFlYjZmNjlhMTgwNGU3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VUQZF9wvWDSW2mCXHF4fwZSD5v6ZTv7ThBw-Sc805tI';

//proxy route for genres

app.get ('/api/genres',async (req,res)=> {
    try {
        const response = await fetch ("https://api.themoviedb.org/3/genre/movie/list?language=en",
            {
                headers:{
                    Authorization:`Bearer${ACCESS_TOKEN}`,
                    accept:'application/json',
                }
            }
        )

        const data = await response.json ();
        res.json (data);
    } catch (error) {
        console.error(error);
        res.status (500).json ({error:"Access failed"});
    }
})

//proxy route for movies by genres

app.get ('/api/movies/:genreId',async (req,res)=> {
    try {
        const response = await fetch (`https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&language=en-US&page=1`, {
            headers : {
                Application : `Bearer${ACCESS_TOKEN}`,
                accept:'application/json'
            }
        })
        const data = response.json ();
        res.json (data);
    } catch (error) {
        console.error (error);
        res.status (500).json ({error:'Failed to fetch movies by genres'});
    }
})

app.listen (PORT, ()=> {
    console.log(`server running on https://localhost:${PORT}`);
})