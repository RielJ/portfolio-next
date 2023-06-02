export interface IPortfolioCard {
  name: string
  description: string
  image?: string
}

export interface IExperienceData {
  dateStart: string
  dateEnd: string
  company: string
  role: string
  description: string[]
}
