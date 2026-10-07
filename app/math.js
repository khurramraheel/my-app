  
  export function calculate(a, b, op){

    let c = 0;

        switch(op){

            case '+':
                c = +a + +b;
            break;

             case '/':
                c = a / b;
            break;

            case '*':
                c = a * b;
            break;

             case '-':
                c = a - b;
            break;

        }

        return c;
        

    }