let htmlTags = {
    // Text-related tags
    headings: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    paragraphs: ['p'],
    links: ['a'],
    div: ['div', 'section', 'article', 'header', 'footer', 'aside', 'nav', 'main'],
    table: ['table', 'tr', 'th', 'td', 'tbody', 'tfoot', 'thead'],
    span: ['span'],


    form: ['form'],
    input: ['input'],
    textarea: ['textarea'],
    button: ['button'],
    select: ['select'],
    option: ['option'],
    label: ['label'],
    fieldset: ['fieldset'],
    legend: ['legend'],

    underline: ['u'],
    subscript: ['sub'],
    superscript: ['sup'],
    bold: ['b', 'strong'],
    italic: ['i', 'em'],
    // Structural elements

    figure: ['figure'],
    figcaption: ['figcaption'],
    blockquote: ['blockquote'],

    // Lists
    unorderedList: ['ul'],
    orderedList: ['ol'],
    listItem: ['li'],
    descriptionList: ['dl', 'dt', 'dd'],

    // Forms


    // Tables

};
export let names = {
    h1: "Heading 1",
    h2: "Heading 2",
    h3: "Heading 3",
    h4: "Heading 4",
    h5: "Heading 5",
    h6: "Heading 6",
    p: 'Paragraphs',
    a: 'Link',
    b: 'Bold',
    strong: "Bold",
    i: 'Italic',
    em: "Emphasis",
    u: "Underline",
    sub: "Subscript",
    sup: "Superscript",

    // Structural elements
    div: 'Content Division',
    span: 'Span',
    section: 'Section',
    article: 'Article',
    header: 'Header',
    footer: 'Footer',
    aside: 'Aside',
    nav: 'Navigation Section',
    main: 'Main',
    figure: 'Figure',
    figcaption: 'Figcaption',
    blockquote: 'Blockquote',

    // Lists
    ul: "Unordered List",
    ol: "Ordered List",
    li: "List Item",
    dl: "Description List",
    dt: "Description Term",
    dd: "Description Definition",

    // Forms
    form: 'Form',
    input: 'Input',
    textarea: 'Text Area',
    button: 'Button',
    select: 'Select',
    option: 'Option',
    label: 'Label',
    fieldset: 'Fieldset',
    legend: 'Legend',

    // Tables
    table: 'Table',
    tr: "Table Row",
    th: "Table Header",
    td: "Table Cell",
    tbody: "Table Body",
    tfoot: "Table Footer",
    thead: "TableHeaderGroup",

};
export const cssFonts = [
    // ✅ Generic Font Families
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",

    // ✅ Web-Safe Fonts
    "Arial",
    "Verdana",
    "Tahoma",
    "Trebuchet MS",
    "Georgia",
    "Times New Roman",
    "Courier New",
    "Lucida Console",
    "Comic Sans MS",

    // ✅ Modern System Fonts
    "Inter",
    "Poppins",
    "Roboto",
    "Lato",
    "Montserrat",
    "Nunito",
    "Raleway",
    "Merriweather",
    "Oswald",
    "Playfair Display",

    // ✅ Mac System Fonts
    "San Francisco",
    "Helvetica Neue",
    "Geneva",
    "Gill Sans",

    // ✅ Windows System Fonts
    "Segoe UI",
    "Franklin Gothic Medium",
    "Candara",

    // ✅ Linux System Fonts
    "Ubuntu",
    "DejaVu Sans",
    "Liberation Sans",

    // ✅ Monospace (Code) Fonts
    "Consolas",
    "Courier",
    "Fira Code",
    "JetBrains Mono",
    "Source Code Pro"
];

export default htmlTags;

export function transform(theme: array) {
    let styles = `<?xml version="1.0" encoding="UTF-8"?>`

    theme.map(selector => {
        return (
            `
<element name="${selector.tag}" id="${selector.id}" class="${selector.class}">
<color>
    <textColor>${selector.textColor}</textColor>
    <backgroundColor>${selector.backgroundColor}</backgroundColor>
    <borderColor>${selector.borderColor}</borderColor>
</color>
<police>
    <fontFamily>${selector.fontFamily}</fontFamily>
    <fontStyle>${selector.fontStyle}</fontStyle>
     <fontWeight>${selector.fontWeight}</fontWeight>
     <fontSize unit="${selector.fontSize[1]}">${selector.fontSize[0]}</fontSize>
     
    <textAlign>${selector.textAlign}</textAlign>
</police>
<alignement>
    <width unit="${selector.width[1]}">${selector.width[0]}</width>
    <height unit="${selector.height[1]}">${selector.height[0]}</height>
    <margin unit="${selector.margin[1]}">${selector.margin[0]}</margin>
    <padding unit="${selector.padding[1]}">${selector.padding[0]}</padding>
</alignement>
</element>                    
            `
        )
    })

}