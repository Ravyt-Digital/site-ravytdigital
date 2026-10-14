export const questions = [
 {key:'channel',title:'Como você divulga seus serviços atualmente?',options:['Principalmente pelo Instagram.','Por indicações e WhatsApp.','Tenho site e redes sociais.','Ainda estou começando.']},
 {key:'goal',title:'O que você mais gostaria de melhorar na sua presença digital?',options:['Ter um site profissional para apresentar meu trabalho.','Organizar melhor as informações dos meus serviços.','Melhorar minha presença nas buscas do Google.','Quero melhorar tudo isso.']},
 {key:'google',title:'Quando alguém pesquisa pelo seu serviço no Google, consegue encontrar você?',options:['Sim, consigo ser encontrado.','Apareço, mas minhas informações precisam melhorar.','Acredito que não apareço.','Não sei.']},
 {key:'difficulty',title:'Qual é sua maior dificuldade hoje?',options:['Apresentar meus serviços de maneira profissional.','Fazer mais pessoas conhecerem meu trabalho.','Transmitir confiança a novos clientes.','Não sei por onde começar.']},
 {key:'location',title:'Onde você presta seus serviços?',options:['Tianguá, Ceará.','Tianguá e cidades próximas.','Outra cidade.']}
];
export const initialState = {stage:'intro',step:0,answers:[null,null,null,null,null]};
export function quizReducer(state,action){
 if(action.type==='start')return {...state,stage:'questions'};
 if(action.type==='select'&&state.stage==='questions'&&Number.isInteger(action.value)&&action.value>=0&&action.value<questions[state.step].options.length){const answers=[...state.answers];answers[state.step]=action.value;return {...state,answers};}
 if(action.type==='next'&&state.stage==='questions'&&state.answers[state.step]!==null)return state.step===4?{...state,stage:'result'}:{...state,step:state.step+1};
 if(action.type==='back')return state.stage==='result'?{...state,stage:'questions',step:4}:state.step>0?{...state,step:state.step-1}:state;
 return state;
}
export function classify(answers){
 if(answers.length!==5||answers.some((v,i)=>!Number.isInteger(v)||v<0||v>=questions[i].options.length))throw new Error('Complete as cinco respostas.');
 const [channel,goal,google,difficulty,location]=answers;
 // Explicit goal takes precedence; starting/uncertainty then existing structure resolve remaining profiles.
 const category=goal===2?'B':channel===3||difficulty===3?'C':channel===2?'D':'A';
 const definitions={
 A:{name:'Apresentação profissional',headline:'Seu principal objetivo é apresentar seu trabalho de maneira mais profissional.',description:'Pelas suas respostas, organizar seus serviços em um site próprio pode ser um caminho interessante para fortalecer sua apresentação digital.'},
 B:{name:'Presença no Google',headline:'Você deseja melhorar a maneira como seu trabalho é encontrado no Google.',description:'Uma avaliação da sua presença digital poderá identificar informações que precisam ser organizadas e oportunidades de otimização.'},
 C:{name:'Estrutura digital',headline:'Você está buscando orientação para organizar sua presença digital.',description:'Uma avaliação inicial pode ajudar a definir quais elementos precisam ser priorizados.'},
 D:{name:'Estrutura existente',headline:'Você já possui canais digitais e deseja avaliar possibilidades de melhoria.',description:'O próximo passo pode ser verificar se suas informações, apresentação e estrutura técnica estão alinhadas aos seus objetivos.'}
 };
 const googleNotes=['Você relata que já é encontrado no Google. Uma revisão pode conferir a clareza das informações.','Você percebe que suas informações no Google precisam melhorar. Esse é um ponto para conferir na avaliação.','Você acredita que não aparece no Google. É necessário verificar essa percepção antes de indicar ajustes.','Você ainda não sabe como aparece no Google. A avaliação poderá começar por essa verificação.'];
 return {category,...definitions[category],compatible:true,compatibility:'Interesse declarado em site, organização de serviços ou presença no Google, áreas atendidas pela Ravyt. Elegibilidade para o Perfil da Empresa depende de avaliação.',goal:questions[1].options[goal],difficulty:questions[3].options[difficulty],googleNote:googleNotes[google],locationNote:location===2?'Projetos de outras cidades também podem ser avaliados. Informe sua cidade durante a conversa.':'Sua região de atendimento corresponde ao foco inicial da campanha: Tianguá e região.'};
}
export function formatPhone(value){const d=String(value).replace(/\D/g,'').slice(0,11);if(d.length<3)return d?`(${d}`:'';return `(${d.slice(0,2)}) ${d.slice(2,d.length>10?7:6)}${d.length>6?'-'+d.slice(d.length>10?7:6):''}`;}
export function validPhone(value){const d=String(value).replace(/\D/g,'');const ddds=['11','12','13','14','15','16','17','18','19','21','22','24','27','28','31','32','33','34','35','37','38','41','42','43','44','45','46','47','48','49','51','53','54','55','61','62','63','64','65','66','67','68','69','71','73','74','75','77','79','81','82','83','84','85','86','87','88','89','91','92','93','94','95','96','97','98','99'];return ddds.includes(d.slice(0,2))&&/^\d{2}9\d{8}$/.test(d)&&! /^(\d)\1{7}$/.test(d.slice(3));}
export function contactErrors({name,phone,consent}){const errors={};if(!name.trim())errors.name='Informe seu nome.';if(!validPhone(phone))errors.phone='Informe um WhatsApp brasileiro com DDD e 9 dígitos.';if(!consent)errors.consent='Autorize o contato para enviar sua solicitação.';return errors;}
export function leadFields(answers,result,contact,campaign={},now=new Date()){
 const fields={name:contact.name.trim(),phone:contact.phone,professional_profile:contact.profile.trim()||'Não informado',interest_category:`${result.category} — ${result.name}`,preliminary_compatibility:result.compatible?'Compatível com avaliação inicial':'Requer avaliação',compatibility_reason:result.compatibility,lead_source:'Diagnóstico Ravyt',submitted_at:now.toISOString(),contact_consent:'Autorização explícita de contato concedida',consent_text:'Autorizo a Ravyt Digital a utilizar os dados informados para responder à minha solicitação e entrar em contato sobre os serviços apresentados, conforme a Política de Privacidade.',privacy_policy_version:'2026-10-14'};
 questions.forEach((q,i)=>fields[`diagnostic_${q.key}`]=`${q.title} — ${q.options[answers[i]]}`);
 for(const key of ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'])if(campaign[key])fields[key]=String(campaign[key]).slice(0,200);
 return fields;
}
export async function submitLead(fields,fetcher=fetch){
 const values={...fields,access_key:'12456711-3ce4-4bee-bdf2-30d72e95328c',subject:'Novo Diagnóstico Ravyt | Tianguá',from_name:'Diagnóstico Ravyt Digital',botcheck:''};
 const response=await fetcher('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(values)});
 const result=await response.json();if(!response.ok||result?.success!==true)throw new Error('Não foi possível enviar.');
 return true;
}
