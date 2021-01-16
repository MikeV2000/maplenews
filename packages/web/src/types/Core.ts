import {SemanticCOLORS} from "semantic-ui-react";

export type Route = {
    title: string;
    path: string;
    page: () => JSX.Element;
    color: SemanticCOLORS;
}