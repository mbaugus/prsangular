export class Menu {
    display: string;
    link: string;
    tooltip: string;
    visible: boolean;
    constructor(display: string, link: string, tooltip: string, visible = true){
        this.display = display;
        this.link = link;
        this.tooltip = tooltip;
        this.visible = visible;
    }
}
