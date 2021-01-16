export type Route = {
    title: string;
    path: string;
    page: () => JSX.Element;
}