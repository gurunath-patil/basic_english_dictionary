import React, { useState } from "react";
import DisplayToUI from "./toUI"

export function SearchBox() {
  const [searchWord, setSearchWord] = useState("");
  const [wordName, setWordName] = useState("");
  const [audioURL, setAudioURL] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState("");
  const [defination, setDefination] = useState();
  const [synonayms, setSynonayms] = useState();
  const [antonyms, setAntonyms] = useState();
  const [sourceURL, setSourceURL] = useState("");

  async function handleSearch() {
    try {
      URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;

      let fetchData = await fetch(URL);
      let convertJson = await fetchData.json();

      if (fetchData.status != 200) {
        throw new Error(convertJson.title);
      }

      let res = convertJson;
      console.log(res);
      setWordName(res[0].word);
      setAudioURL(res[0].phonetics[0].audio);
      setPartOfSpeech(res[0].meanings[0].partOfSpeech);
      setDefination(res[0].meanings[0].definitions);
      setAntonyms(res[0].meanings[0].antonyms);
      setSynonayms(res[0].meanings[0].synonyms);
      setSourceURL(res[0].sourceUrls[0]);
    } catch (error) {
      window.alert(error);
      location.reload()
    }
    debugger
  }

  return (
    <>
      <div className="row" id="searchBarDiv">
        <div className="col-md-7 d-flex align-items-center justify-content-end" >
          <input
            autoComplete="off"
            className="form-control border border-dark w-50"
            type="text"
            name="word"
            placeholder="enter your word here"
            onChange={(e) => setSearchWord(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSearch()
              }
            }}
          />
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <button className="btn btn-dark fw-bold text-light"
            onClick={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
      </div>
      {defination && <DisplayToUI arg_wordname={wordName} arg_audio={audioURL} arg_partOfSpeech={partOfSpeech} arg_defination={defination} arg_synonyms={synonayms} arg_antonyms={antonyms} arg_source={sourceURL} />}
    </>
  );
}
