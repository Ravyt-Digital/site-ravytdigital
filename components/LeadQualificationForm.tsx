"use client";

import { useState } from "react";
import { MARCIO_WHATSAPP_NUMBER, YTALA_WHATSAPP_NUMBER } from "@/lib/contact";

type Errors = Record<string, string>;

export default function LeadQualificationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [started, setStarted] = useState(false);

  const start = () => {
    if (started) return;
    setStarted(true);
    window.dispatchEvent(new CustomEvent("ravyt:conversion", { detail: "form_start" }));
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const required = ["nome", "email", "whatsapp", "produto", "area", "tipo", "servico", "objetivo", "projeto", "consentimento"];
    const next: Errors = {};
    for (const field of required) if (!data.get(field)) next[field] = "Preencha este campo para continuar.";
    const email = String(data.get("email") || "");
    if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "Informe um e-mail válido.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setSubmitting(true);
    window.dispatchEvent(new CustomEvent("ravyt:conversion", { detail: "form_submit" }));
    const message = [
      "Olá! Sou produtor(a) digital na área de Psicologia Parental e gostaria de conversar sobre meu projeto.",
      `Nome: ${data.get("nome")}`,
      `Produto/projeto: ${data.get("produto")}`,
      `Área: ${data.get("area")}`,
      `Tipo: ${data.get("tipo")}`,
      `Serviço: ${data.get("servico")}`,
      `Objetivo: ${data.get("objetivo")}`,
      `Oferta já possui copy: ${data.get("copy") || "Não informado"}`,
      `Já existe página: ${data.get("pagina") || "Não informado"}`,
      `Data desejada: ${data.get("data") || "A definir"}`,
      `Projeto: ${data.get("projeto")}`,
    ].join("\n");
    const selectedService = String(data.get("servico") || "");
    const destinationNumber = selectedService === "Landing Page"
      ? MARCIO_WHATSAPP_NUMBER
      : YTALA_WHATSAPP_NUMBER;
    window.open(`https://wa.me/${destinationNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    window.location.assign("/obrigado");
  };

  const fieldError = (name: string) => errors[name] ? <span className="field-error" id={`${name}-erro`} role="alert">{errors[name]}</span> : null;

  return <form className="lead-form" onFocus={start} onSubmit={submit} noValidate>
    <div className="form-grid">
      <label>Nome<input name="nome" autoComplete="name" aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "nome-erro" : undefined} />{fieldError("nome")}</label>
      <label>E-mail<input name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-erro" : undefined} />{fieldError("email")}</label>
      <label>WhatsApp<input name="whatsapp" type="tel" autoComplete="tel" aria-invalid={!!errors.whatsapp} aria-describedby={errors.whatsapp ? "whatsapp-erro" : undefined} />{fieldError("whatsapp")}</label>
      <label>Nome do produto ou projeto<input name="produto" aria-invalid={!!errors.produto} aria-describedby={errors.produto ? "produto-erro" : undefined} />{fieldError("produto")}</label>
      <label>Área de atuação<input name="area" aria-invalid={!!errors.area} aria-describedby={errors.area ? "area-erro" : undefined} />{fieldError("area")}</label>
      <label>Tipo de produto digital<select name="tipo" defaultValue=""><option value="" disabled>Selecione</option><option>Curso</option><option>Mentoria</option><option>Comunidade</option><option>Evento ou workshop</option><option>Material digital</option><option>Outro</option></select>{fieldError("tipo")}</label>
      <label>Serviço desejado<select name="servico" defaultValue=""><option value="" disabled>Selecione</option><option>Landing Page</option><option>Copywriting</option><option>Landing Page + Copywriting</option></select>{fieldError("servico")}</label>
      <label>Objetivo da página<input name="objetivo" placeholder="Captura, inscrição, venda…" />{fieldError("objetivo")}</label>
      <label>A oferta já possui copy?<select name="copy" defaultValue=""><option value="">Selecione</option><option>Sim</option><option>Não</option><option>Precisa de revisão</option></select></label>
      <label>Já existe uma página?<select name="pagina" defaultValue=""><option value="">Selecione</option><option>Sim</option><option>Não</option></select></label>
      <label>Data desejada para lançamento<input name="data" type="date" /></label>
    </div>
    <label>Explique brevemente o projeto<textarea name="projeto" rows={5} aria-invalid={!!errors.projeto} aria-describedby={errors.projeto ? "projeto-erro" : undefined} />{fieldError("projeto")}</label>
    <label className="form-consent"><input name="consentimento" type="checkbox" value="aceito" /> <span>Autorizo o tratamento destes dados para atendimento comercial, conforme a Política de Privacidade.</span>{fieldError("consentimento")}</label>
    <p className="form-note">Ao enviar, suas informações serão abertas em uma conversa com o WhatsApp oficial da Ravyt. Nenhum conteúdo preenchido é enviado aos pixels ou à ferramenta de análise.</p>
    <button className="button button-light" type="submit" disabled={submitting}>{submitting ? "Abrindo WhatsApp…" : "QUERO CONVERSAR SOBRE MEU PROJETO"}</button>
  </form>;
}
