export const websitePath = '/site-profissional';
export const quotePath = '/proposta';
export const estimateId = 'simular-site';
export const estimateHref = '/#' + estimateId;

export const agencyTitle = 'Sites para Arquitetos e Engenheiros | Ravyt Digital';
export const agencyDescription = 'Criação de sites para arquitetos e engenheiros em todo o Brasil. Apresente projetos, obras e serviços em um site profissional e simule seu orçamento.';

export const projectTypes = [
  {id: 'site', label: 'Criação ou reformulação de site'},
  {id: 'nao-sei', label: 'Preciso de orientação'},
] as const;

export type ProjectType = typeof projectTypes[number]['id'];
export const isProjectType = (value: unknown): value is ProjectType => projectTypes.some(item => item.id === value);

export function quoteHref(type?: ProjectType) {
  return type ? quotePath + '?projeto=' + type : quotePath;
}
