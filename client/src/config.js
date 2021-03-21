import dotenv from 'dotenv';

dotenv.config();

const API_DEV_URL = process.env.REACT_APP_API_DEV_URL;
const API_LIVE_URL = process.env.REACT_APP_API_LIVE_URL;
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export { API_DEV_URL, API_LIVE_URL, GOOGLE_CLIENT_ID };