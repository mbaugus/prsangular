export class Menu {
    display: string;
    link: string;
    tooltip: string;
    visible: boolean;
    permission = [];

    constructor(
        display: string,
        link: string,
        tooltip: string,
        visible: boolean,
        permission: string[]) {
        this.display = display;
        this.link = link;
        this.tooltip = tooltip;
        this.visible = visible;
        this.permission = permission;
    }
}
