import React from 'react'
import TravelForm from './TravelForm';

const Generate = () => {
      
  

   return(
      <TravelForm />
   );

}


export default Generate;


// const onSubmit = useCallback(async ()=>{

//    const options = {
//      method: 'GET',
//      url: 'https://nlp-translation.p.rapidapi.com/v1/translate',
//      params: {text: enteredText, to: languageTo, from: languageFrom},
//      headers: {
//        'X-RapidAPI-Key': API_KEY,
//        'X-RapidAPI-Host': API_HOST,
//      }
//    }

//    try{
//      setIsLoading(true)
//      const response = await axios.request(options)
//      // console.log(response.data);
//      const toKey = response.data.to
//      const result = response.data.translated_text[toKey];
//      setResultText(result)

//      const id = uuid.v4();
//      response.data.id = id;
//      response.data.dateTime = new Date().toISOString();

//      //dispatching result to addHistory item function of historySlice
//      dispatch(addHistoryItem({item: response.data}))
//    }
//    catch(err){
//      console.log(err);
//      setResultText("")
//    }
//    finally{
//      setIsLoading(false)
//    }
// }, [enteredText, languageTo, languageFrom, dispatch]);