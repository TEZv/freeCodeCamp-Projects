class MarkupArea extends React.Component {
    constructor() {
        super()
        this.state = {
            textValue: 'HeadingOne\n=======\n \n# HeadingTwo\n \nSub-headingOne\n-----------\n\
            \n## Sub-headingTwo\n \n### A smaller heading\n \nParagraphs are separated by a blank line.\n\
            \nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes: *bold*, **italic**,\
            `monospace`, ~~strikethrough~~ .\n\n Unordered list (useof asterisks):\n\n  * butter\n  * sugar\n  * flour\n\
        }