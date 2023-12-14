import axios from 'axios';

export const useGenerator = () => {

    const getCoverLetter = async (description:string) => {
      const response = await axios.post('http://joblin-001-site1.atempurl.com/api/ChatGpt/Cover_letter', {
        content: description,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response Data:', response.data);
      return response.data;
    };
    
    return {
      getCoverLetter
    }

}