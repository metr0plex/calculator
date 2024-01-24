import { print } from './utils/print.js'
class Calculation{
    constructor() {
        this.calculationLine = ""
        this.result = 0
    }
     Eval(){
        this.result=eval(this.calculationLine.replace('x','*'))
         if(Math.abs(this.result) == Infinity){
             this.calculationLine='Деление на ноль!'
             this.updateDisplay()
         }
         else{
             console.log(this.calculationLine)

             print(this.calculationLine)
             this.calculationLine = this.result.toString()
             this.updateDisplay()
             console.log(this.result)
         }


    }
    setLastSymbolCalculationLine(value){
        if(this.result !== 0 && this.calculationLine === '')
            this.calculationLine = this.result.toString()
            this.calculationLine += value
            console.log(this.calculationLine)
            this.updateDisplay()
    }
    deleteLastSymbol(){
        console.log('строка', this.calculationLine)
        console.log('результ', this.result)
        this.calculationLine = this.calculationLine.slice(0,-1)
        if (this.calculationLine === "")
            this.clean()
        console.log('строка', this.calculationLine)
        console.log('результ', this.result)
        this.updateDisplay()
        console.log('da')
    }
    clean(){
        this.calculationLine = ""
        this.result = 0
        this.updateDisplay()
        
    }
    updateDisplay() {
        print(this.calculationLine || this.result.toString());
    }
}
const main = () => {
    const calculation = new Calculation()
    return (state) => {
        switch (state) {
            case 'АС':
                calculation.clean()
                break;
            case 'С':
                calculation.deleteLastSymbol()
                break;
            case '=':
                calculation.Eval()
                break;

            default:
                calculation.setLastSymbolCalculationLine(state)
        }
    }
}

export default main