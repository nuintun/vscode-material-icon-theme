export interface IconJsonOptions {
    activeIconPack?: string;
    hidesExplorerArrows?: boolean;
    opacity?: string;
    folders?: {
        theme?: string;
        color?: string;
        associations?: IconAssociations;
    };
    files?: {
        associations?: IconAssociations;
    };
    languages?: {
        associations?: IconAssociations;
    };
    showWelcomeMessage?: boolean;
    showUpdateMessage?: boolean;
}

export interface IconAssociations {
    [pattern: string]: string;
}
