import ComponenteSegundo from "./componente-segundo.js";

export default {
    name: "componenteTerceiro",
    template: `
        <div>
            <div v-html="textoHtml"></div>
            <componente-segundo></componente-segundo>
        </div>
    `,
    data() {
        return {
            textoHtml: "<b>Terceiro componente</b>"
        }
    },
    components: {
        ComponenteSegundo
    }
}