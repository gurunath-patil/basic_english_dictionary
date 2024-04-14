import React, { memo } from "react"
import "./style.css"

function DisplayToUI({arg_wordname,arg_audio,arg_partOfSpeech,arg_defination,arg_synonyms, arg_antonyms, arg_source}){
  let audioStatus;
let synonymsStatus = arg_synonyms.length != 0 ? true : false;
let antonymsStatus = arg_antonyms.length != 0 ? true : false;



if(arg_audio.length != 0){
    audioStatus= <audio src={arg_audio} controls></audio>
}else{
    audioStatus= "this word audio not available"
}

    return(<>
    <section className="">
    <div className="row">
        <div className="col-12 d-flex justify-content-center">
        <h2 className="mt-4 text-warning text-decoration-underline">Word: {arg_wordname}</h2>
        </div>
    </div>
    <div className="row mt-4">
        <div className="col-md-4 d-flex align-items-center ms-5 mb-3">
            <h4 className="text-capitalize text-info">part Of Speech: {arg_partOfSpeech}</h4>
        </div>
        <div className="col-md-7 d-flex mt-2">
            {arg_audio && audioStatus}
        </div>
    </div>
    <div className="row mt-3">
        <div className="col-md-12 overflow-hidden">
        <h4 className="ms-5 p-2" id="defination">Defination: </h4>
        <ul className="list-group list-group-flush ms-5 mb-3">
            {arg_defination ? (arg_defination.map((dif,index)=><li className="list-group-item list-group-item-action ms-4 fw-bold" key={index}>{index+1}) {dif.definition}</li>)) : ("")}
        </ul>
        </div>
    </div>
    <div className="row">
        {synonymsStatus &&  <div className="col-md-4">
            <h4 className="ms-5 text-primary">Synonyms:</h4>
            <ul className="list-group list-group-flush ms-5">
                {arg_synonyms.map((sys,index)=> <li className="list-group-item list-group-item-action ms-3 text-capitalize" key={index}>{sys}</li>)}
            </ul>
        </div>}
        {antonymsStatus &&  <div className="col-md-6">
            <h4 className="text-secondary">Antonyms:</h4>
            <ul className="list-group list-group-flush ms-5">
            {arg_antonyms.map((sys,index)=> <li className="list-group-item list-group-item-action ms-3" key={index}>{sys}</li>)}
            </ul>
        </div>}
    </div>
    <div className="h4 mt-3 ms-5 text-danger">Source:<a className="text-decoration-none" target="_blank" href={arg_source}> More Details.....</a></div>
    </section>
    </>)
} 

export default memo(DisplayToUI)