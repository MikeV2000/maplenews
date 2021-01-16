export type Route = {
    title: String;
    path: String;
    page: () => JSX.Element;
}