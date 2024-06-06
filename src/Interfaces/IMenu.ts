export interface IMenuItem {
    titolo: string,
    url: string,
    component?: string,
    sottovoci?: Array<IMenuItem>
}