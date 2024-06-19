export interface IApi {
    name: string,
    url: string,
    type?: "GET" | "POST" | null,
}