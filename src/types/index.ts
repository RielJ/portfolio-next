export interface IPortfolioCard {
  name: string
  description: string
  image?: string
  link?: string
  tools?: string[]
}

export interface IExperienceData {
  dateStart: string
  dateEnd: string
  company: string
  role: string
  description: string[]
}
