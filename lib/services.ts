export const websitePath = '/site-profissional';
export const appPath = '/aplicativos';
export const quotePath = '/proposta';
export const estimateId = 'simular-site';
export const estimateHref = '/#' + estimateId;
export const appEstimateHref = '/?projeto=aplicativo#' + estimateId;

export const agencyTitle = 'Criação de Sites e Aplicativos | Ravyt Digital';
export const agencyDescription = 'A Ravyt Digital desenvolve sites e aplicativos sob medida para empresas em todo o Brasil. Conte sobre seu projeto e solicite um orçamento.';

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
