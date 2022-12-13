import test from 'tape'
import { Munch, P, UnMunch } from "./libs.js";
import Pako from 'pako';

const input = ['$', 'a','what am I supposed to think about', 'One two, buckle my shoe, Ok stop that, have some self respect.',
            'Capitals and Punctuation! are not processed', "new lines will also be exposed but this isn't an\nencryption!",
            'unusual characters like ¬ and € or even £ will cause the compression to become larger than the original, So KEEP THESE TO A MINIMUM!',
            'nubers 4 3 2 234', 'is about the speech disorder for goals of treatment for cluttering include unauthorized use is prohibited please be additional strategies that may help people',
            JSON.stringify(
                {
                    index: 0,
                    transactions: [{
                        index: 0,
                        hash: 'hash',
                        method: 'transfer',
                        params: ['to', 'from', 'amount']
                    }]
                }
            )];


for (let i = 0; i < input.length; i++) {

    test(input[i], tape => {
        tape.plan(2)
        const munched = Munch(input[i])
        const pakood = Pako.deflate(input[i])
        const both = Pako.deflate(munched)

        const munchSize = new TextEncoder().encode(munched).byteLength
        const pakoSize = pakood.byteLength
        const bothSize = both.byteLength
            
        const originalMunch = UnMunch(munched)
        const originalPako = new TextDecoder().decode(Pako.inflate(pakood))
        
        tape.ok(originalMunch === originalPako, 'Decoded Texts are Equal')
        tape.ok(pakoSize > munchSize, 'is smaller then pako')
        console.log(`Pako:${pakoSize} Munch:${munchSize} Both:${bothSize}`)
        P(" ")
    })


        
    
}
