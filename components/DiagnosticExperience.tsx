'use client';
import {useState} from 'react';
import Diagnostic from './Diagnostic';
export default function DiagnosticExperience(){
 const [completed,setCompleted]=useState(false);
 return <>{!completed&&<div className="dg-intro"><h1>Descubra como melhorar <em>sua presença digital.</em></h1><p className="dg-lead">Responda 5 perguntas rápidas e receba uma avaliação inicial do seu negócio.</p></div>}<Diagnostic onComplete={()=>setCompleted(true)}/></>;
}
