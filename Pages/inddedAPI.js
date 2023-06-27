import axios from 'axios'

const API_KEY = '5e2348f4e7mshb6454589a469873p15a31bjsn72e6f8d051c9'

export const SearchJobs = async (query) => {
  try {
    const response = await axios.get('https://workable.p.rapidapi.com/%7BAPIKEY%7D/jobs', {
      params: { phase: 'published' },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'workable.p.rapidapi.com'
      }
    });
    return response.data
  } catch (error) {
    throw new Error('Failed to search jobs')
  }
};