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
let names = {
    h1: "Heading 1",
    h2: "Heading 2",
    h3: "Heading 3",
    h4: "Heading 4",
    h5: "Heading 5",
    h6: "Heading 6",
    p: 'paragraphs',
    a: 'links',
    b: 'bold',
    strong: "bold",
    i: 'italic',
    em: "Emphasis",
    u: "underline",
    sub: "subscript",
    sup: "superscript",

    // Structural elements
    div: 'Content Division',
    span: 'span',
    section: 'section',
    article: 'article',
    header: 'header',
    footer: 'footer',
    aside: 'aside',
    nav: 'Navigation Section',
    main: 'main',
    figure: 'figure',
    figcaption: 'figcaption',
    blockquote: 'blockquote',

    // Lists
    ul: "unordered List",
    ol: "ordered List",
    li: "list Item",
    dl: "description List",
    dt: "description Term",
    dd: "description Definition",

    // Forms
    form: 'form',
    input: 'input',
    textarea: 'Text Area',
    button: 'button',
    select: 'select',
    option: 'option',
    label: 'label',
    fieldset: 'fieldset',
    legend: 'legend',

    // Tables
    table: 'table',
    tr: "table Row",
    th: "table Header",
    td: "table Cell",
    tbody: "table Body",
    tfoot: "table Footer",
    thead: "tableHeaderGroup",

};

export default htmlTags; 