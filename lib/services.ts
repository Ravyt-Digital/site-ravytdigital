export const websitePath = '/site-profissional';
export const appPath = '/aplicativos';
export const quotePath = '/proposta';
export const estimateId = 'simular-site';
export const estimateHref = '/#' + estimateId;
export const appEstimateHref = '/?projeto=aplicativo#' + estimateId;

export const agencyTitle = 'Sites e Aplicativos para Arquitetos e Engenheiros | Ravyt Digital';
export const agencyDescription = 'Sites, portfólios e aplicativos para arquitetos e engenheiros em todo o Brasil. Apresente projetos e obras, organize rotinas e solicite um orçamento.';

export const projectTypes = [
  {id: 'site', label: 'Criação ou reformulação de site'},
  {id: 'aplicativo', label: 'Criação de aplicativo'},
  {id: 'site-e-aplicativo', label: 'Site e aplicativo'},
  {id: 'nao-sei', label: 'Preciso de orientação'},
] as const;

export type ProjectType = typeof projectTypes[number]['id'];
export const isProjectType = (value: unknown): value is ProjectType => projectTypes.some(item => item.id === value);

export function quoteHref(type?: ProjectType) {
  return type ? quotePath + '?projeto=' + type : quotePath;
}
