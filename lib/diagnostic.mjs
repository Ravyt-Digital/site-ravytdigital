export const questions = [
 {key:'channel',title:'Como você divulga seus serviços atualmente?',options:['Principalmente pelo Instagram.','Por indicações e WhatsApp.','Tenho site e redes sociais.','Ainda estou começando.']},
 {key:'goal',title:'O que você mais gostaria de melhorar no seu perfil no Google?',options:['Apresentar melhor meu negócio no Google.','Organizar melhor as informações dos meus serviços.','Melhorar minha presença nas buscas do Google.','Quero melhorar tudo isso.']},
 {key:'google',title:'Quando alguém pesquisa pelo seu serviço no Google, consegue encontrar você?',options:['Sim, consigo ser encontrado.','Apareço, mas minhas informações precisam melhorar.','Acredito que não apareço.','Não sei.']},
 {key:'difficulty',title:'Qual é sua maior dificuldade hoje?',options:['Apresentar meus serviços de maneira profissional.','Fazer mais pessoas conhecerem meu trabalho.','Transmitir confiança a novos clientes.','Não sei por onde começar.']},
 {key:'location',title:'Em qual cidade seu negócio atua?',type:'text',options:[]}
];
export const initialState = {stage:'intro',step:0,answers:[null,null,null,null,null]};
export function isAnswered(value,index){return index===4?typeof value==='string'&&!!value.trim():Number.isInteger(value)&&value>=0&&value<questions[index].options.length;}
export function quizReducer(state,action){
 if(action.type==='start')return {...state,stage:'questions'};
 if(action.type==='select'&&state.stage==='questions'&&((state.step===4&&typeof action.value==='string')||(state.step<4&&isAnswered(action.value,state.step)))){const answers=[...state.answers];answers[state.step]=action.value;return {...state,answers};}
 if(action.type==='next'&&state.stage==='questions'&&isAnswered(state.answers[state.step],state.step)){
  if(state.step===4){const answers=[...state.answers];answers[4]=answers[4].trim();return {...state,answers,stage:'result'};}
  return {...state,step:state.step+1};
 }
 if(action.type==='back')return state.stage==='result'?{...state,stage:'questions',step:4}:state.step>0?{...state,step:state.step-1}:state;
 return state;
}
export function classify(answers){
 if(answers.length!==5||!Array.from({length:5},(_,i)=>isAnswered(answers[i],i)).every(Boolean))throw new Error('Complete as cinco respostas.');
 const [channel,goal,google,difficulty]=answers;
 // Explicit goal takes precedence; starting/uncertainty then existing structure resolve remaining profiles.
 const category=goal===2?'B':channel===3||difficulty===3?'C':channel===2?'D':'A';
 const definitions={
 A:{name:'Apresentação profissional',headline:'Seu principal objetivo é apresentar seu trabalho de maneira mais profissional.',description:'Pelas suas respostas, organizar as informações e os serviços do seu Perfil da Empresa no Google pode ajudar quem procura pelo seu atendimento.'},
 B:{name:'Presença no Google',headline:'Você deseja melhorar a maneira como seu trabalho é encontrado no Google.',description:'Uma avaliação da sua presença digital poderá identificar informações que precisam ser organizadas e oportunidades de otimização.'},
 C:{name:'Estrutura digital',headline:'Você está buscando orientação para organizar sua presença digital.',description:'Uma avaliação inicial pode ajudar a definir quais elementos precisam ser priorizados.'},
 D:{name:'Estrutura existente',headline:'Você já possui canais digitais e deseja avaliar possibilidades de melhoria.',description:'O próximo passo pode ser revisar as informações e os serviços do seu perfil no Google para identificar possíveis melhorias.'}
 };
 const googleNotes=['Você relata que já é encontrado no Google. Uma revisão pode conferir a clareza das informações.','Você percebe que suas informações no Google precisam melhorar. Esse é um ponto para conferir na avaliação.','Você acredita que não aparece no Google. É necessário verificar essa percepção antes de indicar ajustes.','Você ainda não sabe como aparece no Google. A avaliação poderá começar por essa verificação.'];
 return {category,...definitions[category],compatible:true,compatibility:'Interesse declarado em apresentação, organização de serviços ou presença no Google, áreas atendidas pela Ravyt por meio do Perfil da Empresa. Elegibilidade para o Perfil da Empresa depende de avaliação.',goal:questions[1].options[goal],difficulty:questions[3].options[difficulty],googleNote:googleNotes[google]};
}
export function formatPhone(value){const d=String(value).replace(/\D/g,'').slice(0,11);if(d.length<3)return d?`(${d}`:'';return `(${d.slice(0,2)}) ${d.slice(2,d.length>10?7:6)}${d.length>6?'-'+d.slice(d.length>10?7:6):''}`;}
export function validPhone(value){const d=String(value).replace(/\D/g,'');const ddds=['11','12','13','14','15','16','17','18','19','21','22','24','27','28','31','32','33','34','35','37','38','41','42','43','44','45','46','47','48','49','51','53','54','55','61','62','63','64','65','66','67','68','69','71','73','74','75','77','79','81','82','83','84','85','86','87','88','89','91','92','93','94','95','96','97','98','99'];return ddds.includes(d.slice(0,2))&&/^\d{2}9\d{8}$/.test(d)&&! /^(\d)\1{7}$/.test(d.slice(3));}
export function contactErrors({name,phone,consent}){const errors={};if(!name.trim())errors.name='Informe seu nome.';if(!validPhone(phone))errors.phone='Informe um WhatsApp brasileiro com DDD e 9 dígitos.';if(!consent)errors.consent='Autorize o compartilhamento para preparar sua conversa.';return errors;}
// Message is built locally, only on explicit contact authorization. Never pass it to analytics.
export const WHATSAPP_BASE='https://wa.me/5588996956479';
export function whatsappMessage(answers,result,contact){
 const actual=classify(answers);
 // Use the actual calculation even if a caller supplies an outdated result.
 const interpretation=[actual.headline,actual.description].join('\n');
 const lines=questions.map((q,i)=>`${i+1}. ${q.title}\n   Resposta: ${i===4?answers[i].trim():q.options[answers[i]]}`).join('\n\n');
 return `Olá, equipe Ravyt Digital!\n\nAcabei de realizar o diagnóstico de presença digital pelo site e gostaria de conversar sobre oportunidades de melhoria para meu negócio.\n\nMEUS DADOS\n\nNome: ${contact.name.trim()}\n\nWhatsApp: ${contact.phone.trim()}\n\nSite ou perfil profissional: ${contact.profile.trim()||'Não informado'}\n\nCidade: ${answers[4].trim()}\n\nRESPOSTAS DO DIAGNÓSTICO\n\n${lines}\n\nRESULTADO PRELIMINAR\n\n${actual.category} — ${actual.name}\n\n${interpretation}\n\nGostaria de conversar com um especialista da Ravyt Digital sobre os próximos passos.`;
}
export function whatsappUrl(message){return WHATSAPP_BASE+'?text='+encodeURIComponent(message);}
