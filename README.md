# Munch by Toroid Games 12/12/2022 (MIT License)
Word Compression, utilising a bespoke dictionary with up to six word phrases in combination with a base 62 number compressor.

Requirements:

Node.js 16 and above. Es6 notation in use.

_______________________________________________________________________________________________________________________________________________________________________
Instructions on Usage:

Unpack ZipFile or make Pull request.

Use - 

node test

(To show basic tests and limitations)

test.js gives an example of usage.

_______________________________________________________________________________________________________________________________________________________________________
Only words without punctuation are processed.

Example 1:

unusual characters like ¬ and € or even £ will cause the compression to become larger than the original, So KEEP THESE TO A MINIMUM!  
Length:132

1SA1rl11a#¬#102#€#sT1#£#10FtV02MmsNBu7W100#original,##So##KEEP##THESE##TO##A##MINIMUM!#  
Length:87
_______________________________________________________________________________________________________________________________________________________________________

Example2:

is about the speech disorder for goals of treatment for cluttering include unauthorized use is prohibited please be additional strategies that may help people  
Length: 158


Q1MQ1NQ1OQ1P  
Length: 12
_______________________________________________________________________________________________________________________________________________________________________

The functions AA and VV can be used with any base number. The base is inherited from the size (length) of the variable charList. Although you would need to export them by adding export to the beginning of the function and therefore adding AA and VV to the import in test.js.
