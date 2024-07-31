import axios from "axios";

const API_URL = "http://localhost:3001/api"; 

// Export api which is used to connect the backend api's
export const registerUser = (userData) => axios.post(`${API_URL}/user`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/authenticate`, userData);
export const getUserData = (token) => axios.get(`${API_URL}/data`, { headers: { Authorization: `Bearer ${token}` } });
export const resetPassword = (email) => axios.post(`${API_URL}/reset-password`, { email });
export const updatePassword = (token, newPassword) => axios.post(`${API_URL}/update-password`, { token, newPassword });
export const getReferralLink = (token) => axios.get(`${API_URL}/referral-link`, { headers: { Authorization: `Bearer ${token}` } });
export const getUserPositionAndReferrals = (token) => axios.get(`${API_URL}/user/position-and-referrals`, { headers: { Authorization: `Bearer ${token}` } });
export const getUsersInQueue = (token) => axios.get(`${API_URL}/users/queue`, { headers: { Authorization: `Bearer ${token}` } });
