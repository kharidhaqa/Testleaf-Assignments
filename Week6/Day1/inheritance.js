class webComponent{

    public selector:string

    constructor(selector:string){
        this.selector=selector
        console.log(`Web component is created with selector ${selector}`)
    }
    click(){
        console.log(`Click on the ${this.selector}`)
    }
    focus(){
        console.log(`Focus on the ${this.selector}`)
    }
}

class button extends webComponent{
    
    override click(){
        super.click()
        this.selector="button"
        //console.log(`Click on the new componnent ${this.selector}`)
    }

}

class textInput extends webComponent{
    value = ""
    enterText(text:string){
        this.value=text
        console.log(`Text entered in text box is ${this.value}`)
    }
}

const test = new webComponent('dropdown')
test.click()
test.focus()
const btn = new button('button')
btn.click()
const txt = new textInput('Textbox')
txt.enterText('Hello')
