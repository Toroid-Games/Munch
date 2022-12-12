import { Munch, UnMunch, P } from "./libs.js";

let input = ['what am I supposed to think about', 'One two, buckle my shoe, Ok stop that, have some self respect.',
            'Capitals and Punctuation! are not processed', "new lines will also be exposed but this isn't an\nencryption!",
            'unusual characters like ¬ and € or even £ will cause the compression to become larger than the original, So KEEP THESE TO A MINIMUM!',
            'nubers 4 3 2 234', 'is about the speech disorder for goals of treatment for cluttering include unauthorized use is prohibited please be additional strategies that may help people'];
let c = 0;
for(;;){
    if(c < input.length){
        P(input[c] + " " + input[c].length);
        let inp = Munch(input[c]);
        P(inp + " " + inp.length);
        let out = UnMunch(inp);
        P(out + " " + out.length);
    } else { break; }
    c++;
    P(" ");
}
