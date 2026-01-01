export interface IProject {
  id: string,
  name: string,
  whatIs: string,
  smallDescription: string,
  logo: string,
  link: string | null,
  technologies: string[]
}